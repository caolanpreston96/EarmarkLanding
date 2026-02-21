# earmarkIQ Landing Page

## Brand
- **Product name**: earmarkIQ (styled as "earmark**IQ**" — earmark in regular weight, IQ in bold mint)
- **Tagline**: Smart Money, No Effort
- **Positioning**: AI-powered salary allocation for UK professionals earning £25k–£150k+
- **Tone**: Professional but approachable. Not patronising about money. Think "financial operating system" not "budgeting app"

## Design System
- **Theme**: Dark background, light text, mint accent
- **Primary font**: DM Sans (Google Fonts)
- **Mono font**: IBM Plex Mono (Google Fonts)
- **Colors**:
  - Background: #06080f
  - Surface: #141929
  - Border: #1e2540
  - Text: #eaecf5
  - Text secondary: #a0a5bc
  - Mint (primary accent): #4ECDC4
  - Coral (warnings/bills): #FF6B6B
  - Amber (spending/budget): #F5A623
  - Blue (insights): #5B8DEF
  - Purple (AI/chat): #9B8FE8
  - Green (savings/growth): #4ADE80
- **App screens use light theme**: #F8F9FC background, #FFFFFF cards, #1A1D26 text

## Page Sections (in order)
1. Nav — fixed, blurs on scroll, earmarkIQ logo, links: How it works, Features, Security, Investors, Join Waitlist CTA
2. Hero — headline "Your salary, actually working for you", phone mockup with dashboard, floating metric cards, trust badges (FCA, encryption, read-only)
3. Ticker — infinite scroll marquee of features
4. How it Works — 3 steps: Connect bank → Get profile → Watch money grow
5. Stats — 4 animated counters (12 categories, 42% payday spike, £588 annual savings, 2 min setup)
6. Features — 5 alternating left/right sections:
   - AI Financial Profile (money personality, spending rhythm, quick wins)
   - Subscription Radar (price creep detection, bills breakdown)
   - Weekly Insights (duplicate charges, buffer warnings)
   - AI Chat ("Can I afford a holiday?" conversation)
   - Smart Marketplace (Chase Saver, Chip, affiliate recommendations)
7. Security — 6 trust cards (read-only, FCA, encryption, FSCS, data control, no selling)
8. Investors — 4 cards (affiliate revenue, viral mechanics, AI-native, UK market) + contact CTA
9. CTA — email waitlist capture
10. Footer — links, legal disclaimer, affiliate disclosure

## Animations
- Scroll-triggered reveal (fade up, slide left/right)
- Animated SVG donut chart in phone mockup
- Floating cards with mouse parallax
- Counter animations on scroll
- Infinite ticker marquee
- Typing cursor on AI text
- Hover states on all interactive elements

## Key Data Points (from real app)
- Monthly income: £2,942
- Allocation: Bills 10%, Savings 1%, Invest 0%, Discretionary 89%
- Free to spend: £2.6k
- Payday spike: +21%
- Bills total: £291.72/mo (£80 bills, £79.73 subs, £131.99 habits)
- Price creep: +£45/year across 5 subscriptions
- Could save: £588/year
- Money personality: "The Feast or Famine Spender"
- Wednesday is most expensive day (£350 avg)

## Deployment
- Hosted on Vercel (free tier)
- Auto-deploys from GitHub on push to main
- Domain will be earmark.app (when registered)

## Tech
- Pure HTML/CSS/JS — no framework, no build step
- Google Fonts loaded via CDN
- All styles inline in <style> tag
- All scripts inline in <script> tag
- Single index.html file for the landing page
