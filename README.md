# SkillReady.ai

SkillReady makes students skill-ready to what companies actually ask for, helps companies find those candidates at no cost, and gives colleges the training and monitoring to move their numbers.

## Architecture

This project is built using:
- **Next.js** (App Router)
- **React** (Server & Client Components)
- **Tailwind CSS v4** (Design System tokens mapping to original UI)
- **TypeScript** (Strict types for scalable components)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `.next` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Runs ESLint to check for code quality and errors.

## Folder Structure

- `app/` - Next.js App Router endpoints and global layout/CSS.
- `components/` - Reusable UI components.
  - `home/` - Components specific to landing page sections.
  - `layout/` - Global structure like Navbar, Footer, Logo.
  - `ui/` - Primitives like Buttons and Reveal animations.
