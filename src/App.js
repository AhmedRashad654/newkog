import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Protected from "./componant/ProtectedUser.jsx";
import ProtectedAdmin from "./componant/ProtectedAdmin.jsx";
import { ContextProvider } from "./context/Context";
import SpinnerFull from "./componant/SpinnerFull.jsx";
import CustomCursor from "./componant/CustomCursor.jsx";
import AddNewsLetter from "./pages/Dashboard/AddNewsLetter.jsx";
const NewsLetter  =lazy(()=>import('./pages/Dashboard/NewsLetter.jsx'))
const HowWeAre = lazy( () => import( './componant/HowWeAre.jsx' ) );
const Contant = lazy(() => import("./componant/Contant.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const OurBussiness = lazy(()=>import('./componant/OurBussiness.jsx'))
const Register = lazy(() => import("././componant/Register"));
const Login = lazy(() => import("./componant/Login.jsx"));
const Footer = lazy(() => import("./componant/Footer.jsx"));
const Interview = lazy(() => import("./componant/Interview.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard.jsx"));
const DashUser = lazy(() => import("./pages/Dashboard/DashUser.jsx"));
const UserAdd = lazy(() => import("./pages/Dashboard/UserAdd.jsx"));
const ServicesDashboard = lazy(() =>
  import("./pages/Dashboard/ServicesDashboard.jsx")
);
const AddServices = lazy(() => import("./pages/Dashboard/AddServices.jsx"));
const JopsDash = lazy(() => import("./pages/Dashboard/JopsDash.jsx"));
const JopsAdd = lazy(() => import("./pages/Dashboard/JopsAdd.jsx"));
const AddQuestions = lazy(() => import("./pages/Dashboard/AddQuestions.jsx"));
const DetailsJap = lazy(() => import("./pages/Dashboard/DetailsJap.jsx"));
const ResponseUser = lazy(() => import("./pages/Dashboard/ResponseUser.jsx"));
const ChangePassword = lazy(() => import("./componant/ChangePassword.jsx"));
const ContactDash = lazy(() => import("./pages/Dashboard/ContactDash.jsx"));
const AddContact = lazy(() => import("./pages/Dashboard/AddContact.jsx"));
const AddPartner = lazy(() => import("./pages/Dashboard/AddPartner.jsx"));
const PartnerDash = lazy( () => import( "./pages/Dashboard/PartnerDash.jsx" ) );

const Advertisements = lazy(() =>
  import("./pages/Dashboard/Advertisements.jsx")
);
const AddAdvertisements = lazy(() =>
  import("./pages/Dashboard/AddAdvertisements.jsx")
);
const DisplayQuestionAdmin = lazy(() =>
  import("./pages/Dashboard/DisplayQuestionAdmin.jsx")
);
const AddChoice = lazy(() => import("./pages/Dashboard/AddChoice.jsx"));
export default function App() {
  return (
    <ContextProvider>
      <CustomCursor />
      <BrowserRouter>
        <Suspense fallback={<SpinnerFull />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="contact" element={<Contant />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="changepassword" element={<ChangePassword />} />
            <Route path="footer" element={<Footer />} />
            <Route path="howweare" element={<HowWeAre />} />
            <Route path="ourbusiness" element={<OurBussiness />} />
            <Route
              path="interview"
              element={
                <Protected>
                  <Interview />
                </Protected>
              }
            />
            <Route element={<ProtectedAdmin />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="user" index element={<DashUser />} />
              <Route path="adduser" element={<UserAdd />} />
              <Route path="servies" element={<ServicesDashboard />} />
              <Route path="addservices" element={<AddServices />} />
              <Route path="contactDash" element={<ContactDash />} />
              <Route path="addcontact" element={<AddContact />} />
              <Route path="partner" element={<PartnerDash />} />
              <Route path="addpartner" element={<AddPartner />} />
              <Route path="jops" element={<JopsDash />} />
              <Route path="addjops" element={<JopsAdd />} />
              <Route path="jops/addquetions" element={<AddQuestions />} />
              <Route path="jops/detailsjop" element={<DetailsJap />} />
              <Route
                path="jops/displayquestionform"
                element={<DisplayQuestionAdmin />}
              />
              <Route path="advertisements" element={<Advertisements />} />
              <Route path="addadvertisements" element={<AddAdvertisements />} />
              <Route
                path="jops/displayquestionform/addchoice"
                element={<AddChoice />}
              />
              <Route path="jops/responseuser" element={<ResponseUser />} />
              <Route path="newsletter" element={<NewsLetter />} />
              <Route path="addnewsletter" element={<AddNewsLetter/> } />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ContextProvider>
  );
}
