import Link from "next/link";
import routes from "../routes";

const Header = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white">
      <div className="lg:w-container mx-auto p-6 lg:px-0 flex justify-between">
        <Link href={routes.HOME}>
          <a className="border-b-4 border-glongas-green hover:border-gray-600">
            <h1 className="pb-1 text-2xl font-semibold">Gabriel Longás</h1>
          </a>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href={routes.HOME}>
            <a className="font-medium hover:text-glongas-green">Home</a>
          </Link>

          <Link href={routes.BLOG}>
            <a className="font-medium hover:text-glongas-green">Blog</a>
          </Link>

          <Link href={routes.PROJECTS}>
            <a className="font-medium hover:text-glongas-green">Projects</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
