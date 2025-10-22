import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN_HERE",
  tracesSampleRate: 1.0,
});
