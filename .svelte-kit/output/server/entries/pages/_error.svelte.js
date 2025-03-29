import { N as getContext, F as escape_html, G as store_get, J as unsubscribe_stores, C as pop, z as push } from "../../chunks/index.js";
import "../../chunks/client.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="cosmic-error-container svelte-vrnaes"><main class="error-content svelte-vrnaes"><div class="error-header svelte-vrnaes"><svg class="error-icon svelte-vrnaes" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" class="svelte-vrnaes"></path></svg> <h1 class="neon-red svelte-vrnaes">Anomaly Detected!</h1> <p class="error-code svelte-vrnaes">Error ${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}: ${escape_html(store_get($$store_subs ??= {}, "$page", page).error.message)}</p></div> <div class="error-body svelte-vrnaes"><p class="error-message svelte-vrnaes">Something unexpected happened, an error has occurred</p> <div class="error-actions svelte-vrnaes"><a href="/" class="nav-button svelte-vrnaes"><svg viewBox="0 0 24 24" width="18" height="18" class="svelte-vrnaes"><path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" class="svelte-vrnaes"></path></svg> Return to Home</a> <a href="/contact" class="nav-button secondary svelte-vrnaes"><svg viewBox="0 0 24 24" width="18" height="18" class="svelte-vrnaes"><path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" class="svelte-vrnaes"></path></svg> Contact Us</a></div></div> <div class="error-footer svelte-vrnaes"><p class="svelte-vrnaes">Date: ${escape_html((/* @__PURE__ */ new Date()).toLocaleDateString())}</p></div></main></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};
