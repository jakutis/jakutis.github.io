cd css
cat bootstrap.css bootstrap-theme.css pygments-solarized.css custom.css | cleancss > style.css
cat cgit.css pygments-solarized.css | cleancss > style-cgit.css
cd ..

cd js
cat bootstrap.js | uglifyjs > script.js
cd ..
