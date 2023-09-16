import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import PetProfile from "./components/petProfile";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import Store from "./context/store";
import UserProfile from "./pages/userProfile";

export default function Router() {
  const { loggedUser } = useContext(Store);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/pet-profile/:id" element={  <PetProfile /> } />
        <Route path="*" element={  <NotFound /> } />
        {
          loggedUser && <Route path="/user-profile" element={ <UserProfile /> } />
        }
      </Routes>
    </BrowserRouter>
  );
}
