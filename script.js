/* Mobile navigation and contact form → WhatsApp. No form details are stored. */
const WHATSAPP_NUMBER = "919388483565";
const form = document.getElementById("enquiry-form");
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  }));
}

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const fields = [
      ["Name", data.get("name")], ["Occasion", data.get("occasion")],
      ["Date", data.get("date")], ["Guests", data.get("guests")],
      ["Location", data.get("location")], ["Notes", data.get("notes")]
    ];
    let message = "Hello Golden Heyday Caterers, I'd like to enquire about catering.";
    for (const [label, value] of fields) {
      const cleanValue = String(value || "").trim();
      if (cleanValue) message += `\n${label}: ${cleanValue}`;
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
