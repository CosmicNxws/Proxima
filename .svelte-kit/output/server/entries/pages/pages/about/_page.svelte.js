import { D as ensure_array_like, P as head, E as attr, F as escape_html } from "../../../../chunks/index.js";
function _page($$payload) {
  const coFounders = [
    {
      name: "Tyler",
      role: "Co-Founder & CEO",
      quote: "Space exploration enthusiast - sci fi nerd",
      avatar: "https://cdn.bsky.app/img/avatar/plain/did:plc:r7zvmqorx24nuiafx6qga6jb/bafkreic2sf5umqn7dqyinwuajughsn6bcsbrfxdnmm5u7jfjx64w7lf2fy@jpeg",
      expertise: "Admin"
    },
    {
      name: "Sam Thibault",
      role: "Co-Founder & CTO",
      quote: "Tech Person",
      avatar: "https://cdn.bsky.app/img/avatar/plain/did:plc:tchvwsx3ez3c3lkm32pfksrs/bafkreiggug5hpcczy5274tvjfsffbncreqhuthujuimnlrj7e2pabuhzrq@jpeg",
      expertise: "Admin"
    },
    {
      name: "Jack - Phazzee",
      role: "Co-Founder & CCO",
      quote: "I write stuff about spaceflight, study international relations rn",
      avatar: "https://cosmicnxws.com/teampage/Jack.jpg",
      expertise: "Admin"
    }
  ];
  const writers = [
    {
      name: "Brie Archambault",
      role: "Content Writer & Editor",
      quote: "Nothing that happens is ever forgotten, even if you can't remember it.",
      avatar: "https://cdn.bsky.app/img/avatar/plain/did:plc:aab2hclrv7vqsm2ovm2ys5zn/bafkreib3uvgv7qylkawrnckawst4zz6mbek3j4wc4ego3tusae4eg3qtz4@jpeg"
    },
    {
      name: "Seth G",
      role: "Writer",
      quote: "Rocket enjoyer | Professionally Autistic | #1 New Armstrong fan",
      avatar: "https://cosmic-nxws.ghost.io/content/images/2024/09/20240911_143104.jpg"
    }
  ];
  const mediaTeam = [
    {
      name: "Fetch error",
      role: "",
      quote: "",
      avatar: "https://example.com/images/avatars/media1.jpg"
    },
    {
      name: "Fetch error",
      role: "",
      quote: "",
      avatar: "https://example.com/images/avatars/media2.jpg"
    }
  ];
  const each_array = ensure_array_like(coFounders);
  const each_array_1 = ensure_array_like(writers);
  const each_array_2 = ensure_array_like(mediaTeam);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>About | To the Stars Through Knowledge</title>`;
  });
  $$payload.out += `<div class="cosmic-bg svelte-1sq9knm"><main class="container svelte-1sq9knm"><section class="mission svelte-1sq9knm"><h1 class="neon-blue svelte-1sq9knm">AD ASTRA PER SCIENTIA</h1> <p class="subtitle svelte-1sq9knm">To the Stars Through Knowledge</p> <div class="mission-text svelte-1sq9knm"><p><strong>Our mission is to educate, inspire, and connect</strong> any and all people who share 
          a passion for space and STEM. Whether you're here for the latest in space, innovative tools, 
          or our space-themed projects, we've built this platform to bring the cosmos closer to you.</p> <p class="highlight svelte-1sq9knm">We're determined to <strong>ignite curiosity</strong> and <strong>empower learning</strong> for everyone.</p></div></section> <section class="team-section svelte-1sq9knm"><h2 class="neon-blue svelte-1sq9knm">Co-Founders</h2> <div class="team-grid svelte-1sq9knm"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let member = each_array[i];
    $$payload.out += `<div class="crew-card svelte-1sq9knm"><img${attr("src", member.avatar)}${attr("alt", member.name)} class="avatar svelte-1sq9knm"> <div class="crew-info svelte-1sq9knm"><h3 class="svelte-1sq9knm">${escape_html(member.name)}</h3> <p class="role svelte-1sq9knm">${escape_html(member.role)}</p> <p class="quote svelte-1sq9knm">"${escape_html(member.quote)}"</p> <p class="expertise svelte-1sq9knm">${escape_html(member.expertise)}</p></div></div>`;
  }
  $$payload.out += `<!--]--></div></section> <section class="team-section svelte-1sq9knm"><h2 class="neon-blue svelte-1sq9knm">Writers</h2> <div class="team-grid svelte-1sq9knm"><!--[-->`;
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let member = each_array_1[i];
    $$payload.out += `<div class="crew-card svelte-1sq9knm"><img${attr("src", member.avatar)}${attr("alt", member.name)} class="avatar svelte-1sq9knm"> <div class="crew-info svelte-1sq9knm"><h3 class="svelte-1sq9knm">${escape_html(member.name)}</h3> <p class="role svelte-1sq9knm">${escape_html(member.role)}</p> <p class="quote svelte-1sq9knm">"${escape_html(member.quote)}"</p></div></div>`;
  }
  $$payload.out += `<!--]--></div></section> <section class="team-section svelte-1sq9knm"><h2 class="neon-blue svelte-1sq9knm">Media Team</h2> <div class="team-grid svelte-1sq9knm"><!--[-->`;
  for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
    let member = each_array_2[i];
    $$payload.out += `<div class="crew-card svelte-1sq9knm"><img${attr("src", member.avatar)}${attr("alt", member.name)} class="avatar svelte-1sq9knm"> <div class="crew-info svelte-1sq9knm"><h3 class="svelte-1sq9knm">${escape_html(member.name)}</h3> <p class="role svelte-1sq9knm">${escape_html(member.role)}</p> <p class="quote svelte-1sq9knm">"${escape_html(member.quote)}"</p></div></div>`;
  }
  $$payload.out += `<!--]--></div></section></main></div>`;
}
export {
  _page as default
};
