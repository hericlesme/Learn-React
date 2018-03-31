<?php

$menu = [
  ['title'=>"Home",'link'=>"#home"],
  ['title'=>"About",'link'=>"#about"],
  ['title'=>"Contact",'link'=>"#contact"],
  ['title'=>"Map",'link'=>"#map"]
];

$dados = [
  ['title'=>"Notícia 1", 'desc'=>"Descrição do cartão 1", 'detail'=>"Texto de detalhe do cartão 1", 'img'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 2", 'desc'=>"Descrição do cartão 2", 'detail'=>"Texto de detalhe do cartão 2", 'img'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 3", 'desc'=>"Descrição do cartão 3", 'detail'=>"Texto de detalhe do cartão 3", 'img'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 4", 'desc'=>"Descrição do cartão 4", 'detail'=>"Texto de detalhe do cartão 4", 'img'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 1", 'desc'=>"Descrição do cartão 1", 'detail'=>"Texto de detalhe do cartão 1", 'img'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 2", 'desc'=>"Descrição do cartão 2", 'detail'=>"Texto de detalhe do cartão 2", 'img'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 3", 'desc'=>"Descrição do cartão 3", 'detail'=>"Texto de detalhe do cartão 3", 'img'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 4", 'desc'=>"Descrição do cartão 4", 'detail'=>"Texto de detalhe do cartão 4", 'img'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 1", 'desc'=>"Descrição do cartão 1", 'detail'=>"Texto de detalhe do cartão 1", 'img'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 2", 'desc'=>"Descrição do cartão 2", 'detail'=>"Texto de detalhe do cartão 2", 'img'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"],
  ['title'=>"Cartão 3", 'desc'=>"Descrição do cartão 3", 'detail'=>"Texto de detalhe do cartão 3", 'img'=>"http://materializecss.com/images/office.jpg", 'link'=>"#link"]
];


if(isset($_GET['menu'])){
    echo json_encode($menu);exit;
}
if(isset($_GET['dados'])){
    echo json_encode($dados);exit;
}