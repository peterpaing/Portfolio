import { BrowserRouter,Routes,Route } from "react-router"
import Layout from "./components/RootLayout"
import Home from "./components/Home"
import Certificates from "./components/Certificates"
import ScrollToTop from "./components/ScrollToTop"
import WrongPath from "./components/WrongPath"

function App() {
 return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/certificates" element={<Certificates/>}/>
    <Route path="*" element={<WrongPath/>}/>
    </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
