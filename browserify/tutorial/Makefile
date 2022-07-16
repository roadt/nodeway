


bundle.js : prereq main.js
	browserify main.js -o bundle.js


prereq : node_modules/uniq

node_modules/uniq:
	npm install uniq

debug : prereq main.js
	browserify --debug main.js  -o bundle.js
