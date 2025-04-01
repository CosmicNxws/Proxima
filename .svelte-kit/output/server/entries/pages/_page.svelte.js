import { D as ensure_array_like, E as attr, F as escape_html, O as stringify, C as pop, z as push } from "../../chunks/index.js";
import "../../chunks/ghostClient.js";
import { b as base } from "../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  let posts = [];
  if (posts.length > 0) {
    $$payload.out += "<!--[1-->";
    const each_array = ensure_array_like(posts);
    $$payload.out += `<div class="posts-grid svelte-17q0sro"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let post = each_array[$$index];
      $$payload.out += `<article class="post-card svelte-17q0sro">`;
      if (post.feature_image) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div class="image-container svelte-17q0sro"><img${attr("src", post.feature_image)}${attr("alt", post.title)} class="post-image svelte-17q0sro" loading="lazy"> <div class="image-overlay svelte-17q0sro"></div></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> <div class="card-content svelte-17q0sro"><div class="meta svelte-17q0sro">`;
      if (post.tags && post.tags[0]) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<span class="tag svelte-17q0sro">${escape_html(post.tags[0].name)}</span>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> `;
      if (post.published_at) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<span class="date svelte-17q0sro">${escape_html(new Date(post.published_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        }))}</span>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div> <h2 class="svelte-17q0sro"><a${attr("href", `${stringify(base)}/articles/${stringify(post.slug)}`)} data-sveltekit-preload-data="hover" class="svelte-17q0sro">${escape_html(post.title)}</a></h2> <p class="excerpt svelte-17q0sro">${escape_html(post.excerpt.split(" ").slice(0, 15).join(" "))}...</p> `;
      if (post.authors && post.authors[0]) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div class="author svelte-17q0sro">`;
        if (post.authors[0].profile_image) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<img${attr("src", post.authors[0].profile_image)}${attr("alt", post.authors[0].name)} class="author-image svelte-17q0sro" loading="lazy">`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--> <span>By ${escape_html(post.authors[0].name)}</span></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div></article>`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p class="no-posts svelte-17q0sro">No posts found.</p>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
