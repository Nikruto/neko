import { signIn, signOut, useSession, providers } from "next-auth/client";

export default function Header() {
  const [session, loading] = useSession();

  return (
    <div className="h-10 px-2 bg-white flex items-center justify-end">
      <img className="w-8 h-8 rounded-full" src={session.user.image} />
    </div>
  );
}
