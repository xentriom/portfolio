# Portfolio

### Building and Deploying for RIT domain

1. Uncomment and use import.meta.env instead of process.env
2. Remove React Scan from `index.html`.
3. Configure BrowserRouter: Add `basename="/jc5892/portfolio/v2/"` in main.jsx.
4. Build the project: `npm run build`
5. Modify asset paths in `dist/index.html` and `dist/assets/index-[].js`:
   - Prefix /assets with .

### Firestore Structure

```yml
description: map
  long: string
  short: string
end_date: string (ISO format)
id: number
images: map
  bg: string
  icon: string
links: array (map)
  type: string
  url: string
name: string
start_date: string (ISO format)
status: string
tags: array (string)
type: string
```
