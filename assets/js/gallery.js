// 真实本地图片数据，替换成你自己的路径
const galleryData = [
  { cover: "content/gallery/demo-album/img01.jpg", title: "实拍测试图集 01" },
  { cover: "content/gallery/demo-album/img02.jpg", title: "实拍测试图集 02" },
  { cover: "content/gallery/demo-album/img03.jpg", title: "实拍测试图集 03" },
  { cover: "content/gallery/demo-album/img04.jpg", title: "实拍测试图集 04" }
];

const grid = document.getElementById("galleryGrid");

function renderGallery() {
  grid.innerHTML = "";
  galleryData.forEach(item => {
    // 点击携带图片地址+标题跳转到详情页
    const html = `
      <div class="gallery-item fade-in" onclick="goDetail('${encodeURIComponent(item.cover)}','${item.title}')">
        <img src="${item.cover}" alt="${item.title}" loading="lazy">
        <div class="caption">${item.title}</div>
      </div>
    `;
    grid.insertAdjacentHTML("beforeend", html);
  });

  // 懒加载渐入动画
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  });
  document.querySelectorAll(".fade-in").forEach(el => obs.observe(el));
}

// 跳转详情方法
function goDetail(src,title){
  window.location.href = `gallery-detail.html?src=${src}&title=${title}`;
}

renderGallery();