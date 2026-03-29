// 新闻数据（后续由 Python + 豆包 自动生成写入 content/news/news.json）
const newsData = [
  {
    title: "国产大模型正式开放多模态能力",
    cover: "assets/static/placeholder.jpg",
    source: "科技日报",
    time: "2026-03-29"
  },
  {
    title: "全球首套AI自动驾驶货运系统落地",
    cover: "assets/static/placeholder.jpg",
    source: "交通运输部",
    time: "2026-03-29"
  },
  {
    title: "新型电池技术充电速度提升10倍",
    cover: "assets/static/placeholder.jpg",
    source: "能源科技前沿",
    time: "2026-03-29"
  },
  {
    title: "全国一体化算力网络节点全面开通",
    cover: "assets/static/placeholder.jpg",
    source: "国家数据局",
    time: "2026-03-29"
  },
  {
    title: "Python 3.13 正式版发布，新增性能优化",
    cover: "assets/static/placeholder.jpg",
    source: "Python官方",
    time: "2026-03-29"
  },
  {
    title: "6G技术试验完成，速率突破100Gbps",
    cover: "assets/static/placeholder.jpg",
    source: "通信研究院",
    time: "2026-03-29"
  },
  {
    title: "人工智能辅助医疗诊断系统获批",
    cover: "assets/static/placeholder.jpg",
    source: "卫健委",
    time: "2026-03-29"
  },
  {
    title: "开源社区发布新一代前端构建工具",
    cover: "assets/static/placeholder.jpg",
    source: "开源技术联盟",
    time: "2026-03-29"
  },
  {
    title: "智能机器人进入规模化商用阶段",
    cover: "assets/static/placeholder.jpg",
    source: "机器人产业网",
    time: "2026-03-29"
  },
  {
    title: "全球数据安全合规新标准正式实施",
    cover: "assets/static/placeholder.jpg",
    source: "网络安全机构",
    time: "2026-03-29"
  }
];

const newsList = document.getElementById("newsList");

function renderNews() {
  newsList.innerHTML = "";
  newsData.forEach(item => {
    const html = `
      <div class="news-item fade-in">
        <img class="news-cover" src="${item.cover}" alt="">
        <div class="news-info">
          <div class="news-title">${item.title}</div>
          <div class="news-source">${item.source} · ${item.time}</div>
        </div>
      </div>
    `;
    newsList.insertAdjacentHTML("beforeend", html);
  });

  // 淡入动画
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  });
  document.querySelectorAll(".fade-in").forEach(el => obs.observe(el));
}

renderNews();