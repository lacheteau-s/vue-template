# {Title}

{Description}

## Requirements

| Package | Version |
| ------- | ------- |
| [Node]  | >= 20   |
| [NPM]   | >= 10   |

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

### Code formatting ([Prettier])

```sh
npm run format
```

For formatting rules, see [.editorconfig] and [prettier.config.js].

## Recommended IDE Setup

[VSCode] + [extensions]

[Node]: https://nodejs.org/en
[NPM]: https://www.npmjs.com/
[Prettier]: https://prettier.io/
[.editorconfig]: .editorconfig
[prettier.config.js]: prettier.config.js
[VSCode]: https://code.visualstudio.com/
[extensions]: .vscode/extensions.json
