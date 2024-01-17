module.exports = {
    parser: "@babel/eslint-parser", // Utiliser le parser Babel pour prendre en charge les fonctionnalités ES récentes
    parserOptions: {
      ecmaVersion: 2021, // Version ECMAScript que vous utilisez (ajustez en fonction de votre configuration)
      sourceType: "module", // Spécifier que vous utilisez des modules
      requireConfigFile: false
    },
    ignorePatterns: ["**/*.yaml", ".eslintr.cjs", "**/*node_modules"],
    env: {
      node: true, // Si votre application s'exécute dans un navigateur
      es2021: true, // Indiquer que vous utilisez des fonctionnalités ECMAScript 2021
    },
    extends: [
      "eslint:recommended", // Utiliser les règles recommandées par ESLint
    ],
    plugins: [
      "@babel", // Ajouter le plugin Babel
    ],
    rules: {
      // Vos règles personnalisées ici
      "quotes": ["warn", "double", {avoidEscape: true}],
      "semi": ["error", "always"],

    },
    overrides: [
       {
        files: ["**/*.cjs","*.spec.js", "**/*.js"],
        rules: {
          //  "no-unused-expression": "off",
          //  "no-unused-vars":"off"
            "no-irregular-whitespace":"off"
        }
    }]
   

   
  };
  
        
