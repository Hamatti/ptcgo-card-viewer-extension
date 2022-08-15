# pokemon-tcg-ext

Hover over a Pokemon TCG card ID to see the card image – anywhere in the web

## Status

Currently still in pre-publish development so can't be installed yet.

## Develop

When developing, you can test it with

```
npx web-ext run
```

which opens up a Firefox instance with this extension loaded.

To debug it while running, open [about:debugging](about:debugging) into a new window, choose "This Firefox" from menu and "Inspect" under this extension.

### Running tests

Tests that live in `tests/` are for development only and won't be packaged into the extension.

```
make test
```

This will install [mocha](https://mochajs.org/) as a development dependency into `tests/` and run the tests.

### Building the extension

If you have [GNU Make](https://www.gnu.org/software/make/) and zip installed, you can run

```
make build
```

to build an extension. This command excludes `tests/`, `makefile` and `dist/` from the build.

Optionally, you can create a zip file manually. Exclude the files above to avoid sending extra files and artefacts that doesn't need to be inside the extension.
