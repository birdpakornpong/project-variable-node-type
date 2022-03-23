# node-typescript-setup

### node.js package.json
```
    npm init -y
```

### typescrpt 
    1.
```
    npm install --save-dev typescript
```
    2.
```
    nano tsconfig.json
```
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
```
    npm install --save express
```
```
    npm install -save-dev @types/express
```