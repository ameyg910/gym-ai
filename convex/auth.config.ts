import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://tender-satyr-18.clerk.accounts.dev",
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;