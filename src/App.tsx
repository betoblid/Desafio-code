import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Erro } from "./Pages/Erro"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Erro />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
