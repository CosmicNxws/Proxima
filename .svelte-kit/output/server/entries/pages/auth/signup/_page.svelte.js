import { E as attr, C as pop, z as push } from "../../../../chunks/index.js";
import "../../../../chunks/supabaseClient.js";
function _page($$payload, $$props) {
  push();
  let email = "";
  let password = "";
  $$payload.out += `<div class="signup-form svelte-16l49yk"><h2>Sign Up</h2> <label class="svelte-16l49yk">Email: <input${attr("value", email)} type="email" class="svelte-16l49yk"></label> <label class="svelte-16l49yk">Password: <input${attr("value", password)} type="password" class="svelte-16l49yk"></label> <button class="svelte-16l49yk">Sign Up</button></div>`;
  pop();
}
export {
  _page as default
};
