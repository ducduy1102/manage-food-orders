"use client";

import RefreshToken from "@/components/refresh-token";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <RefreshToken />
      {/* <ReactQueryDevtools initialIsOpen=
      {false} /> */}
      {children}
    </QueryClientProvider>
  );
}
