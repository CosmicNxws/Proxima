import { D as ensure_array_like, G as store_get, F as escape_html, J as unsubscribe_stores, C as pop, z as push } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index2.js";
import "../../../chunks/supabaseClient.js";
const notifications = writable([]);
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$notifications", notifications));
  $$payload.out += `<div class="notifications svelte-1cu2bhq"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let notification = each_array[$$index];
    $$payload.out += `<div class="notification svelte-1cu2bhq"><p>${escape_html(notification.message)}</p></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
