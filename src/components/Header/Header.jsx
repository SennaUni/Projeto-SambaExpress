import "./Header.css"

import { Icon, Input } from "semantic-ui-react"

export const Header = () => {
    return (
        <header className='header--main'>
            <div className="header--logo">
                <img src="images/logo.svg" alt="Logo Sambay Express"></img>
            </div>
            <div className="header--searchBar">
                <Input 
                    icon='search' 
                    iconPosition='left'
                    placeholder='Busque aqui seu produto'
                    className="searchBar"
                />
            </div>
            <div className="header--icons">
                <ul>
                    <li>
                        <a href="/">
                            <Icon 
                                name='bell'
                                inverted 
                                size='large'
                            />
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <Icon 
                                name='shopping cart'
                                inverted 
                                size='large'
                            />
                        </a>
                    </li>
                    <li>
                        <a href="/">
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
