import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 font-ubuntu">
      <Background />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
