# pokemon-tcg-ext

Hover over a Pokemon TCG card ID to see the card image – anywhere in the web

## Install & Usage

<a href="https://addons.mozilla.org/en-US/firefox/addon/pokemon-tcg-card-viewer/"><img src="docs/get-the-addon-fx-apr-2020.svg" alt="Get the add-on from AMO" width="300" /></a>

Install it from the [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/pokemon-tcg-card-viewer/).

To use it on a website, click the extension icon.

## How it works?

By clicking the extension icon, the script searches for Pokemon TCG Online codes (for example: ASR 65) and adds a `<span>` wrapper around them. Once the user either hovers over the `span` or focuses on it with keyboard, an API call is made to [pokemontcg.io API](https://pokemontcg.io/) to get the image URL for that card. That is then injected into the DOM.

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

#### Visual & functional tests

In addition to automated tests above, there's a system for manual verification of base and special case cards.

```
make test-visual
```

This command will start a local http server in the `tests/` folder to localhost:9000 and open a new Firefox instance on that URL with the extension loaded.

You should then run the extension by clicking the icon and manually verify that all card codes were identified and the hover shows the correct card.

### Building the extension

If you have [GNU Make](https://www.gnu.org/software/make/) and zip installed, you can run

```
make build
```

to build an extension. This command excludes `tests/`, `makefile` and `dist/` from the build.

This creates an `.xpi` file in `dist/` folder.

Optionally, you can create a zip file manually. Exclude the files above to avoid sending extra files and artefacts that doesn't need to be inside the extension.
