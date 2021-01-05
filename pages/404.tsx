import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import Layout from "../layouts/Layout";
import routes from "../routes";

export default function NotFound() {
  return (
    <Layout>
      <NextSeo
        title="404 - Gabriel Longás"
        canonical="https://glongas.com/404"
        openGraph={{
          url: "https://glongas.com/404",
          title: "404 - Gabriel Longás",
        }}
      />

      <div className="flex flex-col justify-center items-center">
        <h2 className="inline-block px-6 pt-0 pb-6 font-medium text-8xl text-gray-800 md:text-9xl border-b-8 border-glongas-green bg-white">
          404
        </h2>

        <div className="mt-6">
          <Image
            src="/static/images/404.gif"
            alt="404"
            width={498}
            height={282}
          />
        </div>

        <Link href={routes.HOME}>
          <a className="mt-8 text-xl font-medium border-b-4 border-glongas-green hover:border-gray-600">
            Return Home
          </a>
        </Link>
      </div>
    </Layout>
  );
}
