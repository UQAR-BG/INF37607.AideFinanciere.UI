## COMMANDS

```
# Build Docker image by itself:
```

docker image build -t aide-financiere-webapp --file ./ci/Dockerfile .

```
# Run the App container by itself:
```

docker container run -d -p 3000:3000 aide-financiere-webapp:latest

```
# Build the App using Docker-compose:
```

cd ./ci/
docker-compose build

```
# Start the App using Docker-compose:
```

cd ./ci/
docker-compose up

```
# Build and start the App using Docker-compose:
```

cd ./ci/
docker-compose up --build

# Starting the App with Docker-compose creates a production version on

# http://0.0.0.0:3000

# and a development version on

# http://0.0.0.0:3001

# While working with the dev version, any change in the src/ folder is reflected in the App.

cd ./ci/
docker-compose up --build

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
