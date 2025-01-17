import { useAppStore } from "@/components/app-provider";
import { usePathname, useRouter } from "@/i18n/routing";
import { handleErrorApi } from "@/lib/utils";
import { useLogoutMutation } from "@/queries/useAuth";
import React, { useEffect } from "react";

const UNAUTHENTICATED_PATH = ["/login", "/logout", "/refresh-token"];

const ListenLogoutSocket = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isPending, mutateAsync } = useLogoutMutation();
  const socket = useAppStore((state) => state.socket);
  const setRole = useAppStore((state) => state.setRole);
  const disconnectSocket = useAppStore((state) => state.disconnectSocket);

  useEffect(() => {
    if (UNAUTHENTICATED_PATH.includes(pathname)) return;
    async function onLogout() {
      // console.log(
      //   "🚀 ~ file: ListenLogoutSocket.tsx:15 ~ onLogout ~ onLogout: logout"
      // );
      if (isPending) return;
      try {
        await mutateAsync();
        setRole();
        disconnectSocket();
        router.push("/");
      } catch (error: any) {
        handleErrorApi({
          error,
        });
      }
    }

    socket?.on("logout", onLogout);

    return () => {
      socket?.off("logout", onLogout);
    };
  }, [
    socket,
    pathname,
    router,
    isPending,
    setRole,
    mutateAsync,
    disconnectSocket,
  ]);
  return <div></div>;
};

export default ListenLogoutSocket;
