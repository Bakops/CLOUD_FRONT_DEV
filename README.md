# CI/CD & Déploiement Front Cloud

## Membres du groupe
- Jean Dupont
- Marie Durand

## Fonctionnalités
- Le front Next.js récupère les données de l'API Cloud Run et les affiche sur /items
- Les noms/prénoms du groupe sont affichés sur la même page

## CI/CD
- Dockerfile pour builder et servir le front
- cloudbuild.yaml pour builder, push et déployer automatiquement sur Cloud Run après un push sur la branche principale

## Variables à personnaliser
- `REGION`, `PROJECT_ID`, `artifact-registry-repo` dans cloudbuild.yaml
- L'URL de l'API dans `app/items.tsx`

## Démonstration
- Après un push sur main, le front est rebuild et déployé automatiquement
- Les données affichées sont celles de l'API (mettre à jour l'API, puis vérifier le front)

## Bonus
- Ajoutez toute amélioration ou documentation supplémentaire ici pour la notation
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
