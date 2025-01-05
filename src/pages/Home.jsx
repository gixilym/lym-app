import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Main from "../components/Main";
// import PDFBtn from "../components/PDFBtn";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Main />
      <Services />
      <Contact />
      <AboutUs />
      <FAQ />
      {/* <PDFBtn /> */}
    </>
  );
}

export default Home;
