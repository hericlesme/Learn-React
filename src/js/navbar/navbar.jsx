import React from 'react';
import NavMenu from './nav-menu';

class Navbar extends React.Component {
    render() {
        let menu = [
            {title:"Home", link:"#home"},
            {title:"About", link:"#about"},
            {title:"Contact", link:"#contact"}
        ];

        let navColor = "nav-wrapper " + this.props.color;

        return(
            <nav>
                <div className={navColor}>
                    <div className="container">
                        <a href="#" className="brand-logo">{this.props.title}</a>
                        <NavMenu menu={menu}/>
                    </div>
                </div>
            </nav>);
    }
}
export default Navbar;