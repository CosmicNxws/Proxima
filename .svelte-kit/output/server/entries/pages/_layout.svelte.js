import { D as ensure_array_like, E as attr, F as escape_html, G as store_get, I as attr_class, J as unsubscribe_stores, C as pop, z as push, K as attr_style, M as slot } from "../../chunks/index.js";
import { u as user } from "../../chunks/authStore.js";
import { b as base } from "../../chunks/paths.js";
function Navbar($$payload, $$props) {
  push();
  var $$store_subs;
  let mobileMenuOpen = false;
  let logoDesktop = "/Logo/Proximareportdesktop.png";
  let logoMobile = "/Logo/Proximareportmobile.png";
  const navLinks = [
    { name: "Home", path: `${base}/` },
    {
      name: "Articles",
      path: `${base}/pages/articles`
    },
    { name: "Topics", path: `${base}/pages/topics` },
    { name: "About", path: `${base}/pages/about` }
  ];
  const each_array = ensure_array_like(navLinks);
  $$payload.out += `<nav class="navbar svelte-mpaic"><div class="nav-container svelte-mpaic"><a${attr("href", base || "/")} class="logo"><img${attr("src", logoDesktop)} alt="Proxima Report Logo" class="logo-image desktop-logo svelte-mpaic"> <img${attr("src", logoMobile)} alt="Proxima Report Logo" class="logo-image mobile-logo svelte-mpaic"></a> <div class="desktop-links svelte-mpaic"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let link = each_array[$$index];
    $$payload.out += `<a${attr("href", link.path)} class="nav-link svelte-mpaic">${escape_html(link.name)}</a>`;
  }
  $$payload.out += `<!--]--> `;
  if (store_get($$store_subs ??= {}, "$user", user)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", `${base}/profile/{$user.id}`)} class="nav-link user-link svelte-mpaic"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="svelte-mpaic"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg> Profile</a> <a${attr("href", `${base}/logout`)} class="nav-link logout-link svelte-mpaic">Logout</a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<a${attr("href", `${base}/alerts/Technicalerror`)} class="nav-link login-link svelte-mpaic">Login</a> <a${attr("href", `${base}/alerts/Technicalerror`)} class="nav-button svelte-mpaic">Sign Up</a>`;
  }
  $$payload.out += `<!--]--></div> <button class="mobile-menu-button svelte-mpaic" aria-label="Toggle menu"><div${attr_class("hamburger svelte-mpaic", void 0, { "open": mobileMenuOpen })}><span class="svelte-mpaic"></span> <span class="svelte-mpaic"></span> <span class="svelte-mpaic"></span></div></button></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></nav>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Footer($$payload, $$props) {
  push();
  let currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  let isHovering = false;
  const each_array = ensure_array_like([
    { name: "Twitter", icon: "twitter", url: "#" },
    {
      name: "Instagram",
      icon: "instagram",
      url: "#"
    },
    { name: "YouTube", icon: "youtube", url: "#" },
    { name: "LinkedIn", icon: "linkedin", url: "#" }
  ]);
  const each_array_1 = ensure_array_like([
    {
      title: "Explore",
      links: [
        { text: "Articles", url: "/articles" },
        { text: "Topics", url: "/pages/topics" },
        { text: "Missions", url: "/pages/missions" },
        { text: "Technology", url: "/pages/technology" }
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About Us", url: "/pages/about" },
        { text: "Our Team", url: "/pages/team" },
        { text: "Careers", url: "/pages/careers" },
        { text: "Contact", url: "/pages/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", url: "/pages/privacy" },
        { text: "Terms of Service", url: "/pages/tos" },
        { text: "Cookie Policy", url: "/cookies" },
        { text: "Disclaimer", url: "/disclaimer" }
      ]
    }
  ]);
  const each_array_3 = ensure_array_like(Array(5));
  $$payload.out += `<footer${attr_class("footer svelte-tljg46", void 0, { "parallax-active": isHovering })}><div class="space-grid svelte-tljg46"></div> <div class="cosmic-dust svelte-tljg46"></div> <div class="footer-container svelte-tljg46"><div class="footer-grid svelte-tljg46"><div class="footer-brand svelte-tljg46"><img src="/Logo/Proximareportmobile.png" alt="Proxima Report Logo" class="footer-logo svelte-tljg46"> <p class="tagline svelte-tljg46">AD ASTRA PER SCIENTIA</p> <div class="social-grid svelte-tljg46"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let social = each_array[$$index];
    $$payload.out += `<a${attr("href", social.url)} class="social-icon svelte-tljg46"${attr("aria-label", social.name)}><div class="social-icon-bg svelte-tljg46"></div> <svg${attr_class(`icon-${social.icon}`, "svelte-tljg46")} width="20" height="20" viewBox="0 0 24 24">`;
    if (social.icon === "twitter") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" class="svelte-tljg46"></path>`;
    } else if (social.icon === "instagram") {
      $$payload.out += "<!--[1-->";
      $$payload.out += `<rect x="2" y="2" width="20" height="20" rx="5" ry="5" class="svelte-tljg46"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" class="svelte-tljg46"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" class="svelte-tljg46"></line>`;
    } else if (social.icon === "youtube") {
      $$payload.out += "<!--[2-->";
      $$payload.out += `<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" class="svelte-tljg46"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" class="svelte-tljg46"></polygon>`;
    } else if (social.icon === "linkedin") {
      $$payload.out += "<!--[3-->";
      $$payload.out += `<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" class="svelte-tljg46"></path><rect x="2" y="9" width="4" height="12" class="svelte-tljg46"></rect><circle cx="4" cy="4" r="2" class="svelte-tljg46"></circle>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></svg></a>`;
  }
  $$payload.out += `<!--]--></div></div> <!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
    let section = each_array_1[$$index_2];
    const each_array_2 = ensure_array_like(section.links);
    $$payload.out += `<div class="footer-nav svelte-tljg46"><h3 class="footer-heading svelte-tljg46"><span class="heading-text svelte-tljg46">${escape_html(section.title)}</span> <span class="heading-underline svelte-tljg46"></span></h3> <!--[-->`;
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let link = each_array_2[$$index_1];
      $$payload.out += `<a${attr("href", link.url)} class="footer-link svelte-tljg46"><span class="link-text svelte-tljg46">${escape_html(link.text)}</span> <span class="link-arrow svelte-tljg46">→</span></a>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--> <div class="footer-newsletter svelte-tljg46"><h3 class="footer-heading svelte-tljg46"><span class="heading-text svelte-tljg46">Stay Updated</span> <span class="heading-underline svelte-tljg46"></span></h3> <p class="svelte-tljg46">Subscribe to our cosmic newsletter for the latest space discoveries</p> <form class="newsletter-form svelte-tljg46"><div class="input-container svelte-tljg46"><input type="email" placeholder="Your email address" required class="svelte-tljg46"> <div class="input-border svelte-tljg46"></div></div> <button type="submit" class="submit-button svelte-tljg46"><span class="button-text svelte-tljg46">Join Mission</span> <div class="button-icon svelte-tljg46"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="svelte-tljg46"><path d="M5 12h14M12 5l7 7-7 7" class="svelte-tljg46"></path></svg></div> <div class="button-particles svelte-tljg46"><!--[-->`;
  for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
    each_array_3[i];
    $$payload.out += `<span class="particle svelte-tljg46"${attr_style(`--i: ${i}`)}></span>`;
  }
  $$payload.out += `<!--]--></div></button></form></div></div> <div class="footer-bottom svelte-tljg46"><p class="svelte-tljg46">© ${escape_html(currentYear)} Proxima Report LLC. All rights reserved.</p> <div class="footer-meta svelte-tljg46"><span class="svelte-tljg46">Exploring the universe since 2023</span> <span class="separator svelte-tljg46">•</span> <span class="svelte-tljg46">Made with <span class="pulse svelte-tljg46">♥</span> among the stars</span></div></div></div></footer>`;
  pop();
}
function _layout($$payload, $$props) {
  Navbar($$payload);
  $$payload.out += `<!----> <main class="content svelte-1bne5tv"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
