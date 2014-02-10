VERSION="$(git rev-parse --short HEAD)"

cd css
cat bootstrap.css bootstrap-theme.css pygments-solarized.css custom.css | cleancss > style-$VERSION.css
cat cgit.css pygments-solarized.css | cleancss > style-cgit-$VERSION.css
cd ..

cd js
cat bootstrap.js | uglifyjs > script-$VERSION.js
cd ..
