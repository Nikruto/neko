import Head from "next/head";
import { signIn, signOut, useSession, providers } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
        {session && (
          <>
            <h1 className="text-3xl font-bold">Hg bro {session.user.name}</h1>
            <button
              className="bg-red-500 text-white mt-4 px-4 py-2 rounded"
              onClick={() => signOut()}
            >
              Çıkış yap
            </button>
          </>
        )}
        {!session && (
          <>
            <h1 className="text-3xl font-bold">Giriş yap bro</h1>
            <button
              className="bg-green-500 text-white mt-4 px-4 py-2 rounded"
              onClick={() => signIn("discord")}
            >
              Giriş yap
            </button>
          </>
        )}
      </main>
    </div>
  );
}
