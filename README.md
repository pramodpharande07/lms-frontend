# lms-frontend

## Project setup

1. GO to cmd 
```
   cd lms-frontend
```

2. Install dependencies
```
   -npm i
   -npm run dev

```

## Setup installation for tailwind

1. Tailwind official doc about installation
```
   [https://tailwindcss.com/docs/installation]
```


2. Run following commands
  ```
   1. npm install -D tailwindcss
   2. npx tailwindcss init
  ```
3. Add file instructions to tailwind config file in contents property
   ```
   ["./src/**/*.{html,js,jsx,ts,tsx}"]
   ```

4. Add following tailwind directives to index.css
 ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

## Adding Plugins and Dependencies

1. Install following dependencies
```
  npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

## Configure auto import sort esline

1. Install simple import sore

```
   npm i eslint-plugin-import
```

2. Add rule in `.eslint.cjs`

```
  'simple-import-sort/imports': 'error'
```

3. Add simple-import sort plugin in `.eslint.cjs`

```
   plugins:[..., 'simple-import-sort']
```

4. To enable auto import sort on file save in vs code 

   - Open `setting.json`
   - add the following config
```
   "editor.codeActionOnSave": {
      "source.fixAll.eslint": true
   }
```
