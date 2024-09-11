import React from "react";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Statistics from "./Components/Statistics";
import ValuesSection from "./Components/ValuesSection";
import ProductsSection from "./Components/ProductsSection";
import TopCategoriesSection from "./Components/TopCategoriesSection";
import Testimonials from "./Components/Testimonials";
import UpdatesSection from "./Components/UpdatesSection";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <Statistics />
      <ValuesSection />
      <ProductsSection />
      <TopCategoriesSection />
      <Testimonials />
      <UpdatesSection />
      <Footer />
    </div>
  );
};

export default App;
