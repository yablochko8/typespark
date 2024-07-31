## How to use this tool

Run the command `npx typespark` in your parent folder for new projects. This script will create the project folder itself.

You will be prompted with the following questions/requests:

1. Give the new app a name:
2. Do you want to use Tailwind for styling? (Y/n)
3. Do you want to add an Express server? (Y/n)
4. [if Yes to Express server] Do you need a PostgreSQL database? (Y/n)

All responses are Yes by default.

## Troubleshooting

PM2 shows the most recent error logs when you fire it up. This can sometimes be confusing. Use `pm2 flush` to clear out this noise.

## Feature gaps / known issues

### High Priority

1. New project is stored in ~/typespark, should be present working directory
1. Needs better end-of-script commmunication: don't run them automatically, show them in echo messages. Add them to the project README.
1. For full-stack projects we need a shared folder at parent level (for types etc) by default
1. Add a better .env default and .env.example
1. Make README.md boilerplate better
1. I want to give the app a script that lets you fire up all created elements using pm2 at a later stage, and then use that in this script. Should make PM2 usage clearer as well.

### Low Priority

1. Add support for non-Mac.
1. Fix the test suite part of this script so it works again with the varied folder structure.
