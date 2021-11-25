import './Details.css'
import { products} from '../../data/data'

import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Icon } from "semantic-ui-react"

import { Card } from '../../components/Card/Card'
import { DetailsList } from '../../components/DetailsList/DetailsList' 

export const Details = (props) => {

    const {id} = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        const p = products.find((product) => product.id === +id) 
        setProduct(p)
    }, [id])

    console.log(product.img)

    return (
        <div className='details--main'>
            <h1 className='details--title'>  
                <Link to="/">
                    <Icon 
                        name='angle left'
                    />
                </Link>
                {product.name}
            </h1>
            <aside className='details--aside'>
                <div className='details--img'>
                    <img src={product.img} alt="product" />
                </div>
                <div className='details--description'>
                    <Card 
                        state={product.state}
                        value={product.price}
                        pay={product.pay}
                    />
                    <h1>Descrição</h1>
                    <p>{product.description}</p>
                    <h1>Detalhes do Produto</h1>
                    <DetailsList 
                        category={product.category}
                        colection={product.colection}
                        material={product.material}
                        maker={product.maker}
                        scale={product.scale}
                        weight={product.weight}
                    />
                </div>
            </aside>
        </div>
    )
}
