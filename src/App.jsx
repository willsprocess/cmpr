import './App.css'
import Home  from "./pages/home";
import Locations  from "./pages/locations";
import About  from "./pages/about";
import Contact  from "./pages/contact";
import Details  from "./pages/details";
import Footer from './components/footer';
import RootLayout from './pages/rootLayout';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter (
    createRoutesFromElements (
      <Route path='/' element={<RootLayout />}>
        <Route index element={ <Home/> } />
        <Route path='/locations' element={ <Locations/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/contact' element={ <Contact/> } />
        <Route path='/details' element={ <Details/> } />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
