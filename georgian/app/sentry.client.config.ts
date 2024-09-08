// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://239eb75b18a65d836b6caf7972c166b6@o218807.ingest.us.sentry.io/4507095192829952',

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 0,

    // Disable debug mode in production for cleaner logs
    debug: false,

    // Disable Sentry's replays to save resources
    replaysOnErrorSampleRate: 0.0, // No replays on error
    replaysSessionSampleRate: 0.0, // No session replays

    // If you're not using Sentry's session replay feature, you can remove the replay integration
    integrations: [],
  })
}
