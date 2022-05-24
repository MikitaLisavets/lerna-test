/* eslint-disable func-names */
/* eslint-disable no-console */

/**
 * betty-components is exporting versions of betty-components and betty-themes
 * Since versions are bumped automaticaly on publish, this script should auto run in "version"
 * lifecycle method, which is "Run AFTER bumping the package version, but BEFORE commit."
 * https://docs.npmjs.com/misc/scripts#description
 */

const fs = require('fs');

const bettyComponentsVersion = process.env.npm_package_version;
const bettyThemesVersion =
  process.env.npm_package_devDependencies__kambisports_betty_themes.replace(
    '^',
    '',
  );

const versionsContent = `"use strict";module.exports={bettyComponentsVersion:"${bettyComponentsVersion}",bettyThemesVersion:"${bettyThemesVersion}"};`;
const versionsEsContent = `export default{bettyComponentsVersion:"${bettyComponentsVersion}",bettyThemesVersion:"${bettyThemesVersion}"};`;

console.log('betty-components version: ', bettyComponentsVersion);
console.log('betty-themes version: ', bettyThemesVersion);

// ES5 export
fs.writeFile(
  'dist/versions.js',
  versionsContent,
  // callback function that is called after writing file is done
  function (err) {
    if (err) throw err;
    // if no error
    console.log('Created dist/versions.js file successfully.');
  },
);

// ES6 export
fs.writeFile(
  'dist/versions.es.js',
  versionsEsContent,
  // callback function that is called after writing file is done
  function (err) {
    if (err) throw err;
    // if no error
    console.log('Created dist/versions.es.js file successfully.');
  },
);
