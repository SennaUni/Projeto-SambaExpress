import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from "./components/Header/Header"
import { Home } from './views/Home/Home'
import { Details } from './views/Details/Details'

export const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/details/:id/" element={ <Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
