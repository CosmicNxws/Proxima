import { D as ensure_array_like, G as store_get, J as unsubscribe_stores, C as pop, z as push } from "../../../chunks/index.js";
import { A as ArticleCard } from "../../../chunks/ArticleCard.js";
import { w as writable } from "../../../chunks/index2.js";
import "../../../chunks/supabaseClient.js";
const bookmarks = writable([]);
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$bookmarks", bookmarks));
  $$payload.out += `<div class="bookmarks svelte-zwg5br"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let bookmark = each_array[$$index];
    ArticleCard($$payload, { article: bookmark.article, isBookmarked: true });
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
