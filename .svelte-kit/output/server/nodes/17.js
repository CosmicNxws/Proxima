import * as server from '../entries/pages/profile/_id_/_page.server.js';

export const index = 17;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/profile/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/17.BlmzUG0s.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CB1frHmv.js","_app/immutable/chunks/DNTWRfH6.js","_app/immutable/chunks/CJQgs8yU.js","_app/immutable/chunks/BcAi3mOv.js","_app/immutable/chunks/C2VGr2dc.js","_app/immutable/chunks/k_zFxMFI.js","_app/immutable/chunks/DyYHv-5_.js","_app/immutable/chunks/Bv7KadAX.js","_app/immutable/chunks/CM3tjGAh.js","_app/immutable/chunks/DdAyXo9e.js","_app/immutable/chunks/CCdYDHFT.js","_app/immutable/chunks/C1FmrZbK.js"];
export const stylesheets = ["_app/immutable/assets/17.CViKNoIe.css"];
export const fonts = [];
