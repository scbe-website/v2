# SoCal Bradley Electric — Website

Professional electrician website for **SoCal Bradley Electric**, San Diego County.  
CA Contractor License #1131979 · 619-333-6470 · @socalbradleyelectric

---

## File Structure

```
socalbradleyelectric/
├── index.html          ← Main site (edit this for content changes)
├── 404.html            ← Custom not-found page
├── robots.txt          ← Search engine crawler rules
├── sitemap.xml         ← Update lastmod date after any changes
├── manifest.json       ← PWA / mobile app settings
├── css/
│   └── style.css       ← All styles (edit for color/layout changes)
├── js/
│   └── main.js         ← Interactions: panel, nav, form
├── images/
│   └── logo.jpg        ← Main logo (already included)
│   (add: favicon-32.png, favicon-16.png, apple-touch-icon.png, og-image.jpg)
└── photos/
    (add your job photos here — see "Adding Photos" below)
```

---

## GitHub Pages Setup (Step by Step)

### 1. Create the Repository
1. Go to [github.com](https://github.com) and sign in (or create an account)
2. Click the **+** icon → **New repository**
3. Name it exactly: `socalbradleyelectric.github.io`  
   *(or your username if you prefer: `yourusername.github.io`)*
4. Set to **Public**
5. Click **Create repository**

### 2. Upload the Files
1. On the repo page, click **uploading an existing file**
2. Drag and drop the entire contents of this folder  
   *(not the folder itself — the files and subfolders inside it)*
3. Scroll down, add commit message: `Initial site launch`
4. Click **Commit changes**

### 3. Enable GitHub Pages
1. Go to **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Branch: **main** · Folder: **/ (root)**
4. Click **Save**
5. Wait ~2 minutes, then your site will be live at:  
   `https://yourusername.github.io/socalbradleyelectric.github.io/`

### 4. Connect Your Custom Domain
1. In **Settings → Pages**, under **Custom domain**, enter:  
   `socalbradleyelectric.com`
2. Click Save — GitHub will create a `CNAME` file automatically
3. Log into your domain registrar (GoDaddy, Namecheap, etc.)
4. Add these DNS records:

   **A Records** (point to GitHub):
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   
   **CNAME Record:**
   ```
   www  →  yourusername.github.io
   ```
5. DNS changes take 15 minutes to 48 hours to fully propagate
6. Check **Enforce HTTPS** once the certificate is issued (~10 min after DNS)

---

## Setting Up the Contact Form (Formspree — Free)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Click **New Form** → name it "SoCal Bradley Electric"
3. Copy your form's unique endpoint URL (looks like `https://formspree.io/f/abcdefgh`)
4. Open `index.html` and find this line:
   ```html
   <form ... action="https://formspree.io/f/YOUR_FORM_ID"
   ```
5. Replace `YOUR_FORM_ID` with your actual form ID
6. In Formspree settings, add your email address as the notification recipient
7. Done — form submissions will go to your email

---

## Adding Your Photos

The gallery has 8 placeholder spots. To add real photos:

1. Take or select a photo for each service
2. Resize/compress them to roughly **800×600px** and under **200KB** each  
   (Use [squoosh.app](https://squoosh.app) — free, easy, no signup)
3. Name the files clearly:
   ```
   photos/ceiling-fan.jpg
   photos/dimmer-remote.jpg
   photos/smoke-detector.jpg
   photos/led-lighting.jpg
   photos/ev-charger.jpg
   photos/rv-hookup.jpg
   photos/electrochoice.jpg
   photos/panel-upgrade.jpg
   ```
4. In `index.html`, find each gallery card and replace the placeholder div with an img tag:

   **Find:**
   ```html
   <div class="img-placeholder">
     <div class="img-placeholder-icon">🌀</div>
     <div class="img-placeholder-text">Add Ceiling Fan Photo</div>
   </div>
   ```
   
   **Replace with:**
   ```html
   <img src="photos/ceiling-fan.jpg" 
        alt="Ceiling fan installation San Diego" 
        loading="lazy">
   ```

---

## Updating Key Information

### Phone Number
Search `index.html` for `619-333-6470` and `6193336470` — update both formats.

### License Number
Search for `1131979` — appears in nav, hero, about, footer, structured data.

### Instagram Handle
Search for `socalbradleyelectric` — appears in contact section and footer.

### Stats (About section)
Find the `.about-stats` section in `index.html` — update years, jobs, rating.

### Form Email
Update in Formspree dashboard (not in the code — Formspree handles routing).

---

## Adding an OG Image (Recommended for SEO)

Create a **1200×630px** image for social sharing previews:
- Use Canva, Photoshop, or any image editor
- Include: logo, business name, phone number, "San Diego Electrician"
- Save as `images/og-image.jpg`
- This image shows when someone shares your site on Facebook/LinkedIn/iMessage

---

## SEO Features Built In

- **Schema.org LocalBusiness + Electrician structured data** — helps Google show your business info in search results
- **FAQPage schema** — FAQ answers can appear directly in Google search results
- **Open Graph tags** — controls how the site looks when shared on social media
- **Geo meta tags** — signals your San Diego location to search engines
- **Canonical URL** — prevents duplicate content issues
- **sitemap.xml** — helps Google index your pages
- **robots.txt** — tells crawlers what to index
- **aria-labels throughout** — accessibility + signals content meaning to crawlers
- **LLM comment block** — helps AI search tools (ChatGPT, Perplexity, Claude) correctly identify you as the San Diego company distinct from other Bradley Electrics

### After Launch — Recommended Actions
1. **Google Search Console**: Submit your sitemap at `https://socalbradleyelectric.com/sitemap.xml`
2. **Google Business Profile**: Claim/update at [google.com/business](https://google.com/business) — critical for local search
3. **Yelp**: Claim your business listing and add the website URL
4. **Angi / HomeAdvisor**: Add website URL to your profiles
5. **CSLB Listing**: Make sure your license listing links to the website
6. **Update sitemap.xml**: Change the `<lastmod>` date whenever you update the site

---

## Making Future Changes

- **Content changes**: Edit `index.html` directly (find the text and change it)
- **Colors**: Edit the CSS variables at the top of `css/style.css` (`:root` block)
- **Fonts**: Change the Google Fonts link in the `<head>` of `index.html`
- **Adding a service**: Copy an existing `.breaker` block in the panel, give it a new `data-idx`, add the service object to the `services` array in `js/main.js`

---

## Quick Checklist Before Going Live

- [ ] Replace `YOUR_FORM_ID` in index.html with real Formspree ID
- [ ] Add real photos to `/photos/` folder and update gallery
- [ ] Create and add `images/og-image.jpg` (1200×630px)
- [ ] Add favicons: `favicon-32.png`, `favicon-16.png`, `apple-touch-icon.png`
- [ ] Update stats in About section (years, jobs, rating)
- [ ] Verify phone number is correct throughout
- [ ] Connect custom domain in GitHub Pages settings
- [ ] Submit sitemap to Google Search Console
- [ ] Claim/update Google Business Profile

---

*Built for SoCal Bradley Electric · San Diego County, CA*
