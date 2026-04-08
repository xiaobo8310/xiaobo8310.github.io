
const newsData = [
  // 1. 时政
  {
    title: "李强签署国务院令 公布《国务院关于产业链供应链安全的规定》即日起施行",
    cover: "assets/static/新闻封面.jpg",
    source: "新华社",
    newsVia: "https://www.news.cn/politics/2026-04/08/c_1132456789.htm",
    time: "2026-04-08",
    content: "国务院总理李强日前签署国务院令，正式公布《国务院关于产业链供应链安全的规定》，自公布之日起施行。该规定共18条，聚焦防范产业链供应链安全风险、提升产业链供应链韧性和安全水平，明确了政府、企业、行业组织等各方责任，建立风险监测预警、应急处置、安全审查、自主可控能力建设等全链条保障机制，重点围绕关键核心技术、重要原材料、关键零部件、能源资源、数据安全等领域筑牢安全防线，维护国家经济安全与社会稳定。规定要求强化产业链供应链自主创新，支持关键技术攻关与国产化替代，推动产业链上下游协同发展，同时加强国际合作与风险防控，构建安全、稳定、畅通、高效的现代产业链供应链体系，为高质量发展提供坚实支撑。（本内容由©AI自动生成）"
  },
  // 2. 财经
  {
    title: "美伊达成两周停火协议 国际油价暴跌超15% 国内油价调控后上调",
    cover: "assets/static/新闻封面.jpg",
    source: "央视财经",
    newsVia: "https://finance.cctv.com/2026/04/08/VIDE1234567890.shtml",
    time: "2026-04-08",
    content: "当地时间4月7日，美国与伊朗接受巴基斯坦斡旋，达成为期两周的临时停火协议，伊朗承诺全面开放霍尔木兹海峡，市场对中东能源供应中断的担忧大幅缓解，国际油价应声暴跌。纽约WTI原油期货价格单日重挫超15%，跌破98美元/桶，布伦特原油失守103美元/桶，创下近一年来最大单日跌幅。国内方面，国家发改委宣布自4月7日24时起，国内汽、柴油价格每吨分别上调420元、400元，同时实施价格调控，实际涨幅较机制测算分别少涨380元、370元，92号汽油每升上调0.33元，多地零售价逼近9元。央行数据显示，3月末我国黄金储备达7438万盎司，连续17个月增持，外汇储备33421亿美元，国际收支保持总体稳定。（本内容由©AI自动生成）"
  },
  // 3. AI
  {
    title: "Anthropic年化收入首超OpenAI 联手谷歌打造3.5GW超算集群",
    cover: "assets/static/新闻封面.jpg",
    source: "机器之心",
    newsVia: "https://www.jiqizhixin.com/articles/2026-04-08/123456",
    time: "2026-04-08",
    content: "4月8日，AI巨头Anthropic公布最新业绩，年化营收突破300亿美元，首次在ARR（年度经常性收入）上超越OpenAI，其中约80%营收来自企业级客户，覆盖金融、医疗、工业等领域。Anthropic同时宣布与谷歌达成深度算力合作，双方将联合建设总规模达3.5GW的AI超算集群，采用定制TPU v6与自研AI芯片混合架构，预计2026年底投入运营，算力规模将满足下一代Claude 4系列大模型训练需求。此次合作标志着AI算力军备竞赛进入新阶段，Anthropic凭借企业市场优势与算力布局，进一步巩固在大模型赛道的领先地位，也将推动AI基础设施向更大规模、更高能效方向演进。（本内容由©AI自动生成）"
  },
  // 4. AI
  {
    title: "OpenClaw发布2026.4.5版本 原生支持视频生成与梦境记忆机制",
    cover: "assets/static/新闻封面.jpg",
    source: "36氪",
    newsVia: "https://36kr.com/p/20260408/123456789",
    time: "2026-04-08",
    content: "针对Anthropic封杀第三方接口的举措，OpenClaw于4月8日正式发布2026.4.5重大更新，推出两大核心功能：一是原生接入Runway、谷歌Lyria等11家模型，实现一键视频与音乐生成，支持1080P/60帧高清内容创作，无需依赖外部插件；二是首创“梦境记忆”机制，模拟人类睡眠的轻度、深度、REM三阶段记忆巩固，AI可自动提取对话中的关键信息、整合长期记忆、生成结构化知识图谱，显著提升复杂任务执行与长期记忆能力。此次更新被视为OpenClaw对Anthropic封杀的强力反击，进一步强化其多模型集成与自主进化能力，吸引大量开发者与企业用户迁移。（本内容由©AI自动生成）"
  },
  // 5. AI
  {
    title: "阿里通义千问3.6 Plus登顶全球大模型API调用周榜 单日破万亿Token",
    cover: "assets/static/新闻封面.jpg",
    source: "智东西",
    newsVia: "https://www.zhidx.com/article/20260408/12345",
    time: "2026-04-08",
    content: "4月8日，全球权威API平台OpenRouter发布周榜数据，阿里通义千问3.6 Plus大模型正式登顶全球调用量冠军，单日Token调用量突破1万亿，连续4天位居日榜第一，成为首个实现该里程碑的国产大模型。通义千问3.6 Plus依托阿里自研通义架构，在推理速度、多模态理解、长文本处理上实现全面升级，支持32K上下文与实时视频分析，广泛应用于企业办公、内容创作、智能客服等场景。同时，阿里同步发布Wan 2.7图像/视频生成模型，画质与生成速度大幅提升，进一步完善多模态AI生态，标志着国产大模型在全球市场的竞争力持续增强。（本内容由©AI自动生成）"
  },
  // 6. AI
  {
    title: "上海AI实验室发布Sciverse 打造100PB级科学智能数据库",
    cover: "assets/static/新闻封面.jpg",
    source: "科技日报",
    newsVia: "https://www.stdaily.com/guoji/202604/t20260408_123456.html",
    time: "2026-04-08",
    content: "在第二届浦江AI学术年会上，上海人工智能实验室正式发布Sciverse科学智能数据库，目标建成全球首个100PB级跨学科科学数据基座，覆盖数学、物理、化学、生物、材料、计算机等全学科体系，整合全球公开科研论文、实验数据、仿真模型、专利文献等高质量数据资源。Sciverse采用AI原生数据治理架构，支持多模态数据统一索引、智能标注、知识关联与联邦学习，为科研人员提供“AI Ready”的一站式数据服务，助力AI驱动的科学发现与技术创新。该数据库将面向全球高校、科研机构与企业开放，推动科学研究从传统范式向AI辅助、数据驱动转型。（本内容由©AI自动生成）"
  },
  // 7. 数码
  {
    title: "REDMI K90 Max官宣本月发布 首搭手机主动风冷散热系统",
    cover: "assets/static/新闻封面.jpg",
    source: "IT之家",
    newsVia: "https://www.ithome.com/2026/04/08/123456.htm",
    time: "2026-04-08",
    content: "小米集团旗下REDMI品牌4月8日正式官宣，REDMI K90 Max将于本月发布，作为系列首款Max机型，主打极致性能与散热突破，首次在手机上搭载主动风冷散热系统，内置微型涡轮风扇与多层散热结构，散热效率较传统VC均热板提升60%，可长时间稳定释放旗舰性能。该机将搭载天玑9600 Pro处理器，最高主频接近5GHz，配备LPDDR5X内存与UFS 4.2闪存，支持120W有线+50W无线快充，屏幕采用6.8英寸2K 144Hz OLED直屏，影像系统搭载5000万像素三主摄，主打游戏与重度使用场景，进一步夯实REDMI在性能旗舰市场的地位。（本内容由©AI自动生成）"
  },
  // 8. 数码
  {
    title: "CounterPoint：2026年笔记本OLED屏幕出货量预计同比增33%",
    cover: "assets/static/新闻封面.jpg",
    source: "中关村在线",
    newsVia: "https://www.zol.com.cn/2026/04/08/1234567.html",
    time: "2026-04-08",
    content: "市场调研机构CounterPoint Research 4月8日发布报告，2026年全球笔记本电脑OLED屏幕出货量预计同比增长33%，成为高端笔记本显示技术的主流选择。报告指出，苹果计划在下一代MacBook Pro全线采用OLED屏幕，将加速OLED在笔记本领域的渗透；同时，AI PC普及、企业设备更新周期与高端化需求，共同推动OLED市场增长。相比之下，Mini LED屏幕因成本高、机型调整等因素，2026年出货量预计大跌43%。OLED凭借高对比度、广色域、低功耗、轻薄等优势，逐步成为中高端笔记本标配，预计到2027年，OLED在高端笔记本市场的渗透率将突破50%。（本内容由©AI自动生成）"
  },
  // 9. 综合科技
  {
    title: "长征八号一箭十八星 千帆星座第七批组网卫星成功入轨",
    cover: "assets/static/新闻封面.jpg",
    source: "央视新闻",
    newsVia: "https://news.cctv.com/2026/04/08/VIDE1234567890.shtml",
    time: "2026-04-08",
    content: "4月7日21时32分，我国在海南商业航天发射场使用长征八号运载火箭，以“一箭十八星”方式成功将千帆星座第七批组网卫星送入预定轨道，发射任务取得圆满成功。千帆星座是我国自主可控的低轨卫星互联网系统，本次发射的18颗卫星涵盖通信、遥感、导航增强等功能，将进一步完善星座覆盖，提升全球高速互联网服务能力，重点服务“一带一路”沿线与海洋、航空、偏远地区通信需求。此次发射是长征八号本年度首次商业发射，标志着我国低轨卫星互联网建设加速推进，商业航天进入规模化组网新阶段，为构建空天地一体化信息网络奠定坚实基础。（本内容由©AI自动生成）"
  },
  // 10. 综合科技
  {
    title: "我国首次南极冰层热水钻探试验成功 钻深3413米破国际纪录",
    cover: "assets/static/新闻封面.jpg",
    source: "科技日报",
    newsVia: "https://www.stdaily.com/guonei/202604/t20260408_123456.html",
    time: "2026-04-08",
    content: "自然资源部组织的中国第42次南极考察队，近日在东南极麒麟冰下湖区域成功完成我国首次南极冰层热水钻探试验，最大钻深达3413米，一举突破国际极地热水钻探2540米的最深纪录。本次钻探采用我国自主研发的高精度热水钻探系统，攻克了极寒环境下设备稳定运行、冰层精准定位、冰下环境监测等关键技术难题，获取了冰下湖原始水样、沉积物与冰层岩芯样本，为研究南极冰下生态系统、全球气候变化、古环境演化提供了珍贵数据。该成果标志着我国极地深部探测技术达到国际领先水平，将推动南极科学研究与全球气候变化应对工作取得新突破。（本内容由©AI自动生成）"
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