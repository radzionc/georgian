## How to update tickets?

1. Change the content of the ticket in the `data/sources/{ticket_category}.md` file
2. Set environment variables and run `yarn import {ticket_category}` from the `data` package
3. Set environment variables and run `yarn sync` from `tickets-translation` package
4. Set environment variables and run `. ./deploy.sh` from the `app` package

## How to update copy texts?

1. Update `app/copy/en.json` file
2. Set environment variables and run `yarn syncCopy` from the `app` package
