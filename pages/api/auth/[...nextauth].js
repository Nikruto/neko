import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Twitch({
      clientId: "7xh22v23v5m5sffxl5e9jhm0r8nm7s",
      clientSecret: "giilj31tihq69rf71usghqzhzjl2xl",
    }),
    // ...add more providers here
  ],
});
