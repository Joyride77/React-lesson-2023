import React from 'react'
import SubMenu from './SubMenu'
import { Navbar } from 'react-bootstrap';
import menus from '../data/menus'

const MainMenu = () => {

    const SubMenus = menus.map(subMenu => {
        return (
            <SubMenu title={subMenu.title} position={subMenu.position} children={subMenu.children} />
        )
    })

    return (
        <div>
            <Navbar bg="light" expand="lg">

                {SubMenus}

            </Navbar>
        </div>
    )
}

export default MainMenu