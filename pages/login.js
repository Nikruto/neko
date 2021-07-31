import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";

export default function Login() {
  const [session, loading] = useSession();
  const router = useRouter();

  if (!loading && session) router.push("/app");

  if (loading || session) return <></>;
  return (
    <div className="h-screen flex">
      <div className="flex-[3] h-full">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1627719736178-dfadf8f370d9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=boris-baldinger-ZUJ6uPPnTGY-unsplash.jpg"
        />
      </div>
      <div className="flex-[3] md:flex-[2] flex flex-col items-center py-8">
        <h1 className="font-medium text-3xl">Giriş Yap</h1>
        <div className="mt-auto mb-auto">
          <div
            className="bg-[#9146ff] cursor-pointer text-white px-8 py-2 rounded"
            onClick={() => signIn("twitch")}
          >
            Twitch ile giriş yap
          </div>
        </div>
      </div>
    </div>
  );
}
