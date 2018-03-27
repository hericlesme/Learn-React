import React from 'react';

class Card extends React.Component {
  render(){

    return (
      <div className="card sticky-action">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={this.props.data.img} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{this.props.data.title}<i className="material-icons right">more_vert</i></span>
          <p>{this.props.data.desc}</p>
        </div>
        <div className="card-action">
          <a href={this.props.data.link}>See More...</a>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{this.props.data.title}<i className="material-icons right">close</i></span>
          <p>{this.props.data.detail}</p>
        </div>
      </div>
    );
  }
}

export default Card;