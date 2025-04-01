import { D as ensure_array_like, G as store_get, F as escape_html, J as unsubscribe_stores, C as pop, z as push } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index2.js";
import "../../../chunks/supabaseClient.js";
const comments = writable([]);
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$comments", comments));
  $$payload.out += `<div class="comment-feed svelte-3izd5q"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let comment = each_array[$$index];
    $$payload.out += `<div class="comment svelte-3izd5q"><strong>${escape_html(comment.user_name)}:</strong> ${escape_html(comment.text)}</div>`;
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
