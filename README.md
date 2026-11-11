# NICA TECH CONCEPT — GitHub Pages Website

A responsive static recreation of the visible NICA TECH CONCEPT landing page.

## Files
- `index.html` — all page content and semantic structure
- `style.css` — layout, colour system, responsive design and animations
- `script.js` — mobile navigation and scroll-reveal behaviour

## Publish to the existing GitHub Pages site
1. Open the GitHub repository that currently publishes `https://nica-tech-concept.github.io/`.
2. Download or back up the current repository contents before replacing anything.
3. Upload `index.html`, `style.css`, `script.js` and this `README.md` to the repository root.
4. Commit the changes to the branch currently used by GitHub Pages (previously configured as `main` / root).
5. In repository Settings → Pages, confirm the publishing source is still the correct branch and `/ (root)`.
6. Wait for the Pages deployment to finish, then open the existing website URL and hard-refresh.

## Important image note
This recreation currently loads the four images directly from the published Lovable website. That makes the page work without downloading image files, but it means those image URLs depend on the Lovable site continuing to host them. For a fully self-contained GitHub copy, download the logo mark, full logo, research-lab image and smart-farm image from the original site, place them in `assets/`, then replace the four remote image URLs in `index.html` with:
- `assets/nica-logo-mark.jpg`
- `assets/nica-logo-full.jpg`
- `assets/research-lab.jpg`
- `assets/project-smart-farm.jpg`

## Scope and fidelity
This is a hand-built recreation based on the publicly visible page text, image assets and layout cues. It is not the original Lovable/React source code. The original private project source, component structure, exact CSS values and backend configuration cannot be recovered from the public URL alone. The page sections and visible copy are reproduced; the detailed pixel geometry and motion are approximated in clean HTML/CSS/JavaScript.

## Contact details
The visible source website states that the official email and phone/WhatsApp details are yet to be announced. Those placeholders are intentionally retained. The contact CTA is a placeholder mail link until a verified address is provided.


## Included image assets
All website visuals are bundled locally in `assets/`, so the site no longer depends on temporary Lovable image URLs:
- `nica-original-logo.jpg` — cropped from the original logo image supplied by the owner.
- `nica-hero-engineering.jpg` — branded engineering hero visual.
- `technology-disciplines.jpg` — technology disciplines panel.
- `nica-smart-farm.jpg` — smart agriculture project visual.
- `robotics-ai.jpg` — robotics and AI visual.
- `engineering-innovation.jpg` — engineering innovation visual.
- `learning-hub.jpg` — learning hub visual.
- `nica-contact-brand.jpg` — contact/brand visual.

The additional visuals were generated to complement the supplied NICA logo. Review small text in artwork before publishing because generated lettering may not always be exact.


## Contact details configured
- Email: nnoromikechukwu09@gmail.com
- Phone: +234 802 119 0233
- WhatsApp: https://wa.me/2348021190233
