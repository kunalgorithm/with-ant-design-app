import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h2>This is the about page</h2>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);
