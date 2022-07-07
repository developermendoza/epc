import { Routes, Route } from "react-router-dom";
import { Nav, Footer, Copyright } from "./components";
import ProductsPage from "./routes/products";
import HomePage from "./routes/home";
import CompanyPage from "./routes/company";
import ApplicationsPage from "./routes/applications";
import ResourcesPage from "./routes/resources";
import NewsPage from "./routes/news";
import ContactPage from "./routes/contact";
const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
