# Shraddha Pandey Interior Design - Portfolio Website

A premium, luxury portfolio website built with React.js for an Interior Designer based in Ahmedabad, India.

## Tech Stack

- **React.js** - Functional components with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## Features

- Fully responsive (mobile-first design)
- Smooth scrolling and animations
- Interactive project gallery with modal
- Testimonial slider with auto-play
- Contact form with WhatsApp integration
- WhatsApp floating button
- Scroll to top button
- Premium loading animation
- Sticky transparent navbar (turns solid on scroll)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Loader.jsx      # Loading animation
│   ├── Navbar.jsx      # Navigation bar
│   ├── ProjectModal.jsx # Project details modal
│   ├── ScrollToTop.jsx # Scroll to top button
│   ├── SectionTitle.jsx # Reusable section headers
│   └── WhatsAppButton.jsx # WhatsApp floating button
├── sections/            # Page sections
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form section
│   ├── Footer.jsx      # Footer section
│   ├── Hero.jsx        # Hero banner section
│   ├── Projects.jsx    # Portfolio gallery section
│   ├── Services.jsx    # Services section
│   └── Testimonials.jsx # Client testimonials
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Design Details

### Color Palette
- **Primary:** Black (#000000)
- **Secondary:** Gold/Champagne (#D4AF37)
- **Background:** Off-white/Cream (#FAF8F5)
- **Warm Background:** Light beige (#F5F1EB)

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

## Contact Information

- **Phone:** +91 9712349016
- **Email:** shraddhapandey6958@gmail.com
- **Location:** Ahmedabad, Gujarat, India
- **Service Area:** Pan India

## Customization

### Updating Contact Information
Edit the contact details in:
- `src/sections/Contact.jsx`
- `src/components/WhatsAppButton.jsx`
- `src/sections/Footer.jsx`

### Adding/Removing Projects
Edit the `projects` array in `src/sections/Projects.jsx`

### Updating Testimonials
Edit the `testimonials` array in `src/sections/Testimonials.jsx`

### Updating Services
Edit the `services` array in `src/sections/Services.jsx`

## License

Copyright 2024 Shraddha Pandey Interior Design. All rights reserved.
