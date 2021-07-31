import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  const [session, loading] = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) signOut();
    router.push("/login");
  }, []);

  return <></>;
}
