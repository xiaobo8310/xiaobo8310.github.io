const toolList = [
  {
    name: "图片处理",
    desc: "压缩、格式转换、尺寸调整",
    icon: "🖼️",
    link: "tool-image.html"
  },
  {
    name: "配色生成器",
    desc: "在线取色、配色方案",
    icon: "🎨",
    link: "tool-color.html"
  },
  {
    name: "进制转换",
    desc: "二/十/十六进制互转",
    icon: "🔢",
    link: "tool-convert.html"
  },
  {
    name: "文本处理",
    desc: "字数统计、去空格",
    icon: "📝",
    link: "tool-text.html"
  }
];

const grid = document.getElementById("toolsGrid");

function renderTools() {
  grid.innerHTML = "";
  toolList.forEach(tool => {
    const html = `
      <a href="${tool.link}" class="tool-card card fade-in" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 16px;text-align:center;">
        <div style="font-size:30px;margin-bottom:12px;">${tool.icon}</div>
        <div style="font-weight:500;margin-bottom:6px;">${tool.name}</div>
        <div style="font-size:12px;color:var(--muted);line-height:1.4;">${tool.desc}</div>
      </a>
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

renderTools();