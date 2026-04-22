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

## Buttons / CTA (privaloma)

Ši taisyklė taikoma **UNICOS CTA paviršiams** (prekės ženklo mygtukai / nuorodos-stiliaus veiksmai: hero, sekcijų CTA, header/footer „Tapti partneriu“ ir pan.). **Ne visi** puslapio interaktyvūs elementai yra to paties tipo: horizontalios karuselės rodyklės, ikonų mygtukai, skirtukai, `input type="file"` trigeriai, grynų formų submit be CTA stiliaus — turi atskiras taisykles ar komponentus; žr. sekciją „Carousel row navigation“ ir konkretų komponentą.

### Kada `CtaLink`, kada `CtaButton`
- **`CtaLink`** — kai veiksmas yra **nuoroda** (`href`: vidinis ar išorinis kelias). Tai `<a>`, be Next `Link` wrapperio viduje (nebent projekte nuspręsta kitaip — laikykis esamo importo).
- **`CtaButton`** — kai reikia **`<button>`** (`onClick`, `type="submit"`, `disabled`, forma). Vizualiai tie patys variantai ir `labelMode` kaip `CtaLink`.
- Abu naudoja tą patį korpusą, foną ir etiketę per **`ctaShared.tsx`** — naują CTA **ne** kurk iš atskirų `className` rinkinių.

### Hover elgesys (Halden Miller „text-slide“)
- **Visi `CtaLink` / `CtaButton` variantai** naudoja tą patį `CtaFace` mechanizmą:
  - mask tik 1 teksto eilutės aukščio (`overflow: hidden`, `height: var(--btn-label-line-height)`);
  - viduje tekstas su `text-shadow: 0 var(--btn-label-line-height) 0 <hover-spalva>` (klonas lygiai vienu aukščiu žemiau);
  - hover'yje tekstas `translateY(-100%)` į viršų → šešėlis atsiduria originalo vietoje, su hover spalva.
- Kartu hover'yje keičiasi **fonas / rėmelis** (`CtaBackground`) per `~300ms`.
- `labelMode` propas paliktas tipui dėl API suderinamumo, bet **neturi įtakos** — visos CTA elgiasi vienodai.
- Svarbu: `--btn-label-line-height` (numatyta 20px) turi atitikti mygtuko teksto aukštį su `--btn-font-size` + `letter-spacing` — kitaip slide pasislinks per daug arba per mažai.

### Variantai (`CtaSurfaceVariant`, `CtaBackground`)
Vienas `variant` visada — fonas + numatytos etiketės spalvos (su slide atitinkamas šešėlio tonas). Lentelė sutampa su `src/components/ui/ctaShared.tsx`.

| `variant` | Paskirtis / fonas (santrauka) | Etiketė (slide) |
|-----------|------------------------------|-----------------|
| **primary** | Užpildymas maroon (`--color-maroon`), hover šviesesnis maroon | kremo tonas, slide su kremo šešėliu |
| **secondary** | Užpildymas žalias (`--color-green`), hover tamsesnis žalias | kremo tonas + slide |
| **outline** | Rėmelis maroon, skaidrus; hover užsipildo maroon | pradžioje bordo, hover kremas + slide |
| **glass** | „Stiklas“ ant tamsaus (rėmelis, blur, šviesi alfa); hover ryškesnis stiklas | kremo tekstas + slide |
| **lightFill** | Fondas `#EFE8DB`, hover baltas | maroon tekstas + slide |
| **outlineLight** | Rėmelis kremo ant tamsaus, hover lengvas fill | kremo tekstas + slide |
| **lightNeutral** | Kremo paviršius + subtilus rėmelis, hover šiek tiek tamsesnis nougat | tamsus tekstas + slide |

### Vieninga tipografija ir ne „vienkartiniai“ mygtukai
- Matmenys ir šriftas: **`tokens.css`** kintamieji `--btn-height`, `--btn-padding-x`, `--btn-font-size`, `--btn-font-weight`, `--btn-letter-spacing`, `--btn-radius` ir t. t. Pakeitimas vienoje vietoje = visi `CtaLink` / `CtaButton`.
- **Pirminė implementacija** (fonas, veidas, tipai): `src/components/ui/ctaShared.tsx` — `CtaBackground`, `CtaFace`, `CTA_SHELL_CLASS_BASE`. Čia plėtojami visi variantai; `CtaLink.tsx` ir `CtaButton.tsx` tik perduoda `variant` / `labelMode`.

### Spalvų atsarginė santrauka (žinomos hex)
`primary`: #64151F / kremo tekstas; `outline`: rėmelis #64151F, hover fill maroon; `secondary`: #3B443A / kremo tekstas; šviesiems paviršiams — #EFE8DB ir body #1A1010 kur taikoma `lightNeutral`.

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
