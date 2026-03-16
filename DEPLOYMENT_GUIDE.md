# 🚀 Step-by-Step Deployment Guide for SR Infra Website

## Prerequisites
- Git installed on your computer
- GitHub account created
- Terminal/Command Prompt access

---

## Step 1: Initialize Git Repository

Open your terminal/command prompt and navigate to the project folder:

```bash
cd "G:\Projects\Freelancer Projects\SRinfra\sr-infra-website"
```

Initialize Git:

```bash
git init
```

---

## Step 2: Add All Files to Git

Add all project files:

```bash
git add .
```

Commit the files:

```bash
git commit -m "Initial commit: SR Infra premium website"
```

---

## Step 3: Set Main Branch

```bash
git branch -M main
```

---

## Step 4: Connect to Your GitHub Repository

Add the remote repository (you already have this repo):

```bash
git remote add origin https://github.com/rajkumarsaras/SRinfra.git
```

---

## Step 5: Push Code to GitHub

Push your code to GitHub:

```bash
git push -u origin main
```

**Note:** If the repository already has files, you may need to force push:

```bash
git push -u origin main --force
```

Or if you want to keep existing files:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## Step 6: Enable GitHub Pages

1. Go to your repository: https://github.com/rajkumarsaras/SRinfra

2. Click on **Settings** (top menu)

3. In the left sidebar, click **Pages**

4. Under **Source**, select **GitHub Actions** from the dropdown

5. The deployment workflow will automatically start

---

## Step 7: Wait for Deployment

1. Go to the **Actions** tab in your repository

2. You'll see a workflow running called "Deploy to GitHub Pages"

3. Wait for it to complete (usually 2-5 minutes)

4. Once complete, you'll see a green checkmark ✓

---

## Step 8: Access Your Live Website

Your website will be live at:

```
https://rajkumarsaras.github.io/SRinfra/
```

---

## 🔧 Troubleshooting

### If deployment fails:

1. **Check Actions tab** for error messages
2. **Verify GitHub Pages is enabled** in Settings → Pages
3. **Ensure workflow file exists** at `.github/workflows/deploy.yml`

### If website shows 404:

1. Wait 5-10 minutes (GitHub Pages can take time)
2. Clear browser cache
3. Check that basePath in `next.config.js` is `/SRinfra`

### If you need to redeploy:

```bash
git add .
git commit -m "Update website"
git push origin main
```

The workflow will automatically redeploy.

---

## 📝 Making Updates

Whenever you want to update the website:

1. Make your changes in the code
2. Save all files
3. Run these commands:

```bash
git add .
git commit -m "Description of your changes"
git push origin main
```

The website will automatically rebuild and deploy!

---

## 🎨 Quick Customization Tips

### Update Contact Information
Edit: `components/Contact.tsx` and `components/Footer.tsx`

### Change Projects
Edit: `components/Projects.tsx`

### Modify Colors
Edit: `tailwind.config.ts` - change the `primary` color values

### Update Company Stats
Edit: `components/About.tsx` - modify the `stats` array

---

## ✅ Verification Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub Actions workflow completed successfully
- [ ] GitHub Pages enabled in repository settings
- [ ] Website accessible at https://rajkumarsaras.github.io/SRinfra/
- [ ] All sections working (Home, About, Projects, Gallery, Contact)
- [ ] Mobile responsive design working
- [ ] Contact form functional

---

## 🆘 Need Help?

If you encounter any issues:

1. Check the Actions tab for deployment logs
2. Verify all files are committed and pushed
3. Ensure GitHub Pages source is set to "GitHub Actions"
4. Wait a few minutes and refresh your browser

---

**Your website is now live and ready to showcase SR Infra's projects! 🎉**
