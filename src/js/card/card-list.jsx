import React from 'react';
import axios from 'axios';
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
    let self = this;
    axios.get('http://localhost:8000/servidor.php?dados=1').then(function(response){
        self.setState({
          data : response.data,
          server: response.data
        });
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