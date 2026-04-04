# 🚀 Faizan Pervez - Developer Portfolio

A production-ready, modern developer portfolio built with **Next.js 16** (App Router), **Tailwind CSS 4**, and **Framer Motion**. Features a sleek dark theme, smooth animations, and full responsiveness.

## ✨ Features

- ✅ **Modern Design** - Premium, minimalist UI inspired by SaaS landing pages
- ✅ **Next.js 16 (App Router)** - Latest React and Next.js features
- ✅ **Tailwind CSS 4** - Utility-first styling with dark mode
- ✅ **Framer Motion** - Smooth, performant animations
- ✅ **Fully Responsive** - Mobile-first design approach
- ✅ **SEO Optimized** - Metadata, Open Graph, structured data
- ✅ **Form Validation** - React Hook Form + Zod for robust validation
- ✅ **API Route** - Contact form submission endpoint
- ✅ **Image Optimization** - Next.js Image component ready
- ✅ **Accessibility** - WCAG compliant markup and interactions
- ✅ **Dark Mode** - Default dark theme with professional colors

## 📁 Project Structure

```
app/
├── layout.js                          # Root layout with SEO & Navigation
├── page.js                            # Homepage with all sections
├── globals.css                        # Global styles & tailwind config
├── robots.js                          # SEO robots.txt
├── sitemap.js                         # SEO sitemap
│
├── api/
│   └── contact/
│       └── route.js                   # Contact form API endpoint
│
├── sections/                          # Page sections (feature-based)
│   ├── hero/Hero.jsx
│   ├── about/About.jsx
│   ├── tech-stack/TechStack.jsx
│   ├── projects/Projects.jsx
│   ├── experience/Experience.jsx
│   ├── testimonials/Testimonials.jsx
│   ├── contact/Contact.jsx
│   └── footer/Footer.jsx
│
├── components/
│   ├── common/                        # Reusable UI components
│   │   ├── Navigation.jsx
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   └── SectionHeader.jsx
│   ├── cards/                         # Card-based components
│   │   ├── ProjectCard.jsx
│   │   ├── TechCard.jsx
│   │   ├── ExperienceCard.jsx
│   │   └── TestimonialCard.jsx
│   └── forms/
│       └── ContactForm.jsx
│
├── hooks/
│   └── useScrollAnimation.js          # Custom animation hook
│
├── data/                              # Static content data
│   ├── projects.js
│   ├── skills.js
│   ├── experience.js
│   └── testimonials.js
│
└── utils/
    ├── cn.js                          # Tailwind merge utility
    └── validation.js                  # Zod schemas
```

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Type Safety:** JavaScript with JSDoc comments
- **Image Optimization:** Next.js Image Component
- **SEO:** Next.js Metadata API

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Optional: Email service integration (SendGrid, Mailgun, etc.)
NEXT_PUBLIC_CONTACT_EMAIL=hello@faizanpervez.dev
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Key Sections

### 1. **Hero Section**
- Name, title, and professional tagline
- CTA buttons (View Projects, Hire Me)
- Statistics (Years of Experience, Projects Completed)
- Animated profile image area

### 2. **About Section**
- Professional overview
- Key approach and methodology
- Years of experience and projects delivered

### 3. **Tech Stack**
- Skills organized by categories
- Interactive tech cards with descriptions
- Skills filtering by category

### 4. **Projects**
- Showcase of featured projects
- Project cards with descriptions and tech stack
- Live demo and code links

### 5. **Experience**
- Professional timeline with positions
- Experience badges and achievements
- Visual timeline design

### 6. **Testimonials**
- Client feedback and reviews
- Author information and company details
- Grid layout with animations

### 7. **Contact Section**
- Contact information (email, location)
- Social media links
- Contact form with validation
- Toast notifications for submission status

### 8. **Footer**
- Brand information
- Quick navigation links
- Social media connections
- Copyright information

## 🔧 Customization Guide

### Update Content

**Personal Information:**
- Edit section data in `app/data/*.js` files
- Update `app/layout.js` metadata for SEO

**Colors & Theme:**
- Modify CSS variables in `app/globals.css`
- Tailwind config uses predefined cyan/blue theme
- Search/replace `cyan-500` for different accent colors

**Navigation Links:**
- Update `app/components/common/Navigation.jsx`
- Section IDs must match href values

### EmailIntegration

To enable email notifications, update `app/api/contact/route.js`:

```javascript
// Example with SendGrid
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: process.env.CONTACT_EMAIL,
  from: 'noreply@faizanpervez.dev',
  subject: `New Portfolio Inquiry from ${validatedData.name}`,
  text: validatedData.message,
  html: `<strong>${validatedData.name}</strong><br/>${validatedData.message}`,
};

await sgMail.send(msg);
```

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind breakpoints
- **Tested on:** iPhone, iPad, tablet, desktop
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

## ♿ Accessibility

- Semantic HTML markup
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliant (WCAG AA)
- Focus states on interactive elements

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

- **Netlify:** Connect GitHub repo, set build command to `npm run build`
- **AWS Amplify:** Deploy through AWS console
- **Docker:** Create Dockerfile and deploy to any cloud provider

## 📈 Performance Tips

1. **Image Optimization:** Use Next.js Image component for all images
2. **Code Splitting:** Dynamic imports for heavy components
3. **Lazy Loading:** Built-in with Framer Motion `whileInView`
4. **Caching:** Leverage Next.js ISR and static generation
5. **Analytics:** Add Google Analytics or Vercel Analytics

## 🐛 Debugging

Enable debug logs by setting:

```javascript
// In component files
console.log('Debug info:', data);
```

Check Next.js docs for more: https://nextjs.org/docs/app/building-your-application/optimizing/using-web-apis

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest enhancements
- Submit pull requests

## 📧 Contact

Have questions or want to collaborate?
- **Email:** hello@faizanpervez.dev
- **GitHub:** [@faizanpervez](https://github.com/faizanpervez)
- **LinkedIn:** [Faizan Pervez](https://linkedin.com)

---

**Built with ❤️ by Faizan Pervez**
