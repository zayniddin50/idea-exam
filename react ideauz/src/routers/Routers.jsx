import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage";
import Korzinka from "../idea/Korzinka";
import Singup from "../idea/Singup";
import Aksiyapage from "../cotalog/Aksiyapage";
import Search from "../pages/Search";
import Atver from "../cotalog/Atver";
import Page from "../cotalog/page";
import Onac from "../cotalog/Onac";
import Maps from "../cotalog/Lacation";
import Products from "../pages/Products";
import Kontact from "../cotalog/Kontact";
import Stat from "../cotalog/Stat";
import SmartfonPage from "../pages/SmartfonPage";
import TexnikPage from "../pages/TexnikPage";
import TexnikDomPage from "../pages/TexnikDomPage";
import RecamenPage from "../pages/RecamenPage";
import Rassporka from "../cotalog/Rassporka";
import Вакансии from "../cotalog/Вакансии";
import AksiyaPageIdea from "../components/AksiyaPageIdea";
import Смартфоны from "../components/Смартфоны";
import Smartfonkatolog from "../pages/smartfonkatolog";
import Category from "../components/category";
import Categorypage from '../pages/Categorypage'
const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/smartfon/:id" element={<SmartfonPage />} />
        <Route path="/texnik/:id" element={<TexnikPage />} />
        <Route path="/texnikdom/:id" element={<TexnikDomPage />} />
        <Route path="/recamen/:id" element={<RecamenPage />} />
        <Route path="/Korzinka" element={<Korzinka />} />
        <Route path="/Singup" element={<Singup />} />
        <Route path="/Aksiyapage" element={<Aksiyapage />} />
        <Route path="/search/:key" element={<Search />} />
        <Route path="/Atver" element={<Atver />} />
        <Route path="/Page" element={<Page />} />
        <Route path="/Onac" element={<Onac />} />
        <Route path="/Maps" element={<Maps />} />
        <Route path="/Kontact" element={<Kontact />} />
        <Route path="/Stat" element={<Stat />} />
        <Route path="/Rassporka" element={<Rassporka />} />
        <Route path="/Вакансии" element={<Вакансии />} />
        <Route path="/Смартфоны" element={<Смартфоны />} />
        <Route path="/AksiyaPageIdea" element={<AksiyaPageIdea />} />
        <Route path="/smartfonkatolog/:id" element={<Smartfonkatolog />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Categorypage/:id" element={<Categorypage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
