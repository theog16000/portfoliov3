# Portfolio — Théo Genty

Bienvenue sur mon portfolio ! Je suis Théo Genty, designer et développeur web. J’y présente les projets que j’ai réalisés, mon approche du design et du développement, et un formulaire pour me contacter.

**Voir le site :** [theogenty.fr](https://theogenty.fr)

## Fonctionnalités

- Pages Accueil, À propos, Projets et Contact.
- Pages de projets générées depuis la collection Markdown `src/content/works`.
- Interface responsive avec une mise en page Bento dédiée au desktop.
- Navigation au clavier, lien d’accès direct au contenu et indicateurs de focus.
- Choix de la langue (français ou anglais) et options d’accessibilité : taille du texte, police sans empattement adaptée à la dyslexie, contraste renforcé et réduction des animations. Les préférences sont enregistrées dans le navigateur.
- Formulaire de contact transmis par FormSubmit à `theogenty8@gmail.com`.
- Métadonnées SEO par page, données structurées, sitemap XML et règles d’indexation.

## Technologies

- [Astro](https://astro.build/) avec rendu statique
- [React](https://react.dev/) pour les composants interactifs utilisés sur le site
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/) pour les icônes
- Hébergement et déploiement continu via GitHub Pages et GitHub Actions

## Lancer le projet en local

Prérequis : Node.js **22.12 ou supérieur** et npm.

```bash
npm ci
npm run dev
```

Astro affiche l’adresse locale dans le terminal. En local, le site utilise le préfixe `/portfoliov3/` pour rester compatible avec GitHub Pages.

## Commandes disponibles

| Commande | Description |
| --- | --- |
| `npm run dev` | Démarre le serveur de développement |
| `npm run build` | Génère le site statique dans `dist/` |
| `npm run preview` | Prévisualise le site généré |

## Ajouter un projet

Crée un fichier Markdown dans `src/content/works/`, par exemple `mon-projet.md` :

```md
---
title: Mon projet
description: Une courte présentation du projet.
image: /images/mon-projet.webp
category: Web Design
tags:
  - UI/UX
  - Astro
link: https://example.com
order: 3
---

## À propos du projet

Décris ici le contexte, le travail réalisé et les choix de conception.
```

Les champs `title` sont obligatoires. `description`, `image`, `category`, `tags`, `link` et `order` sont facultatifs. Les images référencées depuis `/images/` sont à placer dans `public/images/`.

## Déploiement

Chaque push sur la branche `main` lance le workflow `.github/workflows/deploy.yml`, qui publie une version miroir sur GitHub Pages à l’adresse `https://theog16000.github.io/portfoliov3/`. Le domaine personnalisé `theogenty.fr` est servi par Vercel ; les builds Vercel utilisent automatiquement la racine `/` afin que les pages et leurs feuilles de style soient chargées au bon emplacement.

Le DNS du domaine est géré chez o2switch et pointe vers Vercel. Pour vérifier ou modifier le domaine, consulte les domaines associés au projet dans le tableau de bord Vercel et utilise les valeurs DNS qui y sont indiquées. Ne remplace pas ces entrées par celles de GitHub Pages sans migrer aussi l’hébergement et sa configuration.

Le sitemap est disponible sur `https://theogenty.fr/sitemap.xml` et le fichier d’indexation sur `https://theogenty.fr/robots.txt`. Pour faciliter le suivi de l’indexation, ajoute le domaine dans Google Search Console et soumets-y le sitemap.

## Contact

Le formulaire de contact utilise FormSubmit ; le premier envoi vers une nouvelle adresse peut demander une confirmation par e-mail. Pour changer l’adresse de réception, modifie l’URL `formsubmit.co` dans `src/pages/contact.astro` ainsi que l’adresse affichée dans cette page.
