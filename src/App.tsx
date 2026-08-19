import { BrowserRouter,Routes,Route } from "react-router"
import Layout from "./components/RootLayout"

function App() {
 return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
