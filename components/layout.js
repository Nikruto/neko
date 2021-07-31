import { signIn, signOut, useSession, providers } from "next-auth/client";
import { useRouter } from "next/router";
import Header from "./header";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  const router = useRouter();
  const [session, loading] = useSession();

  if (!loading && !session) router.push("/login");

  if (loading || !session) return <></>;
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 bg-[#eee]">{children}</div>
      </div>
    </div>
  );
}
