build:
	zip -r dist/pokemon-tcg-extension.xpi ./* -x makefile .gitignore tests/\* dist/\* docs/\*

test:
	cd tests/ && npm install && npm test