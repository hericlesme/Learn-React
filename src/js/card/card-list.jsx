import React from 'react';

import Card from './card';

class CardList extends React.Component {
  render(){
    let noticias = [
      {title: 'Título 1', desc: 'Descrição 1', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
      {title: 'Título 2', desc: 'Descrição 2', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
      {title: 'Título 3', desc: 'Descrição 3', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
      {title: 'Título 4', desc: 'Descrição 4', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
      {title: 'Título 5', desc: 'Descrição 5', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
      {title: 'Título 6', desc: 'Descrição 6', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'},
      {title: 'Título 7', desc: 'Descrição 7', detail: 'Detail', img: 'http://materializecss.com/images/office.jpg', link: '#test'}
    ];
    let aux =[];
    let novaLista = [];
    for(let k=0; k<noticias.length;k++){
      aux.push(noticias[k]);
      if(aux.length == this.props.qntRow){
        novaLista.push(aux);
        aux = [];
      }else if(k == noticias.length - 1){
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

    let linha = novaLista.map(function(group,index){
      return (
        <div key={index} className="row">
          {listaCartoes(group)}
        </div>
      );
    });

    return (
      <div>
        {linha}
      </div>
    );
  }
}

export default CardList;