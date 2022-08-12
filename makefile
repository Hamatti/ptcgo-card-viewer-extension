build:
	zip -r dist/pokemon-tcg-extension.xpi ./* -x tests/\* makefile dist/\* .gitignore

test:
	cd tests/ && npm install && npm test