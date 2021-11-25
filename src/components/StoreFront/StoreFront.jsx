import "./StoreFront.css"

import { Link } from 'react-router-dom'

export const StoreFront = (props) => {

    let colorStyle;

    switch(props.status) {
        case 'Promoção' : 
            colorStyle = "#04aac0"
        break;
        case 'Liquidação' :
            colorStyle = "#e9900a"
        break;
        case 'BlackFriday' :
            colorStyle = "#000000"
        break;
        case 'Novidades' :
            colorStyle = "#19bb62"
        break;
        default:
            colorStyle = "#d31313"
    }

    return (
        <div className='storeFront--container'>
            <h1>{props.text}</h1>

            <section className='storeFront--section'>
                {props.data.map((value, key) => (
                    <Link to={{
                        pathname: `/details/${value.id}/`
                    }}>
                        <div className='storeFront--products' key={key}>
                            <img src={value.img} alt="" />
                            <div className='info'>
                                <span className='storeFront--name'>{value.name}</span>
                                <span className='storeFront--price'>R$: {value.price}</span>
                                <span className='storeFront--payment'>Em até {value.pay}x</span>
                            </div>
                            <div className='storeFront--status' style={{backgroundColor: colorStyle}}>
                                <span>{props.status}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    )
}
