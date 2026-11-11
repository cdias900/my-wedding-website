<p align="center">
  <img src="public/logo512.png" alt="Wedding website icon" width="96" height="96">
</p>

<h1 align="center">Wedding Website</h1>

<p align="center">A bilingual wedding website for sharing the celebration with guests.</p>

<p align="center"><a href="https://gabiepedro.cdias.dev">gabiepedro.cdias.dev</a></p>

## What it is

A private-couple wedding website for guests, with the couple's story, photos, celebration information and gift list. It is available in Portuguese and English and can be installed as a progressive web app.

## Features

**The celebration**
- Share the couple's story and photo galleries
- Present event information and a countdown
- Let guests confirm their presence

**Gift list**
- Browse gift ideas and contribution progress
- See gift-list updates as they change

**Guest experience**
- Switch between Portuguese and English
- Install the site as a PWA and access cached content offline

## Privacy

The site contains personal wedding content intended for invited guests. It uses Firebase and Segment analytics, and Firebase services support the gift list, attendance responses and notifications. Do not add private addresses, phone numbers, email addresses or guest data to this repository or README.

## Look

A photo-led wedding design with soft lavender botanical accents and a warm, personal tone.

## Layout

| Path | What it holds |
| --- | --- |
| `src/pages` | Home, gift list and administration pages |
| `src/components` | Story, gallery, event and shared interface sections |
| `src/locales` | Portuguese and English copy |
| `src/assets` | Photos, illustrations and audio |
| `public` | PWA assets and static files |
| `src/service-worker.ts` | Offline caching and update behavior |

## Status

Live at [gabiepedro.cdias.dev](https://gabiepedro.cdias.dev) for the wedding celebration.

## Development

Building, testing and deploying are covered in [AGENTS.md](AGENTS.md).
