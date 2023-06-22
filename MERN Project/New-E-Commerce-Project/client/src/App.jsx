
import './App.css';

import { Header }  from "./components/Layout/Header";
import { Layout } from "./components/Layout/Layout";
import { Footer } from "./components/Layout/Footer";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { PolicyPage } from "./pages/PolicyPage";
import { PageNotFoundPage } from "./pages/PageNotFoundPage";
import { RegisterPage } from "./pages/Auth/RegisterPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Routes>

      {/* If there is nested route than we need to use opening and closing brackets for route
      Like : <Route></Route>
      But if there is no nested route than we can use route tag with self closing brackets 
      Like : <Route /> either we can use it with opening and closing brackets.
      */}

      <Route path="/" element={<><HomePage /></>} />
      <Route path="/about" element={<><AboutPage /></>} />
      <Route path="/contact" element={<><ContactPage /></>} />
      <Route path="/policy" element={<><PolicyPage /></>} />
      <Route path="/register" element={<><RegisterPage /></>} />
      {/* path="*" : * means is if there is any route which will not match with any route than 
      route show "*"(Default) route content means Page Not Found Page */}
      <Route path="*" element={<><PageNotFoundPage /></>} />

    </Routes>
  );
}

export default App;
