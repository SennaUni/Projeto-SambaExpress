import { products } from '../../data/data'
import { useEffect, useState } from 'react'

import { StoreFront } from "../../components/StoreFront/StoreFront"

export const Home = () => {

    const [sale, setSale] = useState([])
    const [news, setNews] = useState([])

    useEffect(() => {
      setSale(products.filter((p) => p.status === "sale")) 
      setNews(products.filter((p) => p.status === "new"))
    }, [])

    return (
        <div>
            <StoreFront 
                data={sale}
                status="Promoção"
                text="Produtos em Promoção"
            />
            <StoreFront 
                data={news}
                status="Novidades"
                text="Últimas Novidades"
            />
        </div>
    )
}
