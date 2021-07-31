import "tailwindcss/tailwind.css";
import { Provider } from "next-auth/client";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </Provider>
  );
}

export default MyApp;
