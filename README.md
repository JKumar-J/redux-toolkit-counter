# Redux Toolkit Counter

A simple counter application built with React, Vite, Redux Toolkit, and React Redux.

## Live Demo
https://jkumar-j.github.io/redux-toolkit-counter/

## Features

- Increment the counter by one.
- Decrement the counter by one.
- Increment or decrement the counter by a custom amount.
- Manage counter state with a Redux Toolkit slice.

## Technologies

- React
- Vite
- Redux Toolkit
- React Redux

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the linter:

```bash
npm run lint
```

## Deployment

The workflow in `.github/workflows/deploy.yml` builds the Vite application and deploys it to GitHub Pages whenever changes are pushed to the `main` branch. GitHub Pages must be configured to use **GitHub Actions** as its source.
