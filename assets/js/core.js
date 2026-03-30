// =============================================
// 1. 自动插入导航（所有页面共用，零冗余）
// =============================================
document.body.insertAdjacentHTML("afterbegin", `
<nav class="nav">
  <div class="container nav-inner">
    <div class="nav-logo">🐰BUG</div>
    <button class="mobile-menu-btn">☰</button>
    <div class="nav-links">
      <a href="index.html">首页</a>
      <a href="articles.html">文章</a>
      <a href="gallery.html">相册</a>
      <a href="news.html">新闻</a>
      <a href="tools.html">工具</a>
      <a href="about.html">关于</a>
    </div>
    <div class="theme-dots">
      <span class="theme-dot light" data-theme="light"></span>
      <span class="theme-dot dark" data-theme="dark"></span>
      <span class="theme-dot gray" data-theme="gray"></span>
    </div>
  </div>
</nav>
`);

// =============================================
// 2. 自动设置当前菜单高亮
// =============================================
const curPath = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a").forEach((a) => {
  if (a.getAttribute("href") === curPath) {
    a.classList.add("active");
  }
});

// =============================================
// 3. 主题切换（三个豆豆）
// =============================================
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

function updateDots() {
  document.querySelectorAll(".theme-dot").forEach((dot) => {
    dot.classList.remove("active");
  });
  document.querySelector(`.theme-dot.${savedTheme}`).classList.add("active");
}
updateDots();

document.querySelectorAll(".theme-dot").forEach((dot) => {
  dot.addEventListener("click", () => {
    const t = dot.dataset.theme;
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
    updateDots();
  });
});

// =============================================
// 4. 回到顶部按钮
// =============================================
document.body.insertAdjacentHTML("beforeend", `
<div class="to-top">↑</div>
`);

const toTopBtn = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// =============================================
// 5. 移动端三横线菜单
// =============================================
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.mobile-menu-btn')
  const menu = document.querySelector('.nav-links')
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('show')
      btn.textContent = menu.classList.contains('show') ? '✕' : '☰'
    })
  }
})
