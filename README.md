# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### Short Notes
- I approached the assignment by breaking down the webpage into reusable React components (e.g., Hero, AccordionGroup, OurTeam) and used TailwindCSS for styling consistency and responsiveness. I also followed a mobile-first layout using flex and grid.

- One challenge was ensuring that local image paths worked after deployment; I resolved this by importing images directly into each component instead of using relative string paths. I also assumed that all resources would be static (not from a backend).

- With more time, I would make the data fully dynamic using a backend (e.g., SQL + Node.js API) and integrate a CMS or admin panel to allow content updates without modifying code.


