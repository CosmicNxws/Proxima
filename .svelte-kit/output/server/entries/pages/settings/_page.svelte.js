import { E as attr, Q as bind_props, C as pop, z as push, G as store_get, J as unsubscribe_stores } from "../../../chunks/index.js";
import { u as user } from "../../../chunks/authStore.js";
function SettingsForm($$payload, $$props) {
  push();
  let user2 = $$props["user"];
  let name = user2.name;
  let email = user2.email;
  $$payload.out += `<div class="settings-form svelte-k5x8if"><h2>Settings</h2> <label class="svelte-k5x8if">Name: <input${attr("value", name)} class="svelte-k5x8if"></label> <label class="svelte-k5x8if">Email: <input${attr("value", email)} class="svelte-k5x8if"></label> <button class="svelte-k5x8if">Save</button></div>`;
  bind_props($$props, { user: user2 });
  pop();
}
function _page($$payload) {
  var $$store_subs;
  if (store_get($$store_subs ??= {}, "$user", user)) {
    $$payload.out += "<!--[-->";
    SettingsForm($$payload, {
      user: store_get($$store_subs ??= {}, "$user", user)
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _page as default
};
