import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />

      <div className="lg:w-container mx-auto">
        <main className="p-6 lg:px-0 lg:py-10">
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
