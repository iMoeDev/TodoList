// Selectors

const btn = document.querySelector(".add");
const todoLi = document.querySelector(".links");
const input = document.querySelector(".input");
const counter = document.querySelector(".counter");
counter.innerText=0;


// Events

btn.addEventListener('click', function(e){
    e.preventDefault();
    const NewDo = document.createElement("li");
    NewDo.classList.add("link");
    NewDo.innerText = input.value;

    if(!(input.value === "")){
    const Newd = document.createElement("button");
 //   const NewD = document.createElement("button");
    Newd.classList.add("delete");
   // NewD.classList.add("done");
    Newd.innerText = "Delete";
    //NewD.innerText = "Done";
    

    NewDo.appendChild(Newd);
    //NewDo.appendChild(NewD);
    todoLi.appendChild(NewDo);
    
    input.value="";
    
    Newd.addEventListener("click",d);
    //NewD.addEventListener("click",done);
    counter.innerText = todoLi.children.length;
    }

});







//Functions


function d(e){
  
   e.target.parentElement.remove();
   if(counter.innerText >0){
   counter.innerText -= 1 ;
   
   }


}