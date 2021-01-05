import Link from "next/link";
import routes from "../routes";

const Welcome = () => {
  return (
    <div className="md:flex md:flex-row md:items-center">
      <p className="inline-flex items-center px-5 py-3 font-serif font-medium text-6xl text-gray-800 md:text-8xl border-b-8 border-glongas-green bg-white">
        Hola! <span className="ml-2 text-5xl md:text-6xl">👋</span>
      </p>

      <p className="mt-4 md:mt-0 md:ml-8 md:text-lg text-gray-700">
        I'm a Full Stack Developer and Web enthusiast based in Spain. You will
        find some of my{" "}
        <Link href={routes.PROJECTS}>
          <a className="border-b-2 border-glongas-green hover:border-gray-600">
            projects
          </a>
        </Link>
        , thoughts and discoveries in this page. You can also follow me{" "}
        <a
          href="https://twitter.com/glongas"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b-2 border-glongas-green hover:border-gray-600"
        >
          @glongas.
        </a>
      </p>
    </div>
  );
};

export default Welcome;
