# PowerRanger E-Lab

A Next.js web application for PowerRanger E-Lab, an initiative empowering vulnerable women in Rwanda through creative skills training and entrepreneurship support.

## About the Project

PowerRanger E-Lab is dedicated to transforming the lives of vulnerable women in Rwanda, including sex workers and teen moms, by providing comprehensive training and creating sustainable income opportunities. Our flagship solution is an e-commerce website for Du Hope—a program that helps women transition out of sex work through skills training in sewing, knitting, and crafts. The platform connects their handmade products with local and international markets, combining technology with social impact to create long-term economic independence.

### Key Features

- **Mission & Vision**: Clear articulation of our goals and values
- **Problem & Solution**: Detailed analysis of unemployment challenges for vulnerable women and our e-commerce solution
- **E-LAB Challenges**: Documentation of the six key challenges in implementing digital entrepreneurship for Du Hope
- **Team Profiles**: Meet our dedicated team members
- **Project Showcase**: Featured projects and initiatives
- **Gallery**: Multimedia showcase of our work and community
- **Contact Information**: Ways to connect and collaborate

## Technology Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.js           # Root layout component
│   └── page.js             # Main homepage component
├── public/                 # Static assets (images, videos, etc.)
│   ├── logo.svg
│   └── [team images]
└── package.json
```

## Sections

1. **Hero**: Engaging introduction with background video
2. **About**: Mission statement and core values
3. **Problem & Solution**: Detailed problem analysis and our comprehensive solution
4. **E-LAB Challenges**: Six key challenges with solutions
5. **Team**: Meet our team members
6. **Projects**: Featured initiatives and videos
7. **Gallery**: Multimedia showcase
8. **Contact**: Connect with us

## Contributing

This project is part of the PowerRanger E-Lab initiative. For contributions or collaborations, please reach out through our contact information on the website.

## License

© 2026 PowerRanger E-Lab. All rights reserved.

## MongoDB & Deployment

- `MONGODB_URI`: connection string for your Atlas/cluster instance (set this in `.env.local` for local development and in the Vercel dashboard for production). The gallery will gracefully fall back to the built-in dataset when this variable is missing so previews stay reliable.
- `MONGODB_DB` (optional): overrides the database encoded in the URI if you prefer to keep data inside a different namespace.

### How the integration works

- `lib/mongodb.js` keeps a cached `MongoClient` alive across requests so server components and API routes reuse the same connection.
- `lib/gallery.js` exposes `getGalleryItems()` (used by the homepage) and `addGalleryItem()` (available through `app/api/gallery/route.js`) so you can seed or expand the `gallery` collection over time.

### Deploying on Vercel

1. Push to the branch connected with your Vercel project.
2. Under **Project Settings > Environment Variables**, add `MONGODB_URI` (and `MONGODB_DB` if needed) for the `preview`/`production` environments you plan to publish.
3. Trigger a redeploy after the variables are set so the build can connect to MongoDB.
4. (Optional) Seed the collection by POSTing JSON to `/api/gallery` from Postman, Curl, or a Vercel Function to register additional media items.
