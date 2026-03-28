## Jack Criminger Website Portfolio   ##
## jackcriminger.dev (working domain) ##


# How to run React/Frontend

    1. Make sure you are in the base directory for the react app (i.e., "frontend")
    2. Use npm to run the development

    ```bash
        cd frontend
        npm run dev

    ```

---

# How to run Backend

    1. Make sure you are in the base directory for the backend ("backend")
    2. Set up the virtual environment (venv)
    3. Use 'pip install requirements.txt' to install required dependencies

    ```bash
        cd backend
        python3 -m venv venv
        source venv/bin/activate
        pip install -r requirements.txt

    ```

---



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
