var ul = document.querySelector('#list');
var li;


function additem()
{
   var input = document.querySelector('#input');
     var item = input.value;
     ul= document.querySelector('#list');
     var textnode = document.createTextNode(item);
     if(item === '')
     {
        return false;
        } else{
            li = document.createElement('li');
            var checkbox = document.createElement('input');
            checkbox.type='checkbox';
            checkbox.setAttribute('id','listItem');
            var lable = document.createElement('label');
            
            ul.appendChild(lable);
            li.appendChild(checkbox);
            lable.appendChild(textnode);
            li.appendChild(lable);
            ul.insertBefore(li,ul.childNodes[0]);
            setTimeout(() => {
               li.className = 'visual';   
            }, 300);
        }
   }

   function removeitem()
{
    console.log("Remove clicked");
    li=ul.children;
  console.log(li);
   for(let i=0;i< li.length;i++)
  {
     while(li[i]&& li[i].children[0].checked)
    ul.removeChild(li[i]);
   
  }
}

function fclear() {
  var clean = document.getElementById('list');
  clean.remove();
}








  



