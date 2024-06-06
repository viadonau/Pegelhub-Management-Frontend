# Pegelhub Management Frontend

This project contains the Management Angular application for the Pegelhub project.

The Angular version that is in use is `18.0.0`

## Running the application locally

The application can either be started via npm scripts or with the help of Docker.

### NPM Scripts

#### Prerequisites
Make sure that the following software is installed on your system:
- Node.js: `https://nodejs.org` - 18.19.1 || ^20.11.1 || ^22.0.0

#### Setup

1. Run `ng serve` for a dev server
2. Navigate to `http://localhost:4202/`
3. The application will automatically reload if you change any of the source files

### Docker

#### Prerequisites
Make sure that the following software is installed on your system:
- Docker Desktop: `https://www.docker.com/get-started`

#### Setup

1. Change directory to root directory if not already there
2. Execute command `docker-compose up`
3. Wait for the command to finish
4. Navigate to `http://localhost:4202/`
5. The application will **NOT** automatically reload if you change any of the source files

## Deployment

To deploy the application on a web server, follow the instructions below.
The application is deployed and made available in a docker container called `pegelhub-management-frontend`

### Prerequisites
Make sure that the following software is installed on your system:
- Docker Compose: `https://docs.docker.com/compose/install/`

### Configure Environment
- In Angular, environments are used to define which configuration should be used for which environment.
- The following environment file is used for the deployment via Docker: `environment.prod.ts`

### Involved files
- Navigate to the root directory of your Angular app.
- Here we find the `docker-compose.yml` file and `Dockerfile` which are both needed for a functioning deployment.
- `docker-compose.yml` defines which containers are to be created
- `Dockerfile` defines a series of commands that initiate the build, copy the resulting source and finally start the container.

### Startup Procedure
1. Start the process with `docker-compose up` or stop it with `docker-compose down`
2. Execute command `docker-compose up`
3. Wait for the command to finish
4. To make sure the application is running correctly, execute `docker-compose ps`
5. The container `pegelhub-management-frontend` should have the status `running`
6. If the container is running successfully, the application is accessible under port `4202`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Component tests

Run `ng test:comp` to execute the component tests via [Cypress](https://docs.cypress.io).

## Running End-to-End tests

Run `ng test:e2e` to execute the component tests via [Cypress](https://docs.cypress.io).

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
