# DREI — Tokenized Real Estate Platform

Full-stack assessment submission (**Option 3: Full-Stack Developer**).

A React + Vite frontend backed by a lightweight Express API. The Browse page fetches property listings from the backend and renders them as responsive investment cards.

## What Was Implemented

### Backend (`server/`)

- `GET /api/properties` — returns mock property data: ID, Name, Location, Price, Image, Annual Yield (plus token sale fields used by the UI)
- `GET /api/properties/:id` — returns a single property, 404 if not found
- JSON 404 fallback for unknown `/api` routes

### Frontend

- `src/pages/Browse.tsx` fetches from `GET /api/properties` (via the Vite dev proxy) with loading spinner, error state with retry, and search/filter support
- `src/components/ui/PropertyCard.tsx` — responsive card showing property image, name, location, price, annual yield (APY), and an **Invest Now** button (disabled when sold out)

### Cleanup

Removed unused boilerplate that was not referenced anywhere:

- Legacy MERN server (`server/` controllers, models, and routes for users/posts/profile/chat), old root `server.js`
- Unused Netlify serverless functions (`netlify/`)
- Unused dependencies (mongoose, bcryptjs, jsonwebtoken, gravatar, etc.)
- Unused static assets

## Getting Started

```bash
npm install
npm run dev
```

`npm run dev` starts both:

- API server on <http://localhost:5025>
- Vite dev server on <http://localhost:3000> (proxies `/api` to the API server)

Or run them separately with `npm run server` and `npm run client`.

## Project Structure

```
server/
  index.js            Express app (API endpoints)
  data/properties.js  Mock property data
src/
  pages/              Route pages (Home, Browse, PropertyDetail, ...)
  components/         Layout, UI components, modals
  context/            Wallet context
  utils/              Types and mock data used by other pages
```
