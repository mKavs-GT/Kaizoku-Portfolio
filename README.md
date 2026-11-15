# 🏴‍☠️ Kaizoku – Kowai Core (E-Commerce Portfolio)

A streetwear e-commerce and showcase experience built with React, Vite, Tailwind CSS, TypeScript, and Framer Motion.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mKavs-GT/Kaizoku-Portfolio)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mKavs-GT/Kaizoku-Portfolio)

---

## ⚡ Instant 1-Click Deploy Options

### Option 1: Vercel (Recommended - 30 Seconds)
1. Click the **[Deploy with Vercel](https://vercel.com/new/clone?repository-url=https://github.com/mKavs-GT/Kaizoku-Portfolio)** button above.
2. Sign in with GitHub and click **Create** / **Deploy**.
3. All build commands and output directories are preconfigured (`vercel.json`). Your site will be live instantly with a free SSL domain!

### Option 2: Netlify (30 Seconds)
1. Click the **[Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/mKavs-GT/Kaizoku-Portfolio)** button above.
2. Authorize your GitHub account and click **Deploy**.
3. Built and routed automatically with zero configuration needed (`netlify.toml`).

### Option 3: GitHub Pages (Free Automatic Deployment)
An automated GitHub Actions workflow is included in `.github/workflows/deploy.yml`.
1. Go to your repository on GitHub: `https://github.com/mKavs-GT/Kaizoku-Portfolio`.
2. Click **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. Push your changes (`git push origin main`) — the site will automatically build and publish to `https://mKavs-GT.github.io/Kaizoku-Portfolio/`!

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm --prefix kaizoku install
```
*(Or navigate into `cd kaizoku && npm install`)*

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `kaizoku/dist/`.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 📁 Project Structure

```text
Kaizoku-Portfolio/
├── .github/workflows/deploy.yml  # Automated GitHub Pages CI/CD
├── kaizoku/                      # React + TypeScript + Vite Application
│   ├── public/                   # Static assets & PWA manifest
│   ├── src/
│   │   ├── assets/               # Product photography, models & branding
│   │   ├── components/           # UI components & sections
│   │   ├── pages/                # Home, Products, Detail, Checkout, About
│   │   └── App.tsx               # App routing & theme
│   ├── index.html                # Entry HTML with dynamic base paths
│   ├── package.json              # App scripts and dependencies
│   └── vite.config.ts            # Vite build configuration
├── package.json                  # Root proxy scripts
├── vercel.json                   # Vercel deployment configuration
├── netlify.toml                  # Netlify deployment configuration
└── README.md                     # Documentation
```
