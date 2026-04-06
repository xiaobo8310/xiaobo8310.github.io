
const newsData = [
  // 1. 时政
  {
    title: "习语丨‘不管时代怎样变化，我们都要永远铭记他们的牺牲和奉献’",
    cover: "assets/static/新闻封面.jpg",
    source: "人民日报客户端",
    newsVia: "https://www.chinanews.com.cn/gn/shipin/2026/04-06/news1050821.shtml",
    time: "2026-04-06",
    content: "2026年4月6日，人民日报客户端发布了一篇题为《习语丨‘不管时代怎样变化，我们都要永远铭记他们的牺牲和奉献’》的文章，强调在新时代背景下，铭记先烈的牺牲和奉献是全社会的共同责任。文章指出，无论时代如何变迁，这种铭记精神都应成为推动中华民族伟大复兴的强大精神力量，激励全体人民团结奋斗，奋进前行。[本内容由©AI自动生成]"
  },
  // 2. 财经
  {
    title: "菲律宾股指下跌1%，亚洲市场波动加剧",
    cover: "assets/static/新闻封面.jpg",
    source: "界面新闻",
    newsVia: "https://www.jiemian.com/article/1005896662_115239.html",
    time: "2026-04-06",
    content: "2026年4月6日，界面新闻报道，菲律宾股指收盘下跌1%，为近期亚洲市场带来波动。与此同时，东盟与中日韩经济体预计2026年整体经济增长率将达到4%。报道还提及伊朗媒体称美以空袭谢里夫理工大学，引发地区紧张局势加剧。整体来看，受地缘政治影响，亚洲金融市场在本周表现出明显的风险偏好下降趋势。[本内容由©AI自动生成]"
  },
  // 3. AI
  {
    title: "AI手机P70 Pro 2025上市，京东低至807元",
    cover: "assets/static/新闻封面.jpg",
    source: "中关村在线",
    newsVia: "https://www.163.com/dy/article/KPQN6LEV05169CIL.html",
    time: "2026-04-06",
    content: "2026年4月6日，中关村在线发布消息称，最新AI手机P70 Pro 2025已在京东平台开售，售价低至807元。该手机搭载最新一代AI芯片，支持联网实时检索和生图功能，能够直接搜索全网最新资讯并生成知识卡片。发布方表示，此举旨在通过硬件降价普及AI技术，让更多年轻用户体验AI生成内容的便利性，进一步推动AI技术在消费电子领域的落地。[本内容由©AI自动生成]"
  },
  // 4. AI
  {
    title: "同事被蒸馏成了token继续陪着你——AI时代职场新生态",
    cover: "assets/static/新闻封面.jpg",
    source: "21世纪经济报道",
    newsVia: "https://www.21jingji.com/article/20260406/herald/ae3ca1f0a99e1ad9d9b8f09844f60a58.html",
    time: "2026-04-06",
    content: "2026年4月6日，21世纪经济报道刊登了一篇题为《同事被蒸馏成了token继续陪着你》的深度分析文章，探讨了AI技术对职场生态的颠覆性影响。文章指出，随着大模型的普及，职场中大量重复性劳动正在被AI取代，员工正逐渐被数字化为知识图谱中的节点（token），即使离职也可能以数据形式继续为企业服务。作者呼吁企业在拥抱AI效率的同时，需要正视数据伦理和人力资源管理的新挑战。[本内容由©AI自动生成]"
  },
  // 5. AI
  {
    title: "澎湃AI早新闻丨2026年4月6日：AI生成视频与技术前沿",
    cover: "assets/static/新闻封面.jpg",
    source: "澎湃新闻",
    newsVia: "https://www.thepaper.cn/newsDetail_forward_32911526",
    time: "2026-04-06",
    content: "2026年4月6日，《澎湃新闻》发布了AI早新闻特辑，聚焦AI技术的最新进展。特辑中提到，最新一代AI模型在视频生成领域取得突破，能够自动提炼新闻要点并生成知识卡片，排版效率大幅提升。同时，报道关注了AI在金融风控和医学影像分析中的深度应用，指出AI正在从娱乐消费向专业领域渗透，重塑各行业的业务流程和价值链。[本内容由©AI自动生成]"
  },
  // 6. AI
  {
    title: "AI版《白蛇传1924》两天播放破2亿，开启文娱新纪元",
    cover: "assets/static/新闻封面.jpg",
    source: "搜狐",
    newsVia: "https://www.sohu.com/a/1005950981_121118784",
    time: "2026-04-06",
    content: "2026年4月6日，搜狐娱乐频道报道，AI改编的古装剧《白蛇传1924》在上线两天后播放量突破2亿，标志着AI在影视制作领域的商业化应用进入全新阶段。该剧采用AI深度学习技术进行角色造型、对白生成和特效渲染，实现了超低成本的高质量制作。业内人士认为，这一案例展示了AI在内容创意和生产效率上的颠覆潜力，可能重塑传统影视产业的创作模式。[本内容由©AI自动生成]"
  },
  // 7. 数码
  {
    title: "新浪数码热点小时报丨2026年04月06日13时_今日实时数码热点速递",
    cover: "assets/static/新闻封面.jpg",
    source: "新浪",
    newsVia: "https://k.sina.com.cn/article_7857201856_1d45362c00190419h0.html",
    time: "2026-04-06",
    content: "2026年4月6日，新浪数码热点小时报发布，聚焦今日13时的数码热点。报道指出，在经历手机涨价潮后，旧手机市场需求激增，年轻用户对二手手机的接受度显著提升，出现了“旧手机不卡”的现象。同时，报道关注到微软Surface Pro第11代的发布，强调其在办公自动化和多任务处理上的优势，预示着高端数码设备在企业级市场的持续渗透。[本内容由©AI自动生成]"
  },
  // 8. 数码
  {
    title: "新浪科技热点小时报丨2026年04月06日09时_今日实时科技热点速递",
    cover: "assets/static/新闻封面.jpg",
    source: "新浪",
    newsVia: "https://k.sina.com.cn/article_7857201856_1d45362c00190413yc.html",
    time: "2026-04-06",
    content: "2026年4月6日，新浪科技热点小时报聚焦09时的科技动态。报道重点关注了长鹰-8大型运输无人机的成功首飞，这是全球迄今首飞成功的最大无人运输机，标志着我国在大型无人机技术上的重大突破。此外，报道提到上海交通大学在AI芯片领域的最新研发进展，指出该校团队在AI算力提升和能耗控制方面取得了显著成果，对推动国产AI硬件生态具有重要意义。[本内容由©AI自动生成]"
  },
  // 9. 综合科技
  {
    title: "今年一季度消费品以旧换新销售额超4300亿元，数码家电成主力",
    cover: "assets/static/新闻封面.jpg",
    source: "21财经",
    newsVia: "https://www.163.com/v/video/VDOT7EDP6.html",
    time: "2026-04-06",
    content: "2026年4月6日，21财经发布报告称，今年一季度消费品以旧换新销售额突破4300亿元，带动了数码和智能产品的爆发式增长。报告显示，6类家电以旧换新共销售2320.5万台，数码产品购新销售3632万件，创下新高。这一数据反映了在绿色消费理念和政策引导下，消费者更倾向于更新换代，推动了电子产品的回收再利用和技术迭代速度。[本内容由©AI自动生成]"
  },
  // 10. 综合科技
  {
    title: "全国铁路今天预计发送旅客2080万人次，恢复高速客运高峰",
    cover: "assets/static/新闻封面.jpg",
    source: "界面新闻",
    newsVia: "https://www.jiemian.com/article/1005850981_121118784.html",
    time: "2026-04-06",
    content: "2026年4月6日，界面新闻报道，全国铁路今日预计发送旅客2080万人次，标志着春运客运高峰期全面恢复。报道指出，随着经济的快速回暖和疫情防控措施的优化，铁路客运恢复到了疫情前的水平。与此同时，报道提及了近期铁路部门推出的多项惠民措施，包括票价优惠和服务提升，旨在进一步刺激消费需求，带动沿线地区经济发展。[本内容由©AI自动生成]"
  }
];

// ==============================
// 以下代码永久固定，不会变动
// ==============================
const newsList = document.getElementById("newsList");

function renderNews() {
  newsList.innerHTML = "";
  newsData.forEach((item, i) => {
    const html = `
      <div class="news-item fade-in" data-title="${item.title}" onclick="goDetail(${i})">
        <img class="news-cover" src="${item.cover}" alt="${item.title}">
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

function goDetail(index) {
  location.href = `news-detail.html?index=${index}`;
}

renderNews();
localStorage.setItem("newsList", JSON.stringify(newsData));

document.addEventListener('DOMContentLoaded', function () {
  const newsSearch = document.getElementById('newsSearch');
  if (!newsSearch) return;

  newsSearch.addEventListener('input', function () {
    const kw = this.value.toLowerCase().trim();
    document.querySelectorAll('.news-item').forEach(item => {
      const title = (item.dataset.title || '').toLowerCase();
      item.style.display = title.includes(kw) ? 'flex' : 'none';
    });
  });
});