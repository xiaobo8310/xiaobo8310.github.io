// 模拟后端索引，后续由你的PyQt自动生成写入 /data/articles.json
const articleData = [
  {
    title: "第一篇技术笔记",
    desc: "记录日常开发、算法调优与工程落地心得",
    cover: "assets/static/placeholder.jpg",
    path: "content/articles/2026/03/note1.md",
    time: "2026-03-01"
  },
  {
    title: "AI模型部署实践",
    desc: "轻量化推理、端侧部署、性能压测总结",
    cover: "assets/static/placeholder.jpg",
    path: "content/articles/2026/03/note2.md",
    time: "2026-03-02"
  },
  {
    title: "Git与版本管理规范",
    desc: "团队协作分支策略、commit规范、冲突解决",
    cover: "assets/static/placeholder.jpg",
    path: "content/articles/2026/03/note3.md",
    time: "2026-03-03"
  },
  {
    title: "前端工程化搭建",
    desc: "静态站点架构、资源拆分、性能优化",
    cover: "assets/static/placeholder.jpg",
    path: "content/articles/2026/03/note4.md",
    time: "2026-03-04"
  },
  {
    title: "Python自动化脚本开发",
    desc: "文件批量处理、目录整理、GUI工具设计",
    cover: "assets/static/placeholder.jpg",
    path: "content/articles/2026/03/note5.md",
    time: "2026-03-05"
  },
  {
    title: "通信基础原理梳理",
    desc: "信道、调制解调、抗干扰基础知识点汇总",
    cover: "assets/static/placeholder.jpg",
    path: "content/articles/2026/03/note6.md",
    time: "2026-03-06"
  },
  {
    title: "SDR开发入门手册",
    desc: "GNU Radio环境搭建、流图基础、信号采集",
    cover: "assets/static/placeholder.jpg",
    path: "content/articles/2026/03/note7.md",
    time: "2026-03-07"
  },
  {
    title: "深度学习训练调参指南",
    desc: "学习率、batch、正则化、早停策略详解",
    cover: "assets/static/placeholder.jpg",
    path: "content/articles/2026/03/note8.md",
    time: "2026-03-08"
  },
  {
    title: "个人站点规划复盘",
    desc: "GitHub Pages架构、自动化发布、目录规范",
    cover: "assets/static/placeholder.jpg",
    path: "content/articles/2026/03/note9.md",
    time: "2026-03-09"
  },
  {
    title: "高效办公与知识管理",
    desc: "笔记归档、标签体系、内容沉淀方法论",
    cover: "assets/static/placeholder.jpg",
    path: "content/articles/2026/03/note10.md",
    time: "2026-03-10"
  },
  // 额外后备，用于加载更多
  {title:"拓展笔记11",desc:"拓展内容摘要演示",cover:"assets/static/placeholder.jpg",path:"content/articles/2026/03/note11.md",time:"2026-03-11"},
  {title:"拓展笔记12",desc:"拓展内容摘要演示",cover:"assets/static/placeholder.jpg",path:"content/articles/2026/03/note12.md",time:"2026-03-12"},
  {title:"拓展笔记13",desc:"拓展内容摘要演示",cover:"assets/static/placeholder.jpg",path:"content/articles/2026/03/note13.md",time:"2026-03-13"},
  {title:"拓展笔记14",desc:"拓展内容摘要演示",cover:"assets/static/placeholder.jpg",path:"content/articles/2026/03/note14.md",time:"2026-03-14"},
  {title:"拓展笔记15",desc:"拓展内容摘要演示",cover:"assets/static/placeholder.jpg",path:"content/articles/2026/03/note15.md",time:"2026-03-15"},
  {title:"拓展笔记16",desc:"拓展内容摘要演示",cover:"assets/static/placeholder.jpg",path:"content/articles/2026/03/note16.md",time:"2026-03-16"},
  {title:"拓展笔记17",desc:"拓展内容摘要演示",cover:"assets/static/placeholder.jpg",path:"content/articles/2026/03/note17.md",time:"2026-03-17"},
  {title:"拓展笔记18",desc:"拓展内容摘要演示",cover:"assets/static/placeholder.jpg",path:"content/articles/2026/03/note18.md",time:"2026-03-18"},
  {title:"拓展笔记19",desc:"拓展内容摘要演示",cover:"assets/static/placeholder.jpg",path:"content/articles/2026/03/note19.md",time:"2026-03-19"},
  {title:"拓展笔记20",desc:"拓展内容摘要演示",cover:"assets/static/placeholder.jpg",path:"content/articles/2026/03/note20.md",time:"2026-03-20"}
];

let showCount = 10;
const listDom = document.getElementById("articleList");

// 渲染列表
function renderList(filterArr){
  listDom.innerHTML = "";
  const slice = filterArr.slice(0, showCount);
  slice.forEach(item=>{
    const html = `
    <a href="article.html?path=${encodeURIComponent(item.path)}" class="article-item fade-in">
      <img class="article-cover" src="${item.cover}" alt="">
      <div class="article-info">
        <div class="article-title">${item.title}</div>
        <div class="article-desc">${item.desc}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px;">${item.time}</div>
      </div>
    </a>
    `;
    listDom.insertAdjacentHTML("beforeend",html);
  });
  // 淡入监听
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add("visible");
    });
  });
  document.querySelectorAll(".fade-in").forEach(el=>obs.observe(el));
}

// 初始渲染全部
renderList(articleData);

// 搜索筛选
document.getElementById("artSearch").addEventListener("input",e=>{
  const key = e.target.value.trim().toLowerCase();
  const filter = articleData.filter(x=>
    x.title.toLowerCase().includes(key) || x.desc.toLowerCase().includes(key)
  );
  renderList(filter);
});

// 加载更多：一次追加20条
document.getElementById("loadMoreBtn").addEventListener("click",()=>{
  showCount +=20;
  renderList(articleData);
});