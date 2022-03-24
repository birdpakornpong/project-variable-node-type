# node-typescript-setup

### node.js package.json

    $ npm init -y

### typescrpt

    $ npm install --save-dev typescript
    $ nano tsconfig.json
    ภายใน tsconfig.json

```
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
```

### express

    $ npm install --save express
    $ npm install -save-dev @types/express

### eslint check systax

    $ npm install --save-dev eslint
    $ npx eslint --init

        * How would you like to use ESLint?: To check syntax and find problems
        * What type of modules does your project use?: JavaScript modules (import/export)
        * Which framework does your project use?: None of these
        * Does your project use TypeScript?: Yes
        * Where does your code run?: Node
        * What format do you want your config file to be in?: JavaScript

### prettier

    $ npm install --save-dev --save-exact prettier
    $ echo {}> .prettierrc.json
    $ nano .prettierignore

```
# Ignore artifacts:
dist
package.json
package-lock.json
node_modules
*.json
```

### husky

    $ npm install --save-dev husky lint-staged
    $ npx husky install
    $ npm set-script prepare "husky install"
    $ npx husky add .husky/pre-commit "npm run prettier:fix"

### webpack

    $ npm install --save-dev webpack webpack-cli webpack-dev-server

    webpack.config.js
    tsconfig.json

### swagger

    $ npm install --save swagger-ui-express  yamljs express
    swagger.yaml