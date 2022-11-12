import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="bg-white min-h-[85vh]">
        <main className="flex">
          <section
            aria-labelledby="primary-heading"
            className="leading-10 break-all flex h-full min-w-0 flex-1 flex-col text-gray-600 py-10 sm:px-40 px-5 max-h-full overflow-y-auto"
          >
            {children}
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
