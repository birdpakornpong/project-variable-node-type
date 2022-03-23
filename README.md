# node-typescript-setup

### node.js package.json
```
    npm init -y
```

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
