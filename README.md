# Personal Portfolio — Alex Rivera

A clean, responsive personal portfolio website built with pure HTML, CSS, and JavaScript — no frameworks, no build tools required.

## Live demo
🔗 [https://jenetteyhermoso.github.io/](https://jenetteyhermoso.github.io/)

## Features
- Dark / light mode toggle (saved to localStorage)
- Smooth scroll reveal animations (Intersection Observer)
- Sticky navbar with active section highlighting
- Typing effect on hero eyebrow text
- Morphing avatar shape animation
- Responsive mobile menu (hamburger)
- Contact form with Formspree integration
- Lighthouse score 90+ across all categories

## Tech stack
- HTML5, CSS3 (custom properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts: Syne + Inter
- Formspree (contact form, no backend needed)

## Folder structure
```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

## Getting started
1. Open the folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` → Open with Live Server
4. Edit the placeholder name, content, and project details

## Customising
- **Colors**: Edit CSS custom properties in `:root` inside `style.css`
- **Content**: Replace "Alex Rivera" and placeholder text in `index.html`
- **Projects**: Add your real project screenshots to `assets/images/projects/`
- **Contact form**: Sign up at [formspree.io](https://formspree.io) and replace `YOUR_ID` in the form action

## Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "initial portfolio"
git remote add origin https://github.com/yourusername/yourusername.github.io
git push -u origin main
```
Then go to repo Settings → Pages → Source: main branch.

## License
Free to use and adapt for personal portfolio projects.
