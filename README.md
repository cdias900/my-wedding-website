<p align="center">
  <img src="public/logo512.png" width="96" height="96" alt="Gabi e Pedro icon">
</p>

<h1 align="center">Casamento Gabi e Pedro</h1>

<p align="center"><strong>Our wedding, in one place for our guests.</strong></p>

<p align="center">
  <a href="https://gabiepedro.cdias.dev">gabiepedro.cdias.dev</a> · Brazilian Portuguese and English
</p>

---

The website Gabi and Pedro made for their wedding in December 2022: their story, their photos,
everything guests needed to know about the day, a way to confirm they were coming, and the gift
list.

It was built for their family and friends, in Portuguese and in English.

## For guests

- **Our story.** How the couple met, told in words and photo galleries.
- **The day.** Where and when, with a countdown to the ceremony.
- **RSVP.** Guests confirm their presence right on the site.
- **Gift list.** Gift ideas with how much has already been contributed, updated live as guests
  give.
- **On the phone.** The site installs like an app and keeps working offline.

## Privacy

Attendance responses and gift contributions are stored in Firebase for the couple only. Visits are
measured with Firebase and Segment analytics.

## Design

Photo-led pages with soft lavender botanical details and a warm, personal tone.

## How it is built

| Part | What it is |
| --- | --- |
| [`src/pages`](src/pages) | The home page, the gift list and the couple's admin page. |
| [`src/components`](src/components) | The story, gallery, event and shared sections. |
| [`src/locales`](src/locales) | Portuguese and English copy. |
| [`src/assets`](src/assets) | Photos, illustrations and music. |
| [`public`](public) | App icons and static files. |

React and TypeScript as an installable web app, backed by Firebase and served from Cloudflare
Workers.

## Status

The wedding has happened; the site stays online as a keepsake.

## Development

[AGENTS.md](AGENTS.md) has how to build and deploy it.
