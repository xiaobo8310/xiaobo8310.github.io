// =============================================
// 1. 导航+侧边栏一体化插入（排版：三横线→LOGO→豆豆）
// =============================================
document.body.insertAdjacentHTML("afterbegin", `
<nav class="nav">
  <div class="container nav-inner">
    <!-- 最左：三横线按钮 -->
    <button class="mobile-menu-btn">☰</button>
    <!-- 左：LOGO -->
    <div class="nav-logo">🐰BUG</div>
    <!-- 中：PC端导航链接 -->
    <div class="nav-links">
      <a href="index.html">首页</a>
      <a href="articles.html">文章</a>
      <a href="gallery.html">相册</a>
      <a href="news.html">新闻</a>
      <a href="tools.html">工具</a>
      <a href="about.html">关于</a>
    </div>
    <!-- 最右：主题豆豆 -->
    <div class="theme-dots">
      <span class="theme-dot light" data-theme="light"></span>
      <span class="theme-dot dark" data-theme="dark"></span>
      <span class="theme-dot gray" data-theme="gray"></span>
    </div>
  </div>
</nav>
<!-- 手机侧边导航（导航附属，右侧滑出） -->
<div class="sidebar-mask"></div>
<div class="nav-sidebar">
  <a href="index.html">首页</a>
  <a href="articles.html">文章</a>
  <a href="gallery.html">相册</a>
  <a href="news.html">新闻</a>
  <a href="tools.html">工具</a>
  <a href="about.html">关于</a>
</div>
`);

// =============================================
// 2. 导航当前页高亮（PC导航+手机侧边栏通用）
// =============================================
const curPath = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a, .nav-sidebar a").forEach((a) => {
  if (a.getAttribute("href") === curPath) {
    a.classList.add("active");
  }
});

// =============================================
// 3. 主题切换逻辑（保留原有，豆豆激活状态同步）
// =============================================
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
// 更新豆豆激活状态
function updateThemeDots() {
  document.querySelectorAll(".theme-dot").forEach(dot => dot.classList.remove("active"));
  document.querySelector(`.theme-dot.${savedTheme}`)?.classList.add("active");
}
updateThemeDots();
// 豆豆点击事件
document.querySelectorAll(".theme-dot").forEach((dot) => {
  dot.addEventListener("click", () => {
    const theme = dot.dataset.theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    updateThemeDots();
  });
});

// =============================================
// 4. 手机端侧边导航核心逻辑（点击展开/关闭，遮罩/窗口适配）
// =============================================
const menuBtn = document.querySelector('.mobile-menu-btn');
const sidebar = document.querySelector('.nav-sidebar');
const mask = document.querySelector('.sidebar-mask');
// 三横线按钮点击：切换侧边栏/遮罩/按钮图标
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
  mask.classList.toggle('show');
  menuBtn.textContent = sidebar.classList.contains('show') ? '✕' : '☰';
});
// 遮罩点击：关闭侧边栏+遮罩，恢复按钮图标
mask.addEventListener('click', () => {
  sidebar.classList.remove('show');
  mask.classList.remove('show');
  menuBtn.textContent = '☰';
});
// 窗口大小变化：大屏自动关闭侧边栏
window.addEventListener('resize', () => {
  if (window.innerWidth > 640) {
    sidebar.classList.remove('show');
    mask.classList.remove('show');
    menuBtn.textContent = '☰';
  }
});

// =============================================
// 5. 回到顶部按钮逻辑（保留原有功能）
// =============================================
document.body.insertAdjacentHTML("beforeend", `<div class="to-top">↑</div>`);
const toTopBtn = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  toTopBtn.classList.toggle("show", window.scrollY > 400);
});
toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});