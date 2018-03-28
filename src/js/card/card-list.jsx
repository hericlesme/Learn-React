import React from 'react';

import Card from './card';
import Search from '../search/search';

class CardList extends React.Component {
  constructor(props){
    super(props);
    this.state = {search: '', data: [], server: []};
    this.refreshSearch = this.refreshSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  refreshSearch(event){
    this.setState({search : event.target.value})
    if(event.target.value == ""){
      this.setState({data: this.state.server});
    }
  }

  onSubmit(event){
    let search = this.state.search;
    let data = this.state.server;
    let filteredList = data.filter(function(card){
      if(card.title.toUpperCase().indexOf(search.toUpperCase()) > -1
      || card.desc.toUpperCase().indexOf(search.toUpperCase()) > -1
      || card.detail.toUpperCase().indexOf(search.toUpperCase()) > -1){
        return card;
      }
    }
  );
    this.setState({data: filteredList});
    event.preventDefault();
  }

  componentDidMount(){
    this.setState({
      data: [
        {title: 'Title 1', desc: 'Descrição 1', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
        {title: 'Title 2', desc: 'Descrição 2', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
        {title: 'Title 3', desc: 'Descrição 3', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
        {title: 'Title 4', desc: 'Descrição 4', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
        {title: 'Title 5', desc: 'Descrição 5', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
        {title: 'Title 6', desc: 'Descrição 6', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
        {title: 'Title 7', desc: 'Descrição 7', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'}
      ],
      server: [
        {title: 'Title 1', desc: 'Descrição 1', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
        {title: 'Title 2', desc: 'Descrição 2', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
        {title: 'Title 3', desc: 'Descrição 3', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
        {title: 'Title 4', desc: 'Descrição 4', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
        {title: 'Title 5', desc: 'Descrição 5', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
        {title: 'Title 6', desc: 'Descrição 6', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
        {title: 'Title 7', desc: 'Descrição 7', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'}
      ]
    });
  } 
  
  render(){
    let news = this.state.data;

    let aux =[];
    let novaLista = [];
    for(let k=0; k<news.length;k++){
      aux.push(news[k]);
      if(aux.length == this.props.qntRow){
        novaLista.push(aux);
        aux = [];
      }else if(k == news.length - 1){
        novaLista.push(aux);
      }
    }

    let colLenght = "col m" + this.props.col;

    let listaCartoes = function(group){
      return group.map(function(item,index){
        return (
          <div key={index} className={colLenght}>
            <Card data={item} />
          </div>
        );
      });
    };

    let row = novaLista.map(function(group,index){
      return (
        <div key={index} className="row">
          {listaCartoes(group)}
        </div>
      );
    });

    return (
      <div>
        <div className="row">
          <Search refreshSearch={this.refreshSearch} onSubmit={this.onSubmit} search={this.state.search}/>
        </div>
        {row}
      </div>
    );
  }
}

export default CardList;