import Header from "./header";
import Footer from "./footer"

function Layout({children}) {
  return (
    <body className="antialiased bg-[--bg-color] text-white font-mono tracking-normal leading-normal flex flex-col min-h-screen selection:bg-sky-50 selection:text-black">
      <div className="flex flex-col flex-grow">
        <Header />

        <main className="mt-10 flex flex-col gap-3 px-5 pt-5 flex-grow">
          {children}
        </main>

        <Footer/>
      </div>
    </body>
  );
}


export default Layout;
