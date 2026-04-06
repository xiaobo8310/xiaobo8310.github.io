import os
import re
import shutil
import tkinter as tk
from tkinter import filedialog, messagebox, ttk
from datetime import datetime
import exifread
from PIL import Image, ImageTk

# ==============================
# 配置
# ==============================
TARGET_DIR = "content/gallery"
SAVE_JS_PATH = "galleryData.txt"
os.makedirs(TARGET_DIR, exist_ok=True)

# ==============================
# 全局变量
# ==============================
galleryData = []
selected_images = []
current_index = 0
preview_img = None

# ==============================
# EXIF 读取
# ==============================
def get_exif_data(img_path):
    try:
        with open(img_path, 'rb') as f:
            exif = exifread.process_file(f, details=False)

        dt_str = str(exif.get("EXIF DateTimeOriginal", "")) or None

        camera = str(exif.get("Image Model", "")).strip()
        focal = str(exif.get("EXIF FocalLength", "")).strip()

        aperture = ""
        if "EXIF FNumber" in exif:
            try:
                v = eval(str(exif["EXIF FNumber"]))
                aperture = f"{v:.1f}"
            except:
                pass

        shutter = ""
        if "EXIF ExposureTime" in exif:
            try:
                v = str(exif["EXIF ExposureTime"])
                if "/" in v:
                    shutter = v
                else:
                    s = float(v)
                    shutter = f"1/{round(1/s)}" if s < 1 else f"{s}"
            except:
                pass

        iso = str(exif.get("EXIF ISOSpeedRatings", "")).strip()

        return {
            "datetime": dt_str,
            "camera": camera,
            "focal": focal,
            "aperture": aperture,
            "shutter": shutter,
            "iso": iso
        }
    except:
        return {
            "datetime": None,
            "camera": "",
            "focal": "",
            "aperture": "",
            "shutter": "",
            "iso": ""
        }

# ==============================
# 读取历史 JS
# ==============================
def load_existing_data():
    global galleryData
    galleryData = []
    if not os.path.exists(SAVE_JS_PATH):
        return
    try:
        with open(SAVE_JS_PATH, "r", encoding="utf-8") as f:
            content = f.read()
        matches = re.findall(r'\{[^}]+\}', content)
        for s in matches:
            try:
                galleryData.append({
                    "cover": (re.search(r'cover\s*:\s*"([^"]+)"', s) or [None, ""])[1],
                    "title": (re.search(r'title\s*:\s*"([^"]+)"', s) or [None, ""])[1],
                    "tag": (re.search(r'tag\s*:\s*"([^"]+)"', s) or [None, ""])[1],
                    "time": (re.search(r'time\s*:\s*"([^"]+)"', s) or [None, ""])[1],
                    "photograph": (re.search(r'photograph\s*:\s*"([^"]+)"', s) or [None, "NULL"])[1]
                })
            except:
                continue
    except:
        galleryData = []

# ==============================
# 保存 JS（拼接成你要的格式）
# ==============================
def save_gallery_to_js():
    lines = []
    for item in galleryData:
        ph = item["photograph"] or "NULL"
        lines.append(f'  {{ cover: "{item["cover"]}", title: "{item["title"]}", tag: "{item["tag"]}", time: "{item["time"]}", photograph: "{ph}" }},')
    js = "const galleryData = [\n" + "\n".join(lines) + "\n];\n"
    with open(SAVE_JS_PATH, "w", encoding="utf-8") as f:
        f.write(js)

# ==============================
# 选择图片
# ==============================
def select_images():
    global selected_images, current_index
    paths = filedialog.askopenfilenames(filetypes=[("图片", "*.jpg *.jpeg *.png *.webp")])
    if not paths:
        return
    selected_images = list(paths)
    current_index = 0
    show_current_image()

# ==============================
# 显示预览 & 填充参数
# ==============================
def show_current_image():
    global preview_img
    if not selected_images:
        return

    p = selected_images[current_index]
    try:
        img = Image.open(p)
        img.thumbnail((460, 280))
        preview_img = ImageTk.PhotoImage(img)
        lbl_preview.config(image=preview_img, text="")
    except:
        lbl_preview.config(image="", text="无法预览", fg="#e53935")

    exif = get_exif_data(p)
    today = datetime.now()

    try:
        if exif["datetime"]:
            dt = datetime.strptime(exif["datetime"], "%Y:%m:%d %H:%M:%S")
            y, m, d = str(dt.year), str(dt.month), str(dt.day)
        else:
            y, m, d = str(today.year), str(today.month), str(today.day)
    except:
        y, m, d = str(today.year), str(today.month), str(today.day)

    # 清空
    entry_year.delete(0, tk.END)
    entry_month.delete(0, tk.END)
    entry_day.delete(0, tk.END)
    entry_camera.delete(0, tk.END)
    entry_focal.delete(0, tk.END)
    entry_aperture.delete(0, tk.END)
    entry_shutter.delete(0, tk.END)
    entry_iso.delete(0, tk.END)

    # 填充
    entry_year.insert(0, y)
    entry_month.insert(0, m)
    entry_day.insert(0, d)
    entry_camera.insert(0, exif["camera"])
    entry_focal.insert(0, exif["focal"])
    entry_aperture.insert(0, exif["aperture"])
    entry_shutter.insert(0, exif["shutter"])
    entry_iso.insert(0, exif["iso"])

    lbl_status.config(text=f"第 {current_index+1}/{len(selected_images)} 张 | 已入库：{len(galleryData)} 张")

# ==============================
# 保存：分块 → 拼接成一行
# ==============================
def save_current():
    global current_index, galleryData
    if not selected_images:
        messagebox.showwarning("提示", "请先选择图片")
        return

    title = entry_title.get().strip()
    tag = entry_tag.get().strip()
    y = entry_year.get().strip()
    m = entry_month.get().strip()
    d = entry_day.get().strip()

    if not (title and tag and y and m and d):
        messagebox.showwarning("提示", "标题、标签、日期不能为空")
        return

    camera = entry_camera.get().strip()
    focal = entry_focal.get().strip()
    apt = entry_aperture.get().strip()
    shutter = entry_shutter.get().strip()
    iso = entry_iso.get().strip()

    # 拼接成你要的格式
    parts = []
    if camera:
        parts.append(f"相机：{camera}")
    if focal:
        parts.append(f"镜头焦距：{focal}")
    if apt:
        parts.append(f"光圈：f/{apt}")
    if shutter:
        parts.append(f"快门：{shutter}s")
    if iso:
        parts.append(f"ISO：{iso}")

    photo_str = " | ".join(parts) if parts else "NULL"

    time_str = f"{y}-{m.zfill(2)}-{d.zfill(2)}"
    src = selected_images[current_index]
    fname = os.path.basename(src)
    dest = os.path.join(TARGET_DIR, fname)

    try:
        shutil.copy(src, dest)
        galleryData.append({
            "cover": dest.replace("\\", "/"),
            "title": title,
            "tag": tag,
            "time": time_str,
            "photograph": photo_str
        })
        save_gallery_to_js()
    except Exception as e:
        messagebox.showerror("错误", f"保存失败：{str(e)}")
        return

    current_index += 1
    if current_index < len(selected_images):
        show_current_image()
        entry_title.delete(0, tk.END)
        entry_tag.delete(0, tk.END)
    else:
        messagebox.showinfo("完成", "✅ 全部处理完毕！")
        lbl_preview.config(image="", text="预览区")
        selected_images.clear()
        current_index = 0

# ==============================
# 界面：每个参数一行，整齐不乱
# ==============================
root = tk.Tk()
root.title("图片EXIF管理工具")
root.geometry("1000x720")
root.configure(bg="#f8f9fa")

style = ttk.Style()
style.theme_use("clam")

# 主容器
frame_main = tk.Frame(root, bg="#f8f9fa", padx=20, pady=20)
frame_main.pack(fill=tk.BOTH, expand=True)

# ========== 左侧预览 ==========
frame_left = tk.Frame(frame_main, width=460, bg="white", bd=1, relief=tk.RIDGE)
frame_left.pack(side=tk.LEFT, fill=tk.BOTH, expand=False, padx=(0, 24))
frame_left.pack_propagate(False)

tk.Label(frame_left, text="图片预览", font=("Microsoft YaHei UI", 11, "bold"), bg="white").pack(pady=12)
lbl_preview = tk.Label(frame_left, text="预览区", bg="#f1f3f5", fg="#888")
lbl_preview.pack(fill=tk.BOTH, expand=True, padx=12, pady=12)

# ========== 右侧控制面板 ==========
frame_right = tk.Frame(frame_main, bg="#f8f9fa")
frame_right.pack(side=tk.RIGHT, fill=tk.BOTH, expand=True)

# 状态
lbl_status = tk.Label(frame_right, text=f"已入库：{len(galleryData)} 张", font=("Microsoft YaHei UI", 10), bg="#f8f9fa")
lbl_status.pack(anchor="w", pady=(0, 10))

# 选择图片
ttk.Button(frame_right, text="📷 批量选择图片", command=select_images).pack(fill=tk.X, pady=6)

# 标题
tk.Label(frame_right, text="标题", font=("Microsoft YaHei UI", 10, "bold"), bg="#f8f9fa").pack(anchor="w", pady=(8, 4))
entry_title = ttk.Entry(frame_right, font=("Microsoft YaHei UI", 10))
entry_title.pack(fill=tk.X, pady=2)

# 标签
tk.Label(frame_right, text="标签", font=("Microsoft YaHei UI", 10, "bold"), bg="#f8f9fa").pack(anchor="w", pady=(8, 4))
entry_tag = ttk.Entry(frame_right, font=("Microsoft YaHei UI", 10))
entry_tag.pack(fill=tk.X, pady=2)

# --------------------------
# 拍摄参数：每个一行！
# --------------------------
tk.Label(frame_right, text="拍摄参数", font=("Microsoft YaHei UI", 10, "bold"), bg="#f8f9fa").pack(anchor="w", pady=(14, 6))

# 相机
tk.Label(frame_right, text="相机", bg="#f8f9fa").pack(anchor="w")
entry_camera = ttk.Entry(frame_right, font=("Microsoft YaHei UI", 10))
entry_camera.pack(fill=tk.X, pady=2)

# 镜头焦距
tk.Label(frame_right, text="镜头焦距", bg="#f8f9fa").pack(anchor="w")
entry_focal = ttk.Entry(frame_right, font=("Microsoft YaHei UI", 10))
entry_focal.pack(fill=tk.X, pady=2)

# 光圈
tk.Label(frame_right, text="光圈", bg="#f8f9fa").pack(anchor="w")
entry_aperture = ttk.Entry(frame_right, font=("Microsoft YaHei UI", 10))
entry_aperture.pack(fill=tk.X, pady=2)

# 快门
tk.Label(frame_right, text="快门", bg="#f8f9fa").pack(anchor="w")
entry_shutter = ttk.Entry(frame_right, font=("Microsoft YaHei UI", 10))
entry_shutter.pack(fill=tk.X, pady=2)

# ISO
tk.Label(frame_right, text="ISO", bg="#f8f9fa").pack(anchor="w")
entry_iso = ttk.Entry(frame_right, font=("Microsoft YaHei UI", 10))
entry_iso.pack(fill=tk.X, pady=2)

# --------------------------
# 拍摄日期
# --------------------------
tk.Label(frame_right, text="拍摄日期", font=("Microsoft YaHei UI", 10, "bold"), bg="#f8f9fa").pack(anchor="w", pady=(14, 6))
frame_date = tk.Frame(frame_right, bg="#f8f9fa")
frame_date.pack(fill=tk.X)

entry_year = ttk.Entry(frame_date, width=8, font=("Microsoft YaHei UI", 10))
entry_month = ttk.Entry(frame_date, width=6, font=("Microsoft YaHei UI", 10))
entry_day = ttk.Entry(frame_date, width=6, font=("Microsoft YaHei UI", 10))

entry_year.grid(row=0, column=0, padx=4)
tk.Label(frame_date, text="年", bg="#f8f9fa").grid(row=0, column=1, padx=2)
entry_month.grid(row=0, column=2, padx=4)
tk.Label(frame_date, text="月", bg="#f8f9fa").grid(row=0, column=3, padx=2)
entry_day.grid(row=0, column=4, padx=4)
tk.Label(frame_date, text="日", bg="#f8f9fa").grid(row=0, column=5, padx=2)

# 保存按钮
ttk.Button(frame_right, text="✅ 保存当前图片 → 自动下一张", command=save_current).pack(fill=tk.X, pady=(22, 10))

# 初始化
load_existing_data()
lbl_status.config(text=f"已入库：{len(galleryData)} 张")

root.mainloop()