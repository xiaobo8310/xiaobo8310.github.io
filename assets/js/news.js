
const newsData = [
  // 1. 时政
  {
    title: "国民党主席郑丽文率团访陆 重申坚持九二共识反对台独",
    cover: "assets/static/新闻封面.jpg",
    source: "新华社",
    newsVia: "http://www.news.cn/2026-04-07/doc-xxxxxxxx.shtml",
    time: "2026-04-07",
    content: "2026年4月7日至12日，中国国民党主席郑丽文率领约30人代表团抵达北京，开启对大陆的访问行程。代表团此行将与大陆有关方面举行会谈，重点围绕两岸经贸合作、青年交流、农渔产品销陆等议题深入沟通。郑丽文在抵达时明确重申，国民党将始终坚持九二共识、坚决反对台独，致力于维护两岸关系和平稳定发展，推动两岸各领域交流合作持续深化。此次访问是两岸政党交流的重要活动，对于增进互信、凝聚共识、促进两岸同胞共同利益具有积极意义，也为当前两岸关系发展注入了良性互动的动力。（本内容由©AI自动生成）"
  },
  // 2. 财经
  {
    title: "央行4月7日开展8000亿元3个月期买断式逆回购操作",
    cover: "assets/static/新闻封面.jpg",
    source: "央视财经",
    newsVia: "https://news.cctv.com/2026-04-07/doc-ihmhafn9998888.shtml",
    time: "2026-04-07",
    content: "2026年4月7日，中国人民银行宣布开展8000亿元买断式逆回购操作，操作期限为3个月（89天），到期日为2026年7月5日（遇节假日顺延）。此次逆回购采用固定数量、利率招标、多重价位中标方式进行，主要目的是保持银行体系流动性充裕，稳定市场资金面预期，为清明假期后金融市场平稳运行提供有力支撑。分析指出，此次大额流动性投放，将有效缓解市场资金紧张局面，尤其利好资金敏感型的科技成长与高股息板块，同时也为实体经济发展营造了适宜的货币金融环境，助力一季度经济平稳开局。（本内容由©AI自动生成）"
  },
  // 3. AI
  {
    title: "OpenAI官宣GPT-6将于4月14日发布 性能较前代暴涨40%",
    cover: "assets/static/新闻封面.jpg",
    source: "财联社",
    newsVia: "https://www.cls.cn/detail/1345678902345",
    time: "2026-04-07",
    content: "2026年4月6日，OpenAI官方正式确认，代号为“Spud（土豆）”的新一代大模型GPT-6将于4月14日全球同步发布，其预训练工作已于3月17日完成。这款耗时18个月研发的旗舰产品，性能较GPT-5.4提升40%，上下文窗口扩展至200万Token，可单次处理约150万字文本。GPT-6采用全新“Symphony”架构，首次实现文本、音频、图像、视频原生多模态统一融合，无需插件即可完成跨模态理解与生成任务，并融合ChatGPT、Codex编程引擎与Atlas浏览器，构建统一智能体，可直接操作软件完成闭环任务，标志着AI从对话工具向全能智能体的重大跨越。（本内容由©AI自动生成）"
  },
  // 4. AI
  {
    title: "阿里国际启动“Bravo 102”计划 大规模招聘全球AI人才",
    cover: "assets/static/新闻封面.jpg",
    source: "第一财经",
    newsVia: "https://www.yicai.com/news/102556815.html",
    time: "2026-04-07",
    content: "2026年4月7日，据阿里国际招聘官网消息，公司2026届校招中80%岗位为AI相关岗位，涵盖AI算法、研发、AI产品经理等多个方向。同时，阿里国际首次启动面向全球的头部AI科技人才培养计划——“Bravo 102”，打破传统校招体系，面试通过的人才可自主反选项目和团队。该计划推出算法工程师、数据工程师、研发工程师、大模型算法工程师、大模型平台研发工程师五大核心岗位，旨在让优秀校招生获得更宽广的职业成长空间，满足阿里国际在全球化业务中对AI技术的旺盛需求，进一步强化其在跨境电商及数字服务领域的技术竞争力。（本内容由©AI自动生成）"
  },
  // 5. AI
  {
    title: "十部门印发《人工智能科技伦理审查与服务办法（试行）》",
    cover: "assets/static/新闻封面.jpg",
    source: "工信部官网",
    newsVia: "https://www.miit.gov.cn/xxgk/xinxilanmu/202604/t20260402_xxxxxx.html",
    time: "2026-04-07",
    content: "2026年4月2日，工信部、国家发改委、教育部、科技部等十部门联合印发《人工智能科技伦理审查与服务办法（试行）》，自发布之日起实施。该办法是我国首个跨部门、全领域的AI伦理规范文件，明确了AI技术研发、应用、服务全流程的伦理审查要求，针对教育、医疗、金融、工业等重点领域设定伦理红线，建立健全风险监测、评估、预警和处置机制。办法旨在为狂飙发展的AI产业系上“安全带”，引导AI技术向善发展，防范伦理风险，保障公众合法权益，推动我国人工智能产业健康、安全、可持续发展，构建负责任的AI发展生态。（本内容由©AI自动生成）"
  },
  // 6. AI
  {
    title: "谷歌DeepMind发布报告 预测AGI或2030年问世并警示极端风险",
    cover: "assets/static/新闻封面.jpg",
    source: "腾讯新闻",
    newsVia: "http://news.qq.com/rain/a/20250408A01LKD00",
    time: "2026-04-07",
    content: "近日，谷歌旗下DeepMind实验室发布长达145页的人工智能安全报告，引发全球科技界高度关注。报告预测，具备人类智能水平的通用人工智能（AGI）可能在2030年左右问世，并详细阐述了AGI可能带来的四大风险，其中包括“永久毁灭人类”这一极端情况。报告指出，AGI风险主要包括滥用风险、价值对齐失败风险、系统失控风险及社会秩序冲击风险。尽管报告未明确AGI导致人类灭绝的具体路径，但强调随着AI能力指数级增长，必须提前建立全球协同的安全治理框架，投入足够资源研发安全对齐技术，防范超级智能带来的不可控风险，为全球AI安全发展敲响警钟。（本内容由©AI自动生成）"
  },
  // 7. 数码
  {
    title: "苹果全球开售官方认证翻新产品 覆盖iPad、MacBook热门机型",
    cover: "assets/static/新闻封面.jpg",
    source: "新浪数码",
    newsVia: "https://tech.sina.com.cn/2026-04-06/doc-xxxxxxxx.shtml",
    time: "2026-04-07",
    content: "2026年4月6日，苹果公司正式在全球多个地区官网开售官方认证翻新产品，涵盖M4芯片版iPad Pro、A16芯片iPad、M5版MacBook Pro等热门旗舰机型，价格较全新机直降14%-24%，最高优惠超2000元。此次上架的翻新产品均为苹果认证的正规设备，来源包括14天无理由退货机、门店展示机及合规回收机，绝非普通二手或第三方翻新机可比，且享受与新机完全一致的官方保修服务。此举既满足了预算有限用户对高品质苹果设备的需求，又践行了环保理念，有效延长产品生命周期，减少电子浪费，被业内视为苹果今年数码产品策略的重要调整。（本内容由©AI自动生成）"
  },
  // 8. 数码
  {
    title: "华为8英寸新机Pura X2曝光 麒麟9030芯片开创便携阔屏赛道",
    cover: "assets/static/新闻封面.jpg",
    source: "中关村在线",
    newsVia: "https://www.zol.com.cn/2026-04-06/doc-xxxxxxxx.shtml",
    time: "2026-04-07",
    content: "2026年4月最新供应链消息显示，华为一款名为Pura X2（暂命名）的8英寸全新机型浮出水面，瞄准百万级便携阔屏市场。该产品精准填补手机与平板之间的市场空白，核心配置搭载麒麟9030芯片，采用侧边指纹识别方案，展开后为8英寸阔屏，折起后可轻松放入牛仔裤口袋，彻底解决“大屏与便携不可兼得”的行业痛点。与传统平板相比，其极致便携性适合单手操作与随身办公；与常规手机相比，大屏带来更强的影音、创作与办公体验。业内预计，该机发布后将开创全新细分赛道，成为华为冲击高端便携智能终端市场的重磅产品。（本内容由©AI自动生成）"
  },
  // 9. 综合科技
  {
    title: "全球首次！中国兆瓦级氢燃料航空涡桨发动机成功首飞",
    cover: "assets/static/新闻封面.jpg",
    source: "科技日报",
    newsVia: "https://m.weibo.cn/detail/5284236413373984",
    time: "2026-04-07",
    content: "2026年4月4日，中国航发集团湖南动力机械研究所自主研制的兆瓦级氢燃料航空涡桨发动机AEP100，在株洲芦淞机场配装7.5吨级无人运输机成功完成首飞，这是全球首次兆瓦级氢燃料航空涡桨发动机试飞。该发动机以绿色氢能为燃料，实现零碳排放、低噪音运行，推力达兆瓦级，可满足中大型无人运输机动力需求。此次首飞成功标志着我国在航空氢能动力领域取得重大突破，打破国外技术垄断，为低空经济、航空货运、通用航空等领域的绿色转型提供核心动力支撑，也为我国航空发动机产业开辟了全新技术路线，助力“双碳”目标实现。（本内容由©AI自动生成）"
  },
  // 10. 综合科技
  {
    title: "中科院团队研发全球首款可聚合不燃电解质 钠离子电池实现热失控阻断",
    cover: "assets/static/新闻封面.jpg",
    source: "自然·能源",
    newsVia: "https://www.nature.com/articles/nenergyxxxxxx",
    time: "2026-04-07",
    content: "2026年4月6日，中科院物理所胡勇胜团队在国际顶级期刊《自然·能源》发表重磅成果，成功研发全球首款具备自保护功能的可聚合不燃电解质（PNE），首次在安时级钠离子电池中实现热失控的彻底阻断。该技术通过创新材料设计，在电池异常升温时可快速聚合形成稳定保护层，阻断热传导与链式反应，从根本上解决钠离子电池热安全痛点。业内分析认为，随着PNE技术产业化推进，钠离子电池将在2026年迎来爆发窗口期，可广泛应用于电动汽车、大规模储能电站、极端环境设备等领域，与锂离子电池形成互补，大幅降低储能系统成本，推动我国新能源存储产业跨越式发展。（本内容由©AI自动生成）"
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