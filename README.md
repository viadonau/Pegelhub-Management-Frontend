# Pegelhub Management Frontend

This project contains the Management Angular application for the Pegelhub System.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Component tests

Run `ng test:comp` to execute the component tests via [Cypress](https://docs.cypress.io).

## Linting

Ensure a certain code quality and enforces best-practice rulesets.
The configuration containing all the rulesets can be found in `.prettierrc.json`

Can be executed with the command `npm run lint` which shows all issues related to linting.

If you want to automatically fix the available errors then run the command `npm run lint:fix`

### WebStorm Settings

The following steps are necessary in order to enable the correct linting settings:

1. Navigate to `Settings > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint`
2. Either choose `Automatic ESLint configuration` or select the suggested package underneath `Manual ESLint configuration`

## Prettier

Formats the code with regard to the specified criteria in `.prettierrc.json`

### WebStorm Settings

1. Navigate to `Settings > Languages & Frameworks > JavaScript > Prettier`
2. Choose `Automatic Prettier configuration`
3. In the list of `Run for files`, add `html` and `scss`
4. Additionally, you can check `Run on save` to apply prettier after every code change you perform

## Structure

```
├── .husky
│   ├── pre-commit --> holds commands executed before a git commit
├── node_modules
├── cypress
│   ├── fixtures --> json-files containing mock-data for tests
│   ├── support --> contains files for custom cypress commands or e2e/comp settings
├── src
│   ├── app
│   │   ├── core --> root providers, interceptors, guards and so on with a one-time usage
│   │   ├── routes --> represents all application paths
│   │   ├── shared --> things not related to a specific feature
│   ├── app.component (html | scss | ts)
│   ├── app.config --> contains the app config with all necessary providers
│   ├── app.routes --> contains the mappings of all application paths
│   ├── assets --> can contain icons, fonts, images, internationalization
│   ├── environments --> dev and prod environments
│   ├── favicon --> icon that is displayed in the browser
│   ├── index.html --> root html which can include links for various fonts
│   ├── main.ts --> bootstraps the application
│   ├── styles.scss --> main styling file, includes Angular Material styling as well
├── package.json
└── package-lock.json
```
