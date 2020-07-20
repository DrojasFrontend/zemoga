# ZEMOGA . 😀

###  Folder structure:
```
|── bundled
|── dist/
|   |── css/
|   |   |-- bundle.css
|   |── images/
|   |── js/
|   |   |-- bundle.js
|── src/
|   |── images/
|   |── js/
|   |       |--- bundle.js // bundled with all imported files (minified in production)
|   |── scss/
|   |        |--- bundle.scss // bundled with all imported files (minified in production)
|   |── .babelrc
|   |── gulpfile.babel
|   |── package.json
|   |── README.md
```

# Using ES6 in the Gulpfile
gulpfile.js to gulpfile.babel.js

# DEV
```
$ npm run dev
```
# PROD
```
$ npm run build
```
# Packaging the folder in a ZIP file
```
$ npm run build
```
```
Folder
|── bundled
      |── name-folder.zip
```
# License
MIT

- Browser Support
- Chrome
- Firefox
- Safari 6.1+
- Internet Explorer 10+