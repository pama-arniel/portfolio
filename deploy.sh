#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Linting..
yarn lint
echo Building. this may take a minute...
yarn build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'example.com' > CNAME

echo Deploying..
git init
git config user.email 'pamajosearniel@gmail.com'
git config user.name 'Arniel Pama'
git add -A
git commit -m 'Update portfolio experiences list'

# deploy
git push -f https://github.com/pama-arniel/portfolio.git master:gh-pages

cd -