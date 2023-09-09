import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import PetProfile from "./components/petProfile";
import Login from "./pages/login";
import SignUp from "./pages/signup";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/pet-profile/:id" element={  <PetProfile /> } />
        <Route path="*" element={  <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}
