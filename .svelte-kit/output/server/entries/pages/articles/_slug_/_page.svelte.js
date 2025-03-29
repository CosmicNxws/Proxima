import { P as head, Q as bind_props, C as pop, z as push } from "../../../../chunks/index.js";
import "../../../../chunks/ghostClient.js";
import "clsx";
import "../../../../chunks/supabaseClient.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  head($$payload, ($$payload2) => {
    {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="loading svelte-gcjhu0"><div class="loading-animation svelte-gcjhu0"><div class="molecule svelte-gcjhu0"><div class="atom svelte-gcjhu0"></div> <div class="atom svelte-gcjhu0"></div> <div class="atom svelte-gcjhu0"></div></div> <p class="svelte-gcjhu0">Loading article...</p></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
