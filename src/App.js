import { sales } from './data/data'

import { useEffect, useState, useRef } from 'react'

import { StoreFront } from "./components/StoreFront/StoreFront"
import { Header } from "./components/Header/Header"

export const App = () => {

  const [sale, setSale] = useState([])

  useEffect(() => {
    setSale(sales) 
  }, [])

  console.log(sale)

  return (
    <div>
      <Header />
    </div>
  )
}
