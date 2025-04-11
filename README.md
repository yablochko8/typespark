Typespark is designed to get your TypeScript project started as fast as possible with minimal questions.

Just run `npx typespark` when in your projects folder, that's all you need to remember.

You'll be prompted to provide a name and answer 3 yes/no questions. After the project is set up there is also an option of launching it. This will launch frontend, server, and a database navigator (prisma studio) all in one go, and provide a shared console for all three (though the frontend runtime logging will still only happen in browser).

Everything else is taken care of. All these annoying things you usually have to do when starting a new project:

- NPM installation of dependencies and types all done
- Tailwind v4 working out of the box
- With Server: your server and frontend will already be speaking to each other locally
- With Database: docker-compose.yml populated with starter info, prisma schema started with example objects, first migration completed,

## How to use this tool

Run the command `npx typespark` in your parent folder for new projects. This script will create the project folder itself.

You will be prompted with the following questions/requests:

1. Give the new app a name:
2. Do you want to use Tailwind for styling? (Y/n)
3. Do you want to add an Express server? (Y/n)
4. [if Yes to Express server] Do you need a PostgreSQL database? (Y/n)

All responses are Yes by default.

## Prerequisites

- Node.js and npm
- [PM2](https://pm2.keymetrics.io/) (optional, only used for the dev fireup command for projects that include an Express server)

If you don't have PM2 installed, you can install it globally using `npm install -g pm2`

PM2 lets you run multiple Node.js applications from a single Terminal window, with a combined view of all their console logs.

## Troubleshooting

If you don't have PM2 installed some conveniences won't work, i.e. the app won't autoload at the end, and the "fire up everything" script added to your README won't work.

PM2 shows the most recent error logs when you fire it up. This can sometimes be confusing. Use `pm2 flush` to clear out this noise.

## Changelog

- 0.3.0 (2025-01-28) - Switched to Tailwind version 4, using their first-party Vite plugin - ref: https://tailwindcss.com/blog/tailwindcss-v4#first-party-vite-plugin

## Feature gaps / known issues

### High Priority

1. Full-stack projects would benefit from a shared folder at parent level (for types etc) by default
1. Accommodate DB schema better in scripts. Namely: make sure docker is open, docker compose up, npx prisma migrate dev
1. Add a better .env default and .env.example
1. Make README.md boilerplate better
1. Make PM2 usage clearer and prompt install, or remove dependency.

### Low Priority

1. Add support for non-Mac (although it may be only the Tailwind sed command that breaks on non-Mac)
1. Fix the test suite part of this script so it works again with the varied folder structure.
