import { BrowserRouter,Routes,Route } from "react-router"
import Layout from "./components/RootLayout"
import Home from "./components/Home"
import Certificates from "./components/Certificates"
import ScrollToTop from "./components/ScrollToTop"

function App() {
 return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/certificates" element={<Certificates/>}/>
    </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
