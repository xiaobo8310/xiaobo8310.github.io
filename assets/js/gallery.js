// 真实本地图片数据，替换成你自己的路径
const galleryData = [
  { cover: "content/gallery/demo-album/img01.jpg", title: "实拍测试图集 01", tag: "测试,风景" },
  { cover: "content/gallery/demo-album/img02.jpg", title: "实拍测试图集 02", tag: "测试,城市" },
  { cover: "content/gallery/demo-album/img03.jpg", title: "实拍测试图集 03", tag: "测试,人像" },
  { cover: "content/gallery/demo-album/img04.jpg", title: "实拍测试图集 04", tag: "测试,夜景" },
  { cover: "content/gallery/demo-album/img05.jpg", title: "实拍测试图集 05", tag: "测试,风光" },
  { cover: "content/gallery/demo-album/img06.jpg", title: "实拍测试图集 06", tag: "测试,旅行" },
  { cover: "content/gallery/demo-album/img07.jpg", title: "实拍测试图集 07", tag: "测试,建筑" },
  { cover: "content/gallery/demo-album/img08.jpg", title: "实拍测试图集 08", tag: "测试,生活" }
];

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

function goDetail(src, title, tag, index){
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