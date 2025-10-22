import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN_HERE", // Replace with your actual DSN from Sentry dashboard
  tracesSampleRate: 1.0, // Adjust this for performance monitoring
});
