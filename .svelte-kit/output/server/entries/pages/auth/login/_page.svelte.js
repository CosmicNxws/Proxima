import { E as attr, C as pop, z as push } from "../../../../chunks/index.js";
import "../../../../chunks/supabaseClient.js";
function _page($$payload, $$props) {
  push();
  let email = "";
  let password = "";
  $$payload.out += `<div class="login-form svelte-s7b0y3"><h2>Login</h2> <label class="svelte-s7b0y3">Email: <input${attr("value", email)} type="email" class="svelte-s7b0y3"></label> <label class="svelte-s7b0y3">Password: <input${attr("value", password)} type="password" class="svelte-s7b0y3"></label> <button class="svelte-s7b0y3">Login</button></div>`;
  pop();
}
export {
  _page as default
};
