import React from 'react';

import Card from './card';

class CardList extends React.Component {
  render(){
    let noticias = [
      {titulo: 'Título 1', descricao: 'Descrição 1', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
      {titulo: 'Título 2', descricao: 'Descrição 2', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
      {titulo: 'Título 3', descricao: 'Descrição 3', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
      {titulo: 'Título 4', descricao: 'Descrição 4', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
      {titulo: 'Título 5', descricao: 'Descrição 5', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
      {titulo: 'Título 6', descricao: 'Descrição 6', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'},
      {titulo: 'Título 7', descricao: 'Descrição 7', detalhe: 'Detalhe', imagem: 'http://materializecss.com/images/office.jpg', link: '#teste'}
    ];
    let aux =[];
    let novaLista = [];
    for(let k=0; k<noticias.length;k++){
      aux.push(noticias[k]);
      if(aux.length == 3){
        novaLista.push(aux);
        aux = [];
      }else if(k == noticias.length - 1){
        novaLista.push(aux);
      }
    }

    let tamanhoCol = "col m" + "4";

    let listaCartoes = function(group){
      return group.map(function(item,index){
        return (
          <div key={index} className={tamanhoCol}>
            <Card dados={item} />
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

    console.log(novaLista);

    return (
      <div>
        {linha}
      </div>
    );
  }
}

export default CardList;