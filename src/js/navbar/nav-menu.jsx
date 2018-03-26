import React from 'react';

class NavMenu extends React.Component {
    render(){
        let list = this.props.menu.map(function(ref){
            return (
                <li key={ref.title} ><a href={ref.link}>{ref.title}</a></li>
            );
        });

        return(
        <ul id="nav-mobile" className="right">
            {list}
        </ul>
        );
    }
}

export default NavMenu;