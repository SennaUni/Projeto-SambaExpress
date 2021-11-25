import './Card.css'

export const Card = (props) => {

    let state

    if(props.state && props.state === "new"){
        state = "Novo"
    } else if(props.state && props.state === "used") {
        state = "Usado"
    }

    return (
        <div className='card'>
            <div className='card--header'>
                <span className='state'>Produto {state ? state : ''}</span>    
            </div>
            <div className='card--content'>
                <span className='card--value'>R$ {props.value ? props.value : ''}</span>            
                <span className='card--pay'>Em até {props.pay ? props.pay : ''}x</span>  
            </div>                  
        </div>
    )
}
