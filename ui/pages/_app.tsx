import "tailwindcss/tailwind.css";
import "../styles.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { RouteGuard } from "../services/auth-grad";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>
  );
}
export default MyApp;
