import { signIn, signOut, useSession, providers } from "next-auth/client";
import { useRouter } from "next/router";
import Layout from "../../components/layout";

export default function Giveaway() {
  const router = useRouter();
  const [session, loading] = useSession();

  return <Layout>Giveaway</Layout>;
}
