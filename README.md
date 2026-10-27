# Shambhavi Rai — Portfolio

A React + Vite portfolio with pastel styling, responsive layout, and a light/dark theme toggle. This version intentionally does **not** use `lucide-react` or third-party icon packages, avoiding the missing `Github`/`Linkedin` export issue.

## Run locally (PyCharm on macOS)

1. Extract the ZIP.
2. Open the extracted `portfolio-site-fixed` folder in PyCharm.
3. Open **View → Tool Windows → Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Keep the terminal running and open the URL Vite prints (usually `http://localhost:5173/`).

## Verify production build

```bash
npm run build
npm run preview
```

Open the preview URL Vite prints (usually `http://localhost:4173/`).

## Deploy free

Push this folder to a GitHub repository, then import the repository in Vercel. Use build command `npm run build` and output directory `dist`.

## Before publishing

- Review the education description, especially the MCA institution/status.
- Add individual repository links for projects if available.
- Contact details are visible on the public site; remove anything you don't want public.
