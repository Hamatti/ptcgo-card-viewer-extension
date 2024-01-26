build:
	zip -r dist/pokemon-tcg-extension.xpi ./* -x makefile .gitignore tests/\* dist/\* docs/\*

test:
	cd tests/ && npm install && npm test

test-visual:
	cd tests/ && npm install && node_modules/.bin/http-server -p 9000 & npx web-ext run --bc --start-url localhost:9000 & wait
