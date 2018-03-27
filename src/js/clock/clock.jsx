import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {hour: new Date};
    }

    componentDidMount() {
        this.hourID = setInterval(()=> this.refreshSeconds(), 1000);
    }

    refreshSeconds() {
        this.setState({hour : new Date})
    }

    componentWillUnmount(){
        clearInterval(this.hourID);
    }

    render() {   
        return(
        <div className="row">
            <h1 className="col s3 offset-s9" >{this.state.hour.toLocaleTimeString()}</h1>
        </div>
        );
    }
}

export default Clock;