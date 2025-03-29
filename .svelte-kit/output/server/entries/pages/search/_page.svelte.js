import { G as store_get, D as ensure_array_like, E as attr, J as unsubscribe_stores, C as pop, z as push } from "../../../chunks/index.js";
import { A as ArticleCard } from "../../../chunks/ArticleCard.js";
import { w as writable } from "../../../chunks/index2.js";
import "../../../chunks/supabaseClient.js";
const articles = writable([]);
const searchArticles = (articles2, query) => {
  return articles2.filter(
    (article) => article.title.toLowerCase().includes(query.toLowerCase())
  );
};
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let filteredArticles;
  let query = "";
  filteredArticles = searchArticles(store_get($$store_subs ??= {}, "$articles", articles), query);
  const each_array = ensure_array_like(filteredArticles);
  $$payload.out += `<div class="search-page svelte-yvt7bh"><input${attr("value", query)} placeholder="Search..." class="svelte-yvt7bh"> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let article = each_array[$$index];
    ArticleCard($$payload, { article });
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
