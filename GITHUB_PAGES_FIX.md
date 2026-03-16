# 🔧 Fix GitHub Pages 404 Error

## Problem
Your GitHub Pages is set to deploy from the `main` branch, but we need it to use **GitHub Actions** to build and deploy the Next.js app.

---

## ✅ SOLUTION - Follow These Steps Exactly:

### Step 1: Go to GitHub Pages Settings
Visit: **https://github.com/rajkumarsaras/SRinfra/settings/pages**

### Step 2: Change the Source
You'll see a section called **"Build and deployment"**

**Current Setting (WRONG):**
- Source: Deploy from a branch
- Branch: main

**Change it to (CORRECT):**
1. Click the dropdown under **"Source"**
2. Select **"GitHub Actions"** (NOT "Deploy from a branch")
3. The page will refresh

### Step 3: Trigger the Workflow
After changing to GitHub Actions, you need to trigger the deployment:

**Option A: Make a small change and push**
```bash
cd "G:\Projects\Freelancer Projects\SRinfra\sr-infra-website"
git commit --allow-empty -m "Trigger GitHub Pages deployment"
git push origin main
```

**Option B: Manually trigger from GitHub**
1. Go to: https://github.com/rajkumarsaras/SRinfra/actions
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select "main" branch
5. Click green "Run workflow" button

### Step 4: Wait for Deployment
1. Go to: https://github.com/rajkumarsaras/SRinfra/actions
2. You'll see a workflow running (yellow circle)
3. Wait 2-5 minutes for it to complete (green checkmark)

### Step 5: Access Your Website
Once the workflow shows a green checkmark:
```
https://rajkumarsaras.github.io/SRinfra/
```

---

## 🎯 Quick Visual Guide

### What You Should See in Settings → Pages:

**BEFORE (Wrong):**
```
Source: Deploy from a branch
Branch: main / (root)
```

**AFTER (Correct):**
```
Source: GitHub Actions
Your site is being built from the main branch using GitHub Actions
```

---

## 🔍 Verify It's Working

### Check 1: Actions Tab
- Go to: https://github.com/rajkumarsaras/SRinfra/actions
- You should see "Deploy to GitHub Pages" workflow
- Status should be green checkmark ✓

### Check 2: Deployment
- The workflow should show two jobs:
  - build ✓
  - deploy ✓

### Check 3: Website
- Visit: https://rajkumarsaras.github.io/SRinfra/
- You should see the SR Infra website with apartments and flats

---

## ⚠️ Common Issues

### Issue: "No workflows found"
**Solution:** The workflow file might not be in the repository. Run:
```bash
cd "G:\Projects\Freelancer Projects\SRinfra\sr-infra-website"
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow"
git push origin main
```

### Issue: Workflow fails with "npm ci" error
**Solution:** This is normal on first run. The workflow will retry and succeed.

### Issue: Still getting 404 after deployment
**Solution:** 
1. Clear your browser cache (Ctrl + Shift + Delete)
2. Try incognito/private mode
3. Wait 5 more minutes (DNS propagation)

---

## 📞 Need Help?

If you still see 404 after following all steps:
1. Check Actions tab for error messages
2. Verify Source is set to "GitHub Actions" (not branch)
3. Make sure the workflow completed successfully (green checkmark)

---

**Your website will be live at:** https://rajkumarsaras.github.io/SRinfra/
