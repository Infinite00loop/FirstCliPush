// // console.dir(document);

// // document.title='Test';
// // console.log(document.all)
// // document.head.innerHTML='<h1>I am testing</h1>'
// //console.log(document.getElementById('header-title'))
// var title=document.getElementById('header-title');
// // console.log(title);
// // title.innerText='Testing';
// // console.log(title)
// // title.innerHTML='<h2>MY HEADING</h2>'
// // var mainTitle=document.getElementById('main-header');
// // mainTitle.style.borderBottom='solid 3px #000'

// // var addItem=document.getElementById('add');
// // addItem.style.fontWeight='bold';
// // addItem.style.color='green';

// // var list=document.getElementsByClassName('list-group-item');
// // console.log(list);
// // list[2].style.backgroundColor='green';

// // for(var i=0;i<list.length;i++){
// //     list[i].style.fontWeight='bold';
// // }

// //using class name
// // var list=document.getElementsByClassName('list-group');
// // console.log(list.items.children);
// // list.items.children[4].style.fontWeight='bold';

// // //using tag name

// // var list2=document.getElementsByTagName('li');
// // list2[4].style.fontWeight='bold';

// // var item2=document.querySelector('.list-group-item:nth-child(2)');
// // item2.style.color='green'
// // var item3=document.querySelector('.list-group-item:nth-child(3)');
// // item3.style.display='none';

// // var item=document.querySelectorAll('.list-group-item')
// // item[1].style.color='green';

// // var odd=document.querySelectorAll('li:nth-child(odd)');

// // for(var i=0;i<odd.length;i++){
// //     odd[i].style.backgroundColor='green';
// // }

// var itemList=document.querySelector('#items');
// //console.log(itemList.parentElement.parentElement.parentElement);
// //console.log(itemList.childNodes)
// //console.log(itemList.children)
// //console.log(itemList.firstElementChild)
// //console.log(itemList.lastElementChild)

// var newDiv=document.createElement('div');
// newDiv.className='hello'
// newDiv.id='hello1'
// newDiv.setAttribute("title", "Hello World");
// var newDivText=document.createTextNode('I am new text node')
// newDiv.appendChild(newDivText);
// console.log(newDiv)

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1')

// container.insertBefore(newDiv,h1);

// var itemList=document.querySelector('#items');
// var li=itemList.children[0];
// itemList.insertBefore(newDiv,li)

// var odd=document.querySelectorAll('li:nth-child(odd)');
// odd.style.fontWeight='bold'

var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();
    console.log(1);
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    
    var editBtn=document.createElement('button');
    editBtn.className='btn-sm float-right delete';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn)

    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure!')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}