import './DetailsList.css'

export const DetailsList = (props) => {

    const { category, colection, material, maker } = props

    return (
        <div className='detail--grid'>
            <div>
                <ul className='details--list'>
                    <li>
                        <span>Categoria: </span>{category ? category[0].toUpperCase() + category.substr(1) : ''}
                    </li>
                </ul>
            </div>
            <div>
                <ul className='details--list'>
                    <li>
                        <span>Coleção: </span>{colection ? colection[0].toUpperCase() + colection.substr(1) : ''}
                    </li>
                </ul>
            </div>
            <div>
                <ul className='details--list'>
                    <li>
                        <span>Material: </span>{material ? material[0].toUpperCase() + material.substr(1) : ''}
                    </li>
                </ul>
            </div>
            <div>
                <ul className='details--list'>
                    <li>
                        <span>Fabricante: </span>{maker ? maker[0].toUpperCase() + maker.substr(1) : ''}
                    </li>
                </ul>
            </div>
            <div>
                <ul className='details--list'>
                    <li>
                        <span>Medidas: </span>{props.scale}
                    </li>
                </ul>
            </div>
            <div>
                <ul className='details--list'>
                    <li>
                        <span>Peso: </span>{props.weight}
                    </li>
                </ul>
            </div>
        </div>
    )
}
