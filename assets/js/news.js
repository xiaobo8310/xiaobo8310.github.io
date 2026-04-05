// 新闻数据（后续由 Python + 豆包 自动生成写入 content/news/news.json）
const newsData = [
  {
    title: "国产大模型正式开放多模态能力",
    cover: "assets/static/新闻封面.jpg",
    source: "科技日报",
    newsVia: "https://tech.163.com/",
    time: "2026-03-29",
    content: "国产大模型近日正式开放多模态能力，可同步处理文本、图像、语音等多种信息，响应速度较上一版本提升30%，已广泛应用于办公、教育等多个领域，助力产业数字化升级。"
  },
  {
    title: "全球首套AI自动驾驶货运系统落地",
    cover: "assets/static/新闻封面.jpg",
    source: "交通运输部",
    newsVia: "https://www.mot.gov.cn/",
    time: "2026-03-29",
    content: "全球首套AI自动驾驶货运系统在我国西部物流枢纽落地，可实现货物装卸、运输、交接全流程自动化，单日运输效率提升50%，大幅降低物流成本和人工安全风险。"
  },
  {
    title: "新型电池技术充电速度提升10倍",
    cover: "assets/static/新闻封面.jpg",
    source: "能源科技前沿",
    newsVia: "https://www.cas.cn/",
    time: "2026-03-29",
    content: "国内科研团队研发的新型电池技术取得重大突破，充电速度较传统锂电池提升10倍，续航里程增加40%，且成本降低25%，有望在新能源汽车、储能领域快速推广。"
  },
  {
    title: "全国一体化算力网络节点全面开通",
    cover: "assets/static/新闻封面.jpg",
    source: "国家数据局",
    newsVia: "https://www.sda.gov.cn/",
    time: "2026-03-29",
    content: "全国一体化算力网络所有节点已全面开通，实现东中西部算力资源互联互通，可高效调度算力需求，为AI、大数据、云计算等产业提供稳定支撑，推动数字经济高质量发展。"
  },
  {
    title: "Python 3.13 正式版发布，新增性能优化",
    cover: "assets/static/新闻封面.jpg",
    source: "Python官方",
    newsVia: "https://www.python.org/",
    time: "2026-03-29",
    content: "Python 3.13 正式版如期发布，重点优化了代码执行效率，核心模块运行速度提升20%以上，新增多项语法简化功能，同时优化了内存占用，进一步提升开发者编程体验。"
  },
  {
    title: "6G技术试验完成，速率突破100Gbps",
    cover: "assets/static/新闻封面.jpg",
    source: "通信研究院",
    newsVia: "https://www.catr.cn/",
    time: "2026-03-29",
    content: "我国6G技术关键试验已全面完成，峰值速率突破100Gbps，延迟控制在1毫秒以内，可实现万物互联、空天地一体化通信，为未来智能终端、工业互联网发展奠定基础。"
  },
  {
    title: "人工智能辅助医疗诊断系统获批",
    cover: "assets/static/新闻封面.jpg",
    source: "卫健委",
    newsVia: "http://www.nhc.gov.cn/",
    time: "2026-03-29",
    content: "国家卫健委正式批准人工智能辅助医疗诊断系统投入临床使用，该系统可快速识别影像病灶，诊断准确率达95%以上，能有效减轻医护人员工作负担，提升基层医疗诊断水平。"
  },
  {
    title: "开源社区发布新一代前端构建工具",
    cover: "assets/static/新闻封面.jpg",
    source: "开源技术联盟",
    newsVia: "https://opensource.org/",
    time: "2026-03-29",
    content: "全球知名开源社区发布新一代前端构建工具，支持多框架兼容，打包体积缩小30%，构建速度提升40%，同时提供丰富的插件生态，助力前端开发者高效搭建跨端应用。"
  },
  {
    title: "智能机器人进入规模化商用阶段",
    cover: "assets/static/新闻封面.jpg",
    source: "机器人产业网",
    newsVia: "https://www.robot-china.com/",
    time: "2026-03-29",
    content: "智能机器人已进入规模化商用阶段，涵盖工业制造、餐饮服务、养老护理等多个场景，具备自主导航、语音交互、精准操作等能力，有效替代重复性劳动，提升行业效率。"
  },
  {
    title: "全球数据安全合规新标准正式实施",
    cover: "assets/static/新闻封面.jpg",
    source: "网络安全机构",
    newsVia: "https://www.cert.org.cn/",
    time: "2026-03-29",
    content: "全球数据安全合规新标准正式实施，明确了数据收集、存储、传输、使用的安全要求，强化了个人信息保护，企业需完成合规整改，推动全球数据安全治理体系完善。"
  }
];

const newsList = document.getElementById("newsList");

function renderNews() {
  newsList.innerHTML = "";
  newsData.forEach((item, i) => {
    const html = `
      <div class="news-item fade-in" data-title="${item.title}" onclick="goDetail(${i})">
        <img class="news-cover" src="${item.cover}" alt="">
        <div class="news-info">
          <div class="news-title">${item.title}</div>
          <div class="news-source">${item.source} · ${item.time}</div>
        </div>
      </div>
    `;
    newsList.insertAdjacentHTML("beforeend", html);
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  });
  document.querySelectorAll(".fade-in").forEach(el => obs.observe(el));
}

// 跳转到新闻详情
function goDetail(index) {
  location.href = `news-detail.html?index=${index}`;
}

renderNews();

// 保存新闻列表给详情页使用
localStorage.setItem("newsList", JSON.stringify(newsData));

// ==============================
// 新闻搜索功能
// ==============================
document.addEventListener('DOMContentLoaded', function () {
  const newsSearch = document.getElementById('newsSearch');
  if (!newsSearch) return;

  newsSearch.addEventListener('input', function () {
    const kw = this.value.toLowerCase().trim();
    document.querySelectorAll('.news-item').forEach(item => {
      const title = (item.dataset.title || '').toLowerCase();
      const show = title.includes(kw);
      item.style.display = show ? 'flex' : 'none';
    });
  });
});