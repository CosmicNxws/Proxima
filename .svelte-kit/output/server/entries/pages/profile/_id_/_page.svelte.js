import { Q as bind_props, C as pop, z as push } from "../../../../chunks/index.js";
import "../../../../chunks/supabaseClient.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="loading svelte-1li6gia">Loading profile...</div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
