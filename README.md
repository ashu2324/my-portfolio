# Ayushi Parmar — Portfolio (React + TypeScript)

## Stack
- **React 18** + **TypeScript**
- **Vite** (dev server + build)
- Plain CSS (global.css — no CSS-in-JS, all original styles preserved)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Loader.tsx         # AP. loading screen
│   ├── Cursor.tsx         # Custom cursor dots
│   ├── Navbar.tsx         # Nav + hamburger + theme toggle
│   ├── Hero.tsx           # Hero section with typing effect
│   ├── Marquee.tsx        # Scrolling tech ticker
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skill cards with category colours
│   ├── Experience.tsx     # Timeline experience
│   ├── Projects.tsx       # Project cards
│   ├── Impact.tsx         # Animated counter metrics
│   ├── Contact.tsx        # Contact links
│   └── Footer.tsx         # Footer
├── hooks/
│   ├── useTyping.ts       # Typing effect loop
│   ├── useTheme.ts        # Dark/light mode + localStorage
│   ├── useScrollReveal.ts # IntersectionObserver reveal
│   ├── useCursor.ts       # Custom cursor + follower
│   ├── usePageTransition.ts # Gold wipe transition on nav clicks
│   └── useCounterAnimation.ts # Impact number counter
├── styles/
│   └── global.css         # All styles (exact copy from HTML)
├── App.tsx
└── main.tsx

public/
└── Ayushi_Parmar_Frontend_Developer_Resume.pdf  ← place your resume PDF here
```

## Notes
- Place your resume PDF as `public/Ayushi_Parmar_Frontend_Developer_Resume.pdf`
- Theme preference is saved to `localStorage`
- All animations, fonts, and colour variables are identical to the original HTML
