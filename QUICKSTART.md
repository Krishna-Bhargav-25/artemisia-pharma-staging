# 🚀 Quick Start Guide – Artemisia Pharma Website (Netlify Production)

This guide explains how to set up, update, and automatically deploy your Excel-driven product catalog to Netlify.

---

## ⚙️ Step 1: Install Dependencies

Open **Command Prompt** or **Git Bash** (not PowerShell):

```bash
cd path/to/your/prod-repo
npm install
```

This installs all the dependencies needed to generate product pages automatically from Excel files.

---

## 🧩 Step 2: Generate Sample Excel Templates

If you’re setting up for the first time:

```bash
npm run generate-templates
```

This will create five Excel files inside the `data/` folder:
- ✅ IR Pellets.xlsx  
- ✅ SR,CR,PR Pellets.xlsx  
- ✅ EC,DR Pellets.xlsx  
- ✅ Granules.xlsx  
- ✅ Inert Core Pellets.xlsx  

---

## ✏️ Step 3: Add or Edit Products

1. Open any `.xlsx` file in the `data/` folder  
2. Update, add, or remove product rows  
3. Keep the **first row as headers**  
4. Save the file  

Example format:

| PRODUCT | STRENGTH/CONCENTRATION | DESCRIPTION | STATUS |
|----------|-------------------------|--------------|---------|
| Omeprazole IR Pellets | 20mg | Pellets | Available |
| Esomeprazole IR Pellets | 40mg | Pellets | Available |

---

## 🧠 Step 4: How Netlify Builds Automatically

Whenever you **push new Excel files** (or updates) to your production repo on GitHub:
1. Netlify detects the change  
2. It runs your build command:

   ```bash
   node utils/excelLoader.js && node scripts/prerender.js
   ```
3. This:
   - Converts Excel → JSON  
   - Renders all EJS templates → static HTML  
   - Saves the final site into the `/docs` folder  
4. Netlify automatically publishes `/docs` live to your production website  

⏱️ **Deployment time:** usually 1–3 minutes after a push.

---

## 🌐 Step 5: Local Testing (Optional)

You can test locally before pushing:

```bash
npm run dev
```

Then open:
```
http://localhost:3000/products/ir-pellets
```

Your site will load locally with your Excel data.

---

## 💾 Step 6: Push Changes to GitHub

```bash
git add .
git commit -m "Updated product data"
git push
```

That’s it — Netlify will automatically rebuild and redeploy your live website.

---

## 📁 Production Repo Structure

Your **production repo** should look like this:

```
📁 public/
📁 views/
📁 data/
📁 utils/
📁 scripts/
.gitignore
package.json
netlify.toml
README.md
```

> Do **NOT** commit `/dist/` or `/docs/`.  
> Netlify builds and deploys them automatically.

---

## 🧰 Common Commands

| Command | Description |
|----------|-------------|
| `npm install` | Install dependencies |
| `npm run generate-templates` | Create sample Excel files |
| `npm run dev` | Test locally |
| `node utils/excelLoader.js` | Convert Excel → JSON manually |
| `node scripts/prerender.js` | Generate static HTML manually |

---

## ❓ Troubleshooting

**Products not updating on site?**
- Ensure Excel files are in `/data/`
- Ensure headers exist in row 1
- Check Netlify build logs (Dashboard → Deploys → Logs)

**Build failed on Netlify?**
- Verify Excel files aren’t open during deploy
- Re-run `npm install` locally to check missing modules
- Check for invalid Excel formats (.xls instead of .xlsx)

---

## 🧾 Related Docs

- **EXCEL_SETUP.md** – Detailed Excel format guide  
- **IMPLEMENTATION_SUMMARY.md** – Technical overview  
- **data/README.md** – Data management reference  

---

## 🎉 You’re All Set!

Just upload or edit Excel files, commit, and push — Netlify will automatically rebuild and deploy your latest product catalog.

---

Need help?  
Check your Netlify Deploy logs or open an issue in the repository.
