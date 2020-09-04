setup instructions:  
```
yarn install
yarn start
```
some stuff to note:  
- use reactstrap wherever possible (check out the docs here https://reactstrap.github.io/components/alerts/)
- use bootstrap classes if reactstrap hasn't got what you're looking for
- if all else fails then write your own class in src/index.css
- I've predefined some colors as css variables in index.css, try to use them and add more variables as our color palette evolves
- there are also a few more utility classes I've added to index.css (ones for border radii, colors etc), all aiming to reduce the amount of work put in writing classes, so go through them

IMPORTANT:  
install Prettier (`yarn add --dev --exact prettier`) for consistent formatting
(run `yarn prettier write .` in the src/ directory before pushing)
you can also set up whatever editor you're using to format on save; use these settings:  
```
"printWidth": 100,
"tabWidth": 4,
"trailingComma": "es5",
"statusItemText": "P"
```
