import * as server from '../entries/pages/articles/_slug_/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/articles/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/articles/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/6.DR4ufxA5.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CB1frHmv.js","_app/immutable/chunks/DNTWRfH6.js","_app/immutable/chunks/CJQgs8yU.js","_app/immutable/chunks/BcAi3mOv.js","_app/immutable/chunks/C2VGr2dc.js","_app/immutable/chunks/Ch1qToAH.js","_app/immutable/chunks/BI-oU00G.js","_app/immutable/chunks/DfDlJKR5.js","_app/immutable/chunks/DkPbIObf.js","_app/immutable/chunks/qBeyMaA3.js","_app/immutable/chunks/D4bY_zbC.js","_app/immutable/chunks/Pgx16m2Y.js","_app/immutable/chunks/k_zFxMFI.js","_app/immutable/chunks/DyYHv-5_.js","_app/immutable/chunks/Bv7KadAX.js","_app/immutable/chunks/CM3tjGAh.js","_app/immutable/chunks/DdAyXo9e.js","_app/immutable/chunks/647vE2iW.js","_app/immutable/chunks/D8E6Dxt7.js","_app/immutable/chunks/KsYtg5je.js","_app/immutable/chunks/CCdYDHFT.js","_app/immutable/chunks/C1FmrZbK.js"];
export const stylesheets = ["_app/immutable/assets/6.KQtnJ-7Z.css"];
export const fonts = [];
