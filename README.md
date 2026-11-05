# My Wedding Website

This is the website that I created for my wedding. In it you can find all the information related to my story with my fiancée, some pictures of us and the gift lists.

# Deployment

Served from `gabiepedro.cdias.dev` by an assets-only Cloudflare Worker (`wrangler.jsonc`). `.github/workflows/deploy.yml` builds and deploys on every push to `main`; the `REACT_APP_*` build variables and the Cloudflare credentials are repository secrets.

# Technologies

Here is a list of some of the technologies used in this project:

- Core:
  - React
  - React Router
  - Styled Components
  - TypeScript
  - Axios
- Linting:
  - ESLint
  - Prettier
  - Husky
  - CommitLint
  - Commitizen
- Analytics:
  - Firebase Analytics
- Localization:
  - i18next
- PWA:
  - Workbox Service Worker

TODO: Add unit tests

# Project Structure


This project is divided into some folders inside the `src` directory, according to the file's responsibility.

The app also works offline with the help of a service worker. The service worker is responsible for caching the website content and letting the user know when there is a new version of the content.


