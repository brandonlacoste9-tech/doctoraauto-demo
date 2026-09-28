const I18N = {
en: {
  "nav.services": "Services",
  "nav.products": "Products",
  "nav.gallery": "Gallery",
  "nav.why": "Why us",
  "nav.faq": "FAQ",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.call": "253 466-3383",
  "hero.kicker": "Tacoma, Washington · Honest neighborhood mechanics",
  "hero.title": "Car trouble?<br>We'll fix it right.",
  "hero.sub": "4.6-star rated on Birdeye (56 reviews): brakes, engine repair and honest pricing — the neighborhood shop other shops refer to when they're too busy.",
  "hero.cta1": "Book now",
  "hero.cta2": "See services",
  "stats.hoursNum": "Mon – Fri",
  "stats.hours": "Open weekdays 8 – 5",
  "stats.makesNum": "4.6",
  "stats.makes": "Birdeye rating · 56 reviews",
  "stats.diagNum": "All makes",
  "stats.diag": "Cars, trucks & SUVs serviced",
  "stats.quoteNum": "Honest",
  "stats.quote": "pricing explained up front",
  "services.kicker": "What we do",
  "services.title": "Full auto repair, honestly done",
  "services.s1t": "Brake service & repair",
  "services.s1d": "Pads, rotors, calipers — brakes done right at fair prices.",
  "services.s2t": "Engine diagnostics & repair",
  "services.s2d": "Check-engine lights and real problems — accurately diagnosed, no guessing.",
  "services.s3t": "Oil changes & maintenance",
  "services.s3d": "Oil, filters and fluids — maintenance that protects your car.",
  "services.s4t": "Steering & suspension",
  "services.s4d": "Struts, shocks and steering parts for a smooth, safe ride.",
  "services.s5t": "A/C & heating service",
  "services.s5d": "Heating and A/C repair for comfort in every season.",
  "services.s6t": "General auto repair",
  "services.s6d": "From tune-ups to major repairs — we handle it all, honestly.",
  "walkin.w1t": "Honest diagnosis",
  "walkin.w1d": "What you need — and what you don't",
  "walkin.w2t": "Fair pricing",
  "walkin.w2d": "Beatable prices, no overcharging",
  "walkin.w3t": "Trusted by shops",
  "walkin.w3d": "Other shops refer clients here",
  "makes.kicker": "All makes and models",
  "makes.title": "Your car is welcome here",
  "makes.sub": "Cars, SUVs and light trucks — domestic and import, we service them all.",
  "why.kicker": "Why choose us",
  "why.title": "Tacoma's honest mechanics",
  "why.intro": "Other shops send their overflow here when they're too busy — because Gregg and Donny do the work right and charge a fair price. That's the whole philosophy.",
  "why.l1t": "Honest to a fault",
  "why.l1d": "We recommend only the work your car actually needs.",
  "why.l2t": "Fair, beatable prices",
  "why.l2d": "Customers call our pricing 'unbeatable, like the 90s'.",
  "why.l3t": "Trusted by the trade",
  "why.l3d": "Other shops refer clients to us when they're swamped.",
  "why.l4t": "Personal service",
  "why.l4d": "Gregg and Donny know you and your car by name.",
  "products.kicker": "We install",
  "products.title": "Quality parts we trust",
  "products.sub": "The same quality parts we install every day — ask us what's right for your car.",
  "products.p1t": "Brake pads & rotors",
  "products.p1d": "Quality brake components for every make — installed right.",
  "products.p2t": "Car batteries",
  "products.p2d": "Reliable batteries tested and installed while you wait.",
  "products.p3t": "Belts & hoses",
  "products.p3d": "Worn belts and hoses replaced before they strand you.",
  "products.note": "Call us to check availability for your vehicle.",
  "products.cta": "Call to ask",
  "gallery.kicker": "The shop in action",
  "gallery.title": "Careful work, clean bays",
  "gallery.c1": "Precision wheel alignment on a modern rack",
  "gallery.c2": "Brake service done with care",
  "gallery.c3": "Engine diagnostics by experienced techs",
  "reviews.kicker": "Word on the street",
  "reviews.title": "Trusted by Tacoma drivers",
  "reviews.more": "<strong>4.6 rating · 56 Birdeye reviews</strong> &mdash; see what customers say",
  "faq.kicker": "Good to know",
  "faq.title": "Frequently asked questions",
  "faq.q1": "Do I need an appointment?",
  "faq.a1": "Call (253) 466-3383 to schedule — appointments get priority, and we'll get you in at the earliest slot.",
  "faq.q2": "Are your prices really fair?",
  "faq.a2": "Customers call our pricing 'unbeatable' — we explain everything and never charge for work you didn't approve.",
  "faq.q3": "Do you service all makes?",
  "faq.a3": "Yes — domestic and import cars, SUVs and light trucks.",
  "faq.q4": "What are your hours?",
  "faq.a4": "Monday to Friday, 8:00 AM to 5:00 PM. Closed weekends.",
  "contact.kicker": "Come see us",
  "contact.title": "Book your visit",
  "contact.addr": "Address",
  "contact.phone": "Phone",
  "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 8:00 AM – 5:00 PM<br>Sat – Sun: closed",
  "contact.cta": "Call now to book",
  "promo.kicker": "Neighborhood favorite",
  "promo.title": "Honest pricing, explained first",
  "promo.text": "Gregg and Donny will tell you what your car needs — and what it doesn't. Fair prices, quality work, and you'll never pay for work you didn't approve.",
  "promo.cta": "Call the shop today",
  "footer.tag": "Honest auto repair · Tacoma, Washington"
}
};

let lang = "en";

function applyLang(l) {
  lang = l;
  localStorage.setItem("demo-lang", l);
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[l][key];
    if (val !== undefined) el.innerHTML = val;
  });
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang(lang);
