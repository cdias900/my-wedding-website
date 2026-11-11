# Wedding Website

## Development

Install dependencies with `yarn install`, run the local React development server with `yarn start`, and create the production build with `yarn build`. The build uses Firebase configuration supplied by the deployment environment.

The site deploys to the Cloudflare Worker configured in `wrangler.jsonc`. GitHub Actions builds and deploys on pushes to `main` and on manual workflow dispatch. Keep Cloudflare credentials and Firebase configuration in repository secrets.

The app is a React and TypeScript PWA using React Router, styled-components, i18next, Firebase, Segment and Workbox.

## README and repository metadata

`README.md` is the product showcase, not developer documentation. Keep it and the GitHub repository description, homepage and topics (set with `gh repo edit`) current in the same change whenever a user-facing feature is added, removed or renamed, or the branding, platforms, stack, release status or top-level layout changes.
