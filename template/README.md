# {Title}

{Description}

## Requirements

| Package                       | Version |
| ----------------------------- | ------- |
| [Node](https://nodejs.org/en) | >= 20   |
| [NPM](https://www.npmjs.com/) | >= 10   |

## Getting started

1. Install dependencies:

```sh
npm install
```

2. Configure local environment (optional):
   - Create a `.env` file at the root of the project directory.
   - Add the following configuration:

```
PORT=<port-number>
```

If no valid `PORT` is specified, a default one will be assigned.

3. Compile and run locally:

```sh
npm run dev
```

## Build for production

1. Build the application:

```sh
npm run build
```

2. Preview build:

```sh
npm run preview
```

## Additional commands

### Code formatting ([Prettier](https://prettier.io/))

```sh
npm run format
```

For formatting rules, see [.editorconfig](.editorconfig) and [prettier.config.js](prettier.config.js).

### Linting ([ESLint](https://eslint.org/))

Linting is configured to support [TypeScript](https://typescript-eslint.io/) and [Vue files](https://eslint.vuejs.org/).
Together with the recommended [IDE setup](#recommended-ide-setup), you should get linting errors directly in your editor.

Alternatively, you can run the linter from the command line:

```sh
npm run lint
```

Note that the linter is configured to also [report Prettier issues](https://github.com/prettier/eslint-plugin-prettier).

For linting configuration, see [eslint.config.js](eslint.config.js).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [extensions](.vscode/extensions.json)
