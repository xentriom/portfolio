# Portfolio

## Color & Theme
- from-gray-800 to-gray-900: background
### Primary Color:
- gray-200: main text
- gray-100: highlight text
- gray-300/400: sub-text
### Accent color:
- indigo-400: main
- indigo-500: actionable
- indigo-700: hover/focus
### Glassmorphic Container:
- gray-700/20: primary layer
- gray-800-95: secondary layer
- border-gray-[value]: glassmorphic layer
- backdrop-blur-lg rounded-lg shadow-xl

## Building and Deploying for RIT domain
1. Remove React Scan from `index.html`.
2. Configure BrowserRouter: Add `basename="/jc5892/portfolio/v2/"` in main.jsx.
3. Build the project: `npm run build`
4. Modify asset paths in `dist/index.html` and `dist/assets/index-[].js`:
   - Prefix /assets with .

## Firestore Structure
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
