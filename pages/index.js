import Layout from "../components/Layout";
import Link from "next/link";
export default () => (
  <div>
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  </div>
);
