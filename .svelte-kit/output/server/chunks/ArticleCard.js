import { S as fallback, I as attr_class, F as escape_html, Q as bind_props, C as pop, z as push } from "./index.js";
import "clsx";
import "./supabaseClient.js";
function BookmarkButton($$payload, $$props) {
  push();
  let articleId = $$props["articleId"];
  let isBookmarked = fallback($$props["isBookmarked"], false);
  $$payload.out += `<button${attr_class("svelte-1kq978e", void 0, { "active": isBookmarked })}>${escape_html(isBookmarked ? "★" : "☆")}</button>`;
  bind_props($$props, { articleId, isBookmarked });
  pop();
}
function UpvoteDownvote($$payload, $$props) {
  push();
  let articleId = $$props["articleId"];
  let upvotes = fallback($$props["upvotes"], 0);
  let downvotes = fallback($$props["downvotes"], 0);
  let userVote = null;
  $$payload.out += `<div class="vote-buttons svelte-zfll0v"><button${attr_class("svelte-zfll0v", void 0, { "active": userVote === "up" })}>👍 ${escape_html(upvotes)}</button> <button${attr_class("svelte-zfll0v", void 0, { "active": userVote === "down" })}>👎 ${escape_html(downvotes)}</button></div>`;
  bind_props($$props, { articleId, upvotes, downvotes });
  pop();
}
function ArticleCard($$payload, $$props) {
  push();
  let article = $$props["article"];
  let isBookmarked = fallback($$props["isBookmarked"], false);
  $$payload.out += `<article class="article-card svelte-iojgjn"><h2 class="svelte-iojgjn">${escape_html(article.title)}</h2> <p class="svelte-iojgjn">${escape_html(article.excerpt)}</p> <div class="actions svelte-iojgjn">`;
  UpvoteDownvote($$payload, {
    articleId: article.id,
    upvotes: article.upvotes,
    downvotes: article.downvotes
  });
  $$payload.out += `<!----> `;
  BookmarkButton($$payload, { articleId: article.id, isBookmarked });
  $$payload.out += `<!----></div></article>`;
  bind_props($$props, { article, isBookmarked });
  pop();
}
export {
  ArticleCard as A
};
