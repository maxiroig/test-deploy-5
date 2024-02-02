# RapidLaunch Nuxt Boilerplate

Look at the [Rapid Launch Documentation](https://rapidlaunch.it/docs) to learn more.

## Setup
Download the boilerplate:
```bash
git clone git@github.com:rapidlaunch-it/nuxt-boilerplate.git <project-name>
```

Change directory:
```bash
cd <project-name>
```
> 💡 You will need to create a create a personal access token on GitHub [Read More](https://docs.rapidlaunch.it/introduction/installation)


If you haven't logged in to the GitHub Registry, do so.
```bash
npm login --scope=@rapidlaunch-it --auth-type=legacy --registry=https://npm.pkg.github.com
```


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

Initialize the Prisma CLient:
```bash
pnpm prisma:init
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
