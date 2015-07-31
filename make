VERSION="$(git rev-parse --short HEAD)"

cd js
cat bootstrap.js | uglifyjs > script-$VERSION.js
cd ..
