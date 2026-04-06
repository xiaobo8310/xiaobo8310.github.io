// 真实本地图片数据，替换成你自己的路径
const galleryData = [
  { cover: "content/gallery/IMG_20260406_135429.jpg", title: "眠", tag: "花生,猫咪", time: "2026-04-06", photograph: "相机：vivo X200 Pro mini | 镜头焦距：133/10 | 光圈：f/2.6 | 快门：1/25s | ISO：1606" },
  { cover: "content/gallery/b550e90a02274a6501245881d9e8a5e.jpg", title: "壁纸", tag: "chiikawam,吉伊,小八,乌萨奇", time: "2026-04-06", photograph: "NULL" },
];




// ==============================
// 图集渲染与交互（代码不变）
// ==============================
const grid = document.getElementById("galleryGrid");
function renderGallery() {
  grid.innerHTML = "";
  galleryData.forEach((item, i) => {
    const html = `
  <div 
    class="gallery-item fade-in" 
    onclick="goDetail('${encodeURIComponent(item.cover)}','${item.title}','${item.tag}',${i})"
    data-title="${item.title}"
    data-tag="${item.tag}"
  >
    <img src="${item.cover}" alt="${item.title}" loading="lazy">
    <div class="caption">${item.title}</div>
  </div>
`;
    grid.insertAdjacentHTML("beforeend", html);
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  });
  document.querySelectorAll(".fade-in").forEach(el => obs.observe(el));
}
function goDetail(src, title, tag, index) {
  window.location.href = `gallery-detail.html?src=${src}&title=${title}&tag=${tag}&index=${index}`;
}
renderGallery();
localStorage.setItem("galleryList", JSON.stringify(galleryData));

// ==============================
// 相册搜索功能
// ==============================
document.addEventListener('DOMContentLoaded', function () {
  const gallerySearch = document.getElementById('gallerySearch');
  if (!gallerySearch) return;

  gallerySearch.addEventListener('input', function () {
    const kw = this.value.toLowerCase().trim();
    document.querySelectorAll('.gallery-item').forEach(item => {
      const t = item.dataset.title?.toLowerCase() || '';
      const g = item.dataset.tag?.toLowerCase() || '';
      const show = t.includes(kw) || g.includes(kw);
      item.style.display = show ? 'block' : 'none';
    });
  });
});