import { P as head, F as escape_html, C as pop, z as push } from "../../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Terms of Service | Proxima Report LLC</title>`;
    $$payload2.out += `<meta name="description" content="Legal terms governing use of our platform">`;
  });
  $$payload.out += `<div class="cosmic-bg svelte-4ogq3"><main class="container svelte-4ogq3"><section class="header svelte-4ogq3"><h1 class="neon-purple svelte-4ogq3">TERMS OF SERVICE</h1> <p class="subtitle svelte-4ogq3">Effective Date: ${escape_html((/* @__PURE__ */ new Date()).toLocaleDateString())}</p> <div class="intro-box svelte-4ogq3"><p>Welcome to <strong>Proximareport.com</strong> ("we", "us", or "our"). 
            These Terms of Service ("Terms") govern your access to and use of our 
            news platform and services (the "Service").</p></div></section> <section class="legal-section svelte-4ogq3"><h2 class="section-title svelte-4ogq3">1. Acceptance of Terms</h2> <p>By accessing or using our Service, you agree to be bound by these Terms. 
          If you disagree with any part, you may not access the Service.</p></section> <section class="legal-section svelte-4ogq3"><h2 class="section-title svelte-4ogq3">2. Account Registration</h2> <p>Proxima Accounts are currently not avalible.</p></section> <section class="legal-section svelte-4ogq3"><h2 class="section-title svelte-4ogq3">3. Content Policy</h2> <p>Our Ghost-powered platform provides access to news and editorial content. 
          You agree not to:</p> <ul class="legal-list svelte-4ogq3"><li class="svelte-4ogq3">Republish content without authorization</li> <li class="svelte-4ogq3">Use automated systems to extract data</li> <li class="svelte-4ogq3">Engage in harassment or illegal activities</li></ul></section> <section class="legal-section svelte-4ogq3"><h2 class="section-title svelte-4ogq3">4. Intellectual Property</h2> <p>All content, trademarks, and data on the Service are our property or 
          licensed to us. You may access content for personal, non-commercial use only.</p></section> <section class="legal-section svelte-4ogq3"><h2 class="section-title svelte-4ogq3">5. Termination</h2> <p>We may suspend or terminate accounts violating these Terms. All provisions 
          which should survive termination will remain in effect.</p></section> <section class="legal-section svelte-4ogq3"><h2 class="section-title svelte-4ogq3">6. Disclaimers</h2> <p>The Service is provided "as is". We make no warranties about accuracy or 
          availability. We are not liable for any damages arising from Service use.</p></section> <section class="legal-section svelte-4ogq3"><h2 class="section-title svelte-4ogq3">7. Governing Law</h2> <p>These Terms shall be governed by, and construed in accordance with, the laws of the State of [Montana], United States of America, without 
          regard to conflict of law provisions. Any dispute arising under or in connection with these Terms and Conditions shall be resolved exclusively in the state or federal courts located in Kalispell, Montana, and you consent to the personal jurisdiction and venue of these courts.</p></section> <section class="legal-section svelte-4ogq3"><h2 class="section-title svelte-4ogq3">8. Changes to Terms</h2> <p>We may modify these Terms at any time. Continued use after changes 
          constitutes acceptance of new Terms.</p></section> <section class="contact-box svelte-4ogq3"><h3 class="neon-blue svelte-4ogq3">Contact Us</h3> <p>For questions about these Terms, contact our legal team at:<br> <a href="mailto:legal@stellarnews.space" class="svelte-4ogq3">legal@Proximareport.com</a></p></section></main></div>`;
  pop();
}
export {
  _page as default
};
