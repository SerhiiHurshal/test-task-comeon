# Next.js + TypeScript + Tailwind starter

## Description

This is Next.js project starter with preconfigured typescript, tailwind([JIT](https://tailwindcss.com/docs/just-in-time-mode)), kebab-case to camelcase css classes converter, eslint, erettier and husky.

## Installation

```bash
npx create-next-app -e https://github.com/SerhiiHurshal/next-starter/tree/<branch-name>

cd <project-name>

code .

npm i
# or
yarn
```

## Usage

```bash
# for development
npm run dev

# for build
npm run build

# for production
npm run start

# for lint
npm run lint

# for format project by prettier
npm run format
```

## Advanced

- For analyze bundle size, duplicated packages and perfomance add .env.local file with:

```env
mode=perfomance
```

- If you have issues with node or global packages version try to install [Volta](https://volta.sh/). It will automatically install proper packeges versions on fly!

## Links

- [Next.js](https://nextjs.org/docs) - documentation

- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - documentation

- [Tailwindcss](https://tailwindcss.com/docs) - documentation

- [ESlint](https://eslint.org/docs/user-guide/configuring/) - configuration
- [TSConfig](https://www.typescriptlang.org/tsconfig)- options
