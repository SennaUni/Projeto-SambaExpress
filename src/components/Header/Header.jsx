import "./styles.css"
import logo from "../../images/logo.svg"

import { Icon, Input } from "semantic-ui-react"

export const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo Sambay Express"></img>
            </div>
            <div className="searchBar">
                <Input 
                    icon='search' 
                    iconPosition='left'
                    placeholder='Busque aqui seu produto'
                    className="searchBar"
                />
            </div>
            <div className="icons">
                <ul>
                    <li>
                        <a href="">
                            <Icon 
                                name='bell'
                                inverted 
                                size='large'
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Icon 
                                name='shopping cart'
                                inverted 
                                size='large'
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Icon 
                                name='user'
                                inverted 
                                size='large'
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}
