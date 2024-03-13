import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import ProgressBars from "./components/ProgressBars";
import ScrollCards from "./components/ScrollCards";

export default function App() {
  return (
    <>
      <Navigation />
      <Header />
      {/* <ProgressBars /> */}
      <ScrollCards />
      <Footer />
    </>
  );
}
