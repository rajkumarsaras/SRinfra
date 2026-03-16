# SR Infra - Premium Flats & Apartments in Hyderabad

A modern, responsive single-page application built with Next.js, showcasing SR Infra's residential real estate projects across Hyderabad, Telangana & Andhra Pradesh.

## 🌟 Features

- **Modern Design**: Premium UI with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Single Page Application**: Smooth scrolling navigation between sections
- **Sections**:
  - Home - Hero section with compelling CTA
  - About - Company overview with statistics
  - Projects - Showcase of infrastructure projects
  - Gallery - Visual portfolio of completed work
  - Contact - Contact form and information
- **Built with**:
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Framer Motion (animations)
  - React Icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/sr-infra-website.git
cd sr-infra-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build

To create a production build:

```bash
npm run build
```

This will generate static files in the `out` directory.

## 🌐 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `sr-infra-website`
2. **Do not** initialize with README, .gitignore, or license

### Step 2: Update Configuration

If your repository name is different from `sr-infra-website`, update the `basePath` in `next.config.js`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '',
```

### Step 3: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sr-infra-website.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy your site

### Step 5: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/sr-infra-website/
```

## 🛠️ Customization

### Update Company Information

Edit the following files to customize content:

- **Contact Info**: `components/Contact.tsx` and `components/Footer.tsx`
- **Projects**: `components/Projects.tsx`
- **About Stats**: `components/About.tsx`
- **Hero Text**: `components/Hero.tsx`

### Change Colors

Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your custom colors
  },
},
```

### Add Real Images

Replace the gradient placeholders in `components/Gallery.tsx` with actual images:

```typescript
<img src="/images/project1.jpg" alt="Project" />
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For support, email info@srinfra.com or create an issue in the repository.

---

Built with ❤️ for SR Infra
