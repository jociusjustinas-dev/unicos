<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# UNICOS Design System Rules

## CRITICAL: You are a brand adapter, NOT a designer.
When given any BYQ Supply component:
- Keep ALL layout, grid, spacing, animations, interactions, and responsive 
  breakpoints exactly as-is
- ONLY replace: colors, fonts, border-radius, copy, and component text
- Never invent new layouts or components
- Never add design elements not present in the original BYQ code

## Brand Tokens
--color-maroon: #64151F      /* primary CTA, labels, accents */
--color-nougat: #EFE8DB      /* main background, light surfaces */
--color-green: #3B443A       /* secondary surfaces, dark cards */
--color-text: #1A1010        /* all body text */
--color-text-light: #EFE8DB  /* text on dark backgrounds */

## Typography
Font heading: 'Quiche Sans', 'Georgia', serif
Font body: 'Helvetica Neue LT Pro', 'Helvetica Neue', Arial, sans-serif
Heading weight: 300 (light)
Body weight: 300-400
Label style: uppercase, letter-spacing 0.12em, font-size 0.75em

## Border radius
0px everywhere — no exceptions
Remove ALL rounded-* Tailwind classes
Replace with: style={{ borderRadius: '0px' }} or rounded-none

## Color replacement rules
When you see any BYQ default color — replace as follows:
- White/near-white backgrounds (#fafeff, #f7f7f2, #efede7) → #EFE8DB
- Blue accents (#3569f1) → #64151F
- Dark text (#171717, #191818, #2d2c2c) → #1A1010
- Dark buttons/fills → #64151F (primary) or #3B443A (secondary)
- Light card backgrounds → #EFE8DB or #3B443A (dark variant)
- Gradient overlays: match to #EFE8DB with correct rgba values

## Carousel row navigation (horizontalūs „prev/next“ mygtukai)
Ant šviesių fonų (#EFE8DB ir pan., pvz. prekių ženklų sekcijos): rodyklių mygtukų **hover / filled** būsena — **maroon** (`#64151F` rėmelis, hover užpildymas `#4a0f17`, tekstas `#EFE8DB`). **Nenaudoti** čia antrinės žalios (`#3B443A`) — žalia lieka tik tamsiems antriniams blokams (pvz. atskiri žali CTA kontekstai).

## Buttons
Primary: bg #64151F, text #EFE8DB, border-radius 0px, hover bg #4a0f17
Ghost: border 1px solid #64151F, transparent bg, text #64151F, 
       border-radius 0px, hover bg #64151F hover text #EFE8DB
Dark variant: bg #3B443A, text #EFE8DB, border-radius 0px

## Labels/badges
Background: #64151F
Text: #EFE8DB
Border-radius: 0px
Style: uppercase, letter-spacing 0.12em

## Component structure
Always add 'use client'; as first line
Keep all useRef, useEffect, useState hooks unchanged
Keep all animation logic unchanged
Keep all CDN image URLs unchanged unless told to replace

## Copy language
All text content must be in Lithuanian
Brand name: UNICOS
