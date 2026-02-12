/// <reference types="vite/client" />



// Esto le dice a TypeScript cómo interpretar los CSS Modules
declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

interface ImportMetaEnv {
    VITE_API_BASE: string;
    VITE_IS_FEATURE_A_ENABLED: string;
    VITE_USER: string;
}