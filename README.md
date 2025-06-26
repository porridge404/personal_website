# Stuart Cansdale - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: Built with accessibility best practices
- **SEO Friendly**: Optimized for search engines
- **Contact Form**: Secure email handling via Supabase Edge Functions

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool and dev server
- **Supabase** - Backend services and Edge Functions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/porridge404/personal_website.git
cd personal_website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` and add your Supabase configuration:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📧 Contact Form Setup

The contact form uses Supabase Edge Functions for secure email handling. To set it up:

### 1. Create a Supabase Project
- Go to [supabase.com](https://supabase.com) and create a new project
- Get your project URL and anon key from the project settings

### 2. Set up Resend for Email Delivery
- Sign up at [resend.com](https://resend.com)
- Get your API key from the dashboard
- Verify your domain (or use their test domain for development)

### 3. Deploy the Edge Function
```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-id

# Set the Resend API key as a secret
supabase secrets set RESEND_API_KEY=your_resend_api_key

# Deploy the function
supabase functions deploy send-contact-email
```

### 4. Update Environment Variables
Add your Supabase credentials to `.env`:
```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## 🚀 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The site will be available at: `https://porridge404.github.io/personal_website/`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── InteractiveResume.tsx  # Interactive resume timeline
│   ├── MyProjects.tsx  # Projects showcase
│   ├── Contact.tsx     # Contact form with Supabase integration
│   └── Footer.tsx      # Footer
├── lib/
│   └── supabase.ts     # Supabase client configuration
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles

supabase/
└── functions/
    └── send-contact-email/
        └── index.ts    # Edge function for email handling
```

## 🎨 Customization

### Colors
The site uses a custom color palette defined in `tailwind.config.js`. Main colors:
- **Primary**: Emerald green (`emerald-400`, `emerald-500`)
- **Background**: Slate (`slate-800`, `slate-900`)
- **Text**: White and gray variants

### Content
Update the content in each component file:
- **Personal info**: `src/components/Hero.tsx`
- **About section**: `src/components/About.tsx`
- **Interactive Resume**: `src/components/InteractiveResume.tsx`
- **Projects**: `src/components/MyProjects.tsx`
- **Contact**: `src/components/Contact.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- **Lazy loading** for images
- **Code splitting** with Vite
- **Optimized assets** and compression
- **Minimal bundle size**

## 🔒 Security

- **Secure email handling** via Supabase Edge Functions
- **Environment variables** for sensitive configuration
- **CORS protection** on API endpoints
- **Input validation** and sanitization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Stuart Cansdale - [stuartcansdale@gmail.com](mailto:stuartcansdale@gmail.com)

Project Link: [https://github.com/porridge404/personal_website](https://github.com/porridge404/personal_website)