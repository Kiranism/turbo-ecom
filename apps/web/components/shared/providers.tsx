"use client";
import React from "react";
// import ThemeProvider from './ThemeToggle/theme-provider'
// import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <ThemeProvider attribute='class' defaultTheme='light' enableSystem> */}
      <QueryClientProvider client={queryClient}>
        {/* <SessionProvider session={session}> */}

        {children}

        {/* </SessionProvider> */}
      </QueryClientProvider>
      {/* </ThemeProvider> */}
    </>
  );
}
