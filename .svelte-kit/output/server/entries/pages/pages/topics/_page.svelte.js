import { D as ensure_array_like, F as escape_html, K as attr_style, C as pop, z as push } from "../../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let countdown = 3;
  let progress = 72;
  const each_array = ensure_array_like([progress]);
  const each_array_1 = ensure_array_like([1]);
  $$payload.out += `<div class="construction-container svelte-qxq82n"><div class="construction-content svelte-qxq82n"><div class="logo-container svelte-qxq82n"><img src="/Logo/Proximareportmobile.png" alt="Proxima Report Logo" class="construction-logo svelte-qxq82n"> <div class="pulsar svelte-qxq82n"></div></div> <h1 class="construction-title svelte-qxq82n"><span class="title-word svelte-qxq82n">This Page is under</span> <span class="title-word svelte-qxq82n">Construction</span></h1> <p class="construction-subtitle svelte-qxq82n">We're building something extraordinary 👩‍🚀</p> <div class="progress-container svelte-qxq82n"><div class="progress-info svelte-qxq82n"><span class="progress-label svelte-qxq82n">Launch Sequence:</span> <span class="progress-value svelte-qxq82n">${escape_html(progress)}%</span></div> <div class="progress-bar svelte-qxq82n"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let p = each_array[$$index];
    $$payload.out += `<div class="progress-fill svelte-qxq82n"${attr_style(`width: ${p}%`)}></div>`;
  }
  $$payload.out += `<!--]--> <div class="progress-glow svelte-qxq82n"${attr_style(`left: ${progress}%`)}></div></div></div> <div class="countdown svelte-qxq82n"><div class="countdown-item svelte-qxq82n"><span class="countdown-number svelte-qxq82n">${escape_html(countdown)}</span> <span class="countdown-label svelte-qxq82n">Days Until Launch</span></div></div> <div class="status-message svelte-qxq82n"><svg class="status-icon svelte-qxq82n" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" class="svelte-qxq82n"></path><path d="M13 7h-2v6h6v-2h-4z" class="svelte-qxq82n"></path></svg> <p class="svelte-qxq82n">Proxima Report is in Soft launch, most of the site is avalible but some features are still in progress and will be avalible soon.</p></div></div> <div class="astronaut-container svelte-qxq82n"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    each_array_1[$$index_1];
    $$payload.out += `<div class="astronaut svelte-qxq82n"><svg viewBox="0 0 512 512" class="svelte-qxq82n"><path d="M256 0c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128S326.7 0 256 0zm0 208c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zm96 48h-11.4c-22.7 10.4-49.6 16-76.6 16s-53.9-5.6-76.6-16H160c-35.3 0-64 28.7-64 64v48c0 8.8 7.2 16 16 16h16v96c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-96h32v96c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-96h16c8.8 0 16-7.2 16-16v-48c0-35.3-28.7-64-64-64z" class="svelte-qxq82n"></path></svg></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  _page as default
};
