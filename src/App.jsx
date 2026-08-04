import { BrowserRouter, Route, Routes } from "react-router";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import FacilityServices from "./pages/FacilityServices";

import CleaningServices from "./pages/CleaningServices";
import SolarSolutions from "./pages/SolarSolutions";
import DeliveryServices from "./pages/DeliveryServices";
import PropertyCare from "./pages/PropertyCare";
import BusinessServices from "./pages/BusinessServices";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<FacilityServices />} />
          <Route path="/services/cleaning" element={<CleaningServices />} />
          <Route path="/services/solar" element={<SolarSolutions />} />
          <Route path="/services/delivery" element={<DeliveryServices />} />
          <Route path="/services/property-care" element={<PropertyCare />} />
          <Route path="/services/business" element={<BusinessServices />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;