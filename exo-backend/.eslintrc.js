module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "ignorePatterns": [
        ".eslintrc.js", 
        "assets/", 
        "scripts/", 
        "sass/", 
        "css/", 
        "init.sh",
        "jest.config.js",
        "babel.config.js"
    ],
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "commonjs"
    },
    "rules": {
        "quotes": ["warning", "double", {"avoidEscape": true}],
        "semi": ["error", "always"],
        "no-var": "error",
        "indent": ["error", 2],

    }

}
        
