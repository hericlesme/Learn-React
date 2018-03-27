import React from 'react';

class NavMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {activeMenu : 'Home'};
        this.changeActive = this.changeActive.bind(this);
    }

    changeActive(title, self){
        self.setState({activeMenu: title});
    }
    
    render(){
    
        let self = this;

        let list = this.props.menu.map(function(ref){
            return (
                <li key={ref.title} onClick={self.changeActive.bind(null, ref.title, self)} className={ self.state.activeMenu == ref.title ? 'active' : ''}><
                    a href={ref.link}>{ref.title}</a>
                </li>
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