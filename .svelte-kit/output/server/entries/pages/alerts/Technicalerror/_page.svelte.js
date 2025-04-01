import { D as ensure_array_like, P as head, K as attr_style, O as stringify, F as escape_html, I as attr_class, C as pop, z as push } from "../../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  const config = {
    systemName: "Maintnence",
    statusTitle: "SYSTEM NOTICE",
    statusMessage: "Due to technical difficulties, Proxima accounts are temporarily unavailable",
    progress: 22,
    // Percentage (0-100)
    errorCode: "DB-ACCT-TOUT-MAJ",
    affectedSystems: "AUTH, DB, API",
    eta: "March 31 2025",
    // Estimated resolution time
    debugMessages: [
      "> Initializing diagnostic sequence...",
      "> Scanning quantum authentication modules...",
      "> ERROR: Database > Account Module > Timeout > Major Severity",
      "> Attempting to re-establish neural network links...",
      "> Partial connection established (22%)",
      "> Deploying repair nanites to affected nodes...",
      "> Estimated restoration: March 31 2025"
    ]
  };
  let dots = "";
  const particles = [];
  const each_array = ensure_array_like(particles);
  const each_array_1 = ensure_array_like(config.debugMessages);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(config.systemName)} Status</title>`;
  });
  $$payload.out += `<div class="quantum-container svelte-1n9ypax"><div class="particles svelte-1n9ypax"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let p = each_array[$$index];
    $$payload.out += `<div class="particle svelte-1n9ypax"${attr_style(`left: ${stringify(p.x)}%; top: ${stringify(p.y)}%; width: ${stringify(p.size)}px; height: ${stringify(p.size)}px; opacity: ${stringify(p.size / 4)};`)}></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="neon-border svelte-1n9ypax"><div class="content svelte-1n9ypax"><div class="logo svelte-1n9ypax"><svg viewBox="0 0 100 100" class="atom svelte-1n9ypax"><circle cx="50" cy="50" r="8" fill="#00f7ff" class="nucleus svelte-1n9ypax"></circle><path d="M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10" stroke="#ff00e6" stroke-width="1" fill="none" class="orbit svelte-1n9ypax"></path><path d="M10,50 A40,40 0 0,1 90,50 A40,40 0 0,1 10,50" stroke="#00f7ff" stroke-width="1" fill="none" class="orbit svelte-1n9ypax"></path><path d="M20,20 A60,60 0 1,0 80,80 A60,60 0 1,0 20,20" stroke="#ff6600" stroke-width="1" fill="none" class="orbit svelte-1n9ypax"></path><circle cx="50" cy="10" r="2" fill="#ff00e6" class="electron svelte-1n9ypax"></circle><circle cx="90" cy="50" r="2" fill="#00f7ff" class="electron svelte-1n9ypax"></circle><circle cx="80" cy="80" r="2" fill="#ff6600" class="electron svelte-1n9ypax"></circle></svg> <h1 class="system-name svelte-1n9ypax">${escape_html(config.systemName)}</h1></div> <div class="status-box svelte-1n9ypax"><h2 class="status-title svelte-1n9ypax">${escape_html(config.statusTitle)}</h2> <div class="status-message svelte-1n9ypax"><p class="svelte-1n9ypax">${escape_html(config.statusMessage)}${escape_html(dots)}</p></div> <div class="progress-container svelte-1n9ypax"><div class="progress-bar svelte-1n9ypax"><div class="progress-fill svelte-1n9ypax"${attr_style(`width: ${stringify(config.progress)}%`)}></div></div> <span class="progress-text svelte-1n9ypax">REPAIRS IN PROGRESS: ${escape_html(config.progress)}%</span></div> <div class="tech-details svelte-1n9ypax"><div class="detail svelte-1n9ypax"><span class="detail-label svelte-1n9ypax">ERROR CODE:</span> <span class="detail-value svelte-1n9ypax">${escape_html(config.errorCode)}</span></div> <div class="detail svelte-1n9ypax"><span class="detail-label svelte-1n9ypax">SYSTEMS AFFECTED:</span> <span class="detail-value svelte-1n9ypax">${escape_html(config.affectedSystems)}</span></div> <div class="detail svelte-1n9ypax"><span class="detail-label svelte-1n9ypax">EST. RESOLUTION:</span> <span class="detail-value svelte-1n9ypax">${escape_html(config.eta)}</span></div></div></div> <div class="console svelte-1n9ypax"><div class="console-header svelte-1n9ypax"><div class="console-dots svelte-1n9ypax"><span class="console-dot red svelte-1n9ypax"></span> <span class="console-dot yellow svelte-1n9ypax"></span> <span class="console-dot green svelte-1n9ypax"></span></div> <span class="console-title svelte-1n9ypax">${escape_html(config.systemName)}_DEBUG_CONSOLE</span></div> <div class="console-content svelte-1n9ypax"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let message = each_array_1[$$index_1];
    $$payload.out += `<p${attr_class("svelte-1n9ypax", void 0, { "error": message.includes("ERROR:") })}>${escape_html(message)}</p>`;
  }
  $$payload.out += `<!--]--></div></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
