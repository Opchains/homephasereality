# Homephase Realty

A static real-estate landing page designed for GitHub Pages.

## Files

- `index.html` — main page
- `style.css` — styles and layout
- `script.js` — menu and enquiry interactions

## Publish to GitHub Pages

1. Create a GitHub repository.
2. Push the project to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```
3. In GitHub, open the repository.
4. Go to Settings > Pages.
5. Set Source to "GitHub Actions".
6. The deployment workflow in `.github/workflows/deploy.yml` will publish the site automatically.

Your site will be available at:
`https://<your-username>.github.io/<your-repo>/`
