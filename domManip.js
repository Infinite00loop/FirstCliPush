console.dir(document);

document.title='Test';
console.log(document.all)
// document.head.innerHTML='<h1>I am testing</h1>'
//console.log(document.getElementById('header-title'))
var title=document.getElementById('header-title');
// console.log(title);
// title.innerText='Testing';
// console.log(title)
title.innerHTML='<h2>MY HEADING</h2>'
var mainTitle=document.getElementById('main-header');
mainTitle.style.borderBottom='solid 3px #000'

var addItem=document.getElementById('add');
addItem.style.fontWeight='bold';
addItem.style.color='green';