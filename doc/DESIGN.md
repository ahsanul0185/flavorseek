---
name: Mediterranean Editorial
colors:
  surface: '#fff8f1'
  surface-dim: '#fcd67a'
  surface-bright: '#fff8f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff2dc'
  surface-container: '#ffecc6'
  surface-container-high: '#ffe6af'
  surface-container-highest: '#ffdf96'
  on-surface: '#251a00'
  on-surface-variant: '#42484b'
  inverse-surface: '#3e2e00'
  inverse-on-surface: '#ffefd1'
  outline: '#72787b'
  outline-variant: '#c1c7cb'
  surface-tint: '#436370'
  primary: '#0c303c'
  on-primary: '#ffffff'
  primary-container: '#264653'
  on-primary-container: '#93b3c3'
  inverse-primary: '#abcbdb'
  secondary: '#006a60'
  on-secondary: '#ffffff'
  secondary-container: '#8cf5e4'
  on-secondary-container: '#007166'
  tertiary: '#590f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#7c2109'
  on-tertiary-container: '#ff9074'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6e8f8'
  primary-fixed-dim: '#abcbdb'
  on-primary-fixed: '#001f29'
  on-primary-fixed-variant: '#2b4b58'
  secondary-fixed: '#8cf5e4'
  secondary-fixed-dim: '#6fd8c8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#ffb4a2'
  on-tertiary-fixed: '#3c0700'
  on-tertiary-fixed-variant: '#83260e'
  background: '#fff8f1'
  on-background: '#251a00'
  surface-variant: '#ffdf96'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system evokes the sun-drenched sophistication of a luxury Mediterranean travel and culinary journal. It blends **Minimalism** with a **Tactile** warmth, prioritizing high-end editorial layouts that feel both established and vibrant. The target audience values heritage, leisure, and artisanal quality. 

The UI should feel "organic yet structured," utilizing heavy whitespace to let photography and rich typography breathe. It avoids the coldness of standard tech interfaces by using a palette inspired by sea, sand, and terracotta, creating an emotional response of relaxed luxury and intellectual curiosity.

## Colors

The palette is a harmonic transition from the deep shadows of the sea to the warmth of the sun. 
- **Primary (#264653):** Reserved for high-level branding, primary text, and deep-set UI elements. 
- **Secondary (#2a9d8f):** Used for primary actions, success states, and navigational highlights.
- **Tertiary (#e76f51):** An accent for notifications, highlights, and "book-now" style calls to action.
- **Neutrals:** We utilize a "Paper" background (#FCF9F2) instead of pure white to maintain the tactile, editorial feel. The Sand (#e9c46a) and Peach (#f4a261) shades are used for secondary surfaces, chip backgrounds, and subtle dividers.

## Typography

This design system leverages a high-contrast pairing between the classical elegance of **Playfair Display** and the functional clarity of **Work Sans**. 

- **Headlines:** Always use Playfair Display. Display sizes should utilize tight tracking to emphasize the serif's beauty.
- **Body:** Work Sans provides a grounded, contemporary feel that ensures readability against warm, colored backgrounds.
- **Labels:** Use uppercase Work Sans with increased letter spacing for small metadata, button labels, and section headers to provide a structural, "catalog" feel.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy to emulate a physical magazine. On desktop, content is centered within a 1280px container using a 12-column grid. 

- **Margins:** Generous outer margins (64px on desktop) are essential to maintain the "luxury" feel.
- **Rhythm:** Vertical spacing should be expansive. Group related items with 24px (3x base), but separate major sections with 80px or 120px to allow for a rhythmic visual pace.
- **Mobile:** On smaller screens, the grid collapses to a single column with 20px margins, but typography remains relatively large to preserve the bold editorial voice.

## Elevation & Depth

To maintain the tactile feel, the design system avoids heavy, artificial shadows. Instead, it uses **Tonal Layers** and **Soft Ambient Shadows**.

- **Surfaces:** Use the Sand (#e9c46a) or Peach (#f4a261) colors at 10-20% opacity to create layered containers.
- **Shadows:** When depth is required (e.g., for elevated cards), use a very diffused shadow with a tint of the Primary color: `rgba(38, 70, 83, 0.08)`. 
- **Outlines:** Subtle 1px borders in the Primary color (at 10% opacity) are preferred over shadows for defining input fields and secondary buttons.

## Shapes

The shape language is **Soft** and intentional. While the overall layout is architectural and sharp, individual UI elements use a subtle 4px corner radius (`rounded-sm`) to take the edge off the "digital" feel without becoming too playful.

- **Standard Elements:** 4px (0.25rem) radius for buttons and inputs.
- **Large Containers:** 8px (0.5rem) radius for cards and modal windows.
- **Imagery:** Photography should remain sharp (0px radius) to emphasize the professional, editorial quality of the assets.

## Components

- **Buttons:** Primary buttons are filled with Teal (#2a9d8f) using white text. Secondary buttons use a Primary (#264653) outline.
- **Chips:** Small, pill-shaped tags using Sand (#e9c46a) backgrounds with Primary (#264653) text for categorization.
- **Lists:** Clean, border-bottom separators using the Primary color at 5% opacity. Use the Playfair Display for list item titles.
- **Input Fields:** Minimalist design with a bottom-only border or a very light Sand-filled background. Labels should be small, uppercase Work Sans.
- **Cards:** Use a light Peach (#f4a261) tint or the "Paper" neutral for the background. Cards should have generous internal padding (32px) and use Playfair Display for the headline.
- **Interactive Elements:** Checkboxes and radios use the Teal (#2a9d8f) for the "active" state to provide a clear, vibrant feedback loop against the warm neutrals.