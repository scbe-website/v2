/* SoCal Bradley Electric — main.js */
document.addEventListener('DOMContentLoaded', () => {

  /* ── MOBILE NAV ── */
  const ham     = document.getElementById('ham');
  const mobMenu = document.getElementById('mobMenu');
  function toggleMenu() {
    const open = mobMenu.classList.toggle('open');
    ham.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', open);
  }
  function closeMenu() { mobMenu.classList.remove('open'); ham.classList.remove('open'); ham.setAttribute('aria-expanded','false'); }
  ham.addEventListener('click', toggleMenu);
  document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('click', e => { if (!ham.contains(e.target) && !mobMenu.contains(e.target)) closeMenu(); });

  /* ── NAV ACTIVE SCROLL HIGHLIGHT ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const secObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const l = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (l) l.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => secObs.observe(s));

  /* ── SERVICES DATA ── */
  const services = [
    {
      title:  "Ceiling Fan Installation",
      desc:   "New installs, replacements, and full wiring for any ceiling fan — with or without an existing fixture. We handle standard and vaulted ceilings and can add wall switches or remote controls in the same visit.",
      hint:   "Ceiling Fans · Residential &amp; Commercial",
      photo:  "photos/ceiling-fan.jpg",
      icon:   "🌀",
      alt:    "Ceiling fan installation San Diego"
    },
    {
      title:  "Smart Dimmers & Remote Controllers",
      desc:   "Upgrade old switches to smart dimmers, remote wall controllers, or voice-compatible switches. Compatible with Lutron, Leviton, and all major smart home platforms including Google Home, Apple HomeKit, and Amazon Alexa.",
      hint:   "Dimmers &amp; Remotes · Smart Home Compatible",
      photo:  "photos/dimmer.png",
      icon:   "🎛️",
      alt:    "Smart dimmer and remote switch installation San Diego"
    },
    {
      title:  "Smoke & Carbon Monoxide Detectors",
      desc:   "California law requires hardwired, interconnected smoke and CO detectors in all homes. We install, replace, and bring your home to current CA residential code — keeping your family protected and your home insurable.",
      hint:   "Smoke &amp; CO Detectors · CA Code Compliant",
      photo:  "photos/smoke-detect.jpg",
      icon:   "🔴",
      alt:    "Smoke and carbon monoxide detector installation San Diego"
    },
    {
      title:  "ElectroChoice — SDG&E Incentive Program",
      desc:   "SDG&E's ElectroChoice program helps SoCal homeowners switch from gas to electric appliances with rebates and reduced utility rates. We handle all qualifying installs and coordinate the SDG&E paperwork on your behalf.",
      hint:   "ElectroChoice · SDG&amp;E Incentive Program",
      photo:  "photos/electrochoice.jpg",
      icon:   "⚡",
      alt:    "SDG&E ElectroChoice program installation San Diego"
    },
    {
      title:  "LED Lighting & Retrofit",
      desc:   "Recessed can retrofits, under-cabinet strips, outdoor security and landscape lighting, and full LED conversions for homes and businesses. Cut your energy bill and transform every room — all in one visit.",
      hint:   "LED Lighting · Retrofit &amp; New Installs",
      photo:  "photos/led-lights.jpg",
      icon:   "💡",
      alt:    "LED lighting retrofit and installation San Diego"
    },
    {
      title:  "EV Charger Installation",
      desc:   "Level 2 home EV charger installs (240V) for Tesla, Ford, GM, Rivian, and all EVs. We pull all permits, handle SDG&E interconnection, and help you maximize state and federal rebate eligibility.",
      hint:   "EV Chargers · Level 2 · All Makes &amp; Models",
      photo:  "photos/ev-charger.jpg",
      icon:   "🔌",
      alt:    "Level 2 EV charger installation San Diego"
    },
    {
      title:  "RV & Trailer Electrical Service",
      desc:   "Dedicated 30A and 50A hookup installs for RVs, travel trailers, fifth wheels, and boat trailers at your home or property. We run the circuit, install the correct outlet, and permit everything to code.",
      hint:   "RV &amp; Trailer Power · 30A &amp; 50A Hookups",
      photo:  "photos/rv.jpg",
      icon:   "🚐",
      alt:    "RV and trailer electrical hookup installation San Diego"
    },
    {
      title:  "General Electrical — Outlets, Wiring & Repairs",
      desc:   "Adding outlets, GFCI upgrades, troubleshooting tripping breakers, rewiring, and everyday electrical repairs. We handle the full range of residential and commercial needs across Southern California.",
      hint:   "General Electrical · Repairs &amp; Upgrades",
      photo:  "photos/general-electrical.jpg",
      icon:   "🔧",
      alt:    "General electrical repairs and outlets Southern California"
    },
    {
      title:  "Smart Under-Cabinet Lighting",
      desc:   "Hardwired LED under-cabinet lighting with WiFi controllers — dimmable, app-controlled, and compatible with Alexa, Google Home, and Apple HomeKit. Perfect for kitchen remodels and upgrades. Clean installation with no exposed wiring.",
      hint:   "Under-Cabinet Lighting · WiFi &amp; Smart Controls",
      photo:  "photos/under-cabinet.jpg",
      icon:   "💡",
      alt:    "Smart under-cabinet LED lighting installation Southern California"
    },
    {
      title:  "Electrical Panel Upgrades",
      desc:   "100A to 200A upgrades, subpanel installs, and full panel replacements. Essential for EV chargers, solar, and most older San Diego homes. We pull all permits and manage the full inspection process — start to finish.",
      hint:   "Panel Upgrades · Permits Pulled &amp; Inspected",
      photo:  "photos/panel.jpg",
      icon:   "🗄️",
      alt:    "Electrical panel upgrade San Diego 100 amp to 200 amp"
    }
  ];

  let activeBreaker = null;

  /* DOM refs */
  const roBar   = document.getElementById('roBar');
  const roTitle = document.getElementById('roTitle');
  const roDesc  = document.getElementById('roDesc');
  const roHint  = document.getElementById('roHint');
  const roLed   = document.getElementById('roLed');
  const roCta   = document.getElementById('roCta');
  const roImg   = document.getElementById('roImg');
  const roPlaceholder = document.getElementById('roPlaceholder');
  const roPlaceholderIcon  = document.getElementById('roPlaceholderIcon');
  const roPlaceholderLabel = document.getElementById('roPlaceholderLabel');

  function setPhoto(s) {
    /* Try loading the image; fall back to placeholder if missing */
    roImg.onload = () => {
      roImg.classList.add('visible');
      roPlaceholder.classList.add('hidden');
    };
    roImg.onerror = () => {
      roImg.classList.remove('visible');
      roPlaceholderIcon.textContent  = s.icon;
      roPlaceholderLabel.textContent = 'Photo coming soon';
      roPlaceholder.classList.remove('hidden');
    };
    roImg.alt = s.alt;
    roImg.classList.remove('visible');
    roImg.src = s.photo;
  }

  function selectBreaker(el, idx) {
    if (activeBreaker === el) {
      el.classList.remove('active');
      activeBreaker = null;
      resetReadout();
      return;
    }
    if (activeBreaker) activeBreaker.classList.remove('active');
    el.classList.add('active');
    activeBreaker = el;

    const s = services[idx];
    roBar.className   = 'ro-bar on';
    roTitle.textContent = s.title;  roTitle.className = 'ro-title on';
    roDesc.textContent  = s.desc;   roDesc.className  = 'ro-desc on';
    roHint.innerHTML    = `<span class="ro-led on"></span>${s.hint}`;
    roHint.className    = 'ro-hint on';
    roCta.style.display = 'block';
    setPhoto(s);

    if (window.innerWidth < 768) {
      document.getElementById('readout').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function resetReadout() {
    roBar.className     = 'ro-bar';
    roTitle.textContent = 'Select a circuit'; roTitle.className = 'ro-title';
    roDesc.textContent  = 'Tap any breaker above to learn about that service.'; roDesc.className = 'ro-desc';
    roHint.innerHTML    = '<span class="ro-led"></span>Ready'; roHint.className = 'ro-hint';
    roCta.style.display = 'none';
    roImg.classList.remove('visible');
    roImg.src = '';
    roPlaceholderIcon.textContent  = '⚡';
    roPlaceholderLabel.textContent = 'Select a breaker';
    roPlaceholder.classList.remove('hidden');
  }

  document.querySelectorAll('.breaker').forEach(el => {
    el.setAttribute('tabindex','0'); el.setAttribute('role','button');
    el.addEventListener('click', () => selectBreaker(el, +el.dataset.idx));
    el.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') { e.preventDefault(); selectBreaker(el, +el.dataset.idx); }});
  });
  const dbl = document.getElementById('doubleBreaker');
  if (dbl) {
    dbl.setAttribute('tabindex','0'); dbl.setAttribute('role','button');
    dbl.addEventListener('click', () => selectBreaker(dbl, 8));
    dbl.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') { e.preventDefault(); selectBreaker(dbl, 8); }});
  }
  roCta.addEventListener('click', () => { window.location.href = 'tel:6193336470'; });

  /* ── CONTACT FORM ── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      const orig = btn.textContent;
      btn.textContent = 'Sending…'; btn.disabled = true;
      try {
        const res = await fetch(form.action, { method:'POST', body: new FormData(form), headers: { 'Accept': 'application/json' }});
        if (res.ok) {
          btn.textContent = '✓ Message Sent!'; btn.style.background = '#27ae60';
          form.reset();
          setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.disabled = false; }, 4000);
        } else { throw new Error(); }
      } catch {
        btn.textContent = 'Error — please call us'; btn.style.background = '#c0392b';
        setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.disabled = false; }, 4000);
      }
    });
  }

});
