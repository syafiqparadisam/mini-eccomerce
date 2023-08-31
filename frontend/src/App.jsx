import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import AuthUser from "./pages/AuthUser"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<AuthUser/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
