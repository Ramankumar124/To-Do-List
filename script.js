let input=document.querySelector("#input-box");
let btn=document.querySelector('.add-btn');
let tasks=document.querySelector('#task-container');


btn.addEventListener('click',()=>{
    console.log("hellow");
    let data=input.value;
    if(data===""){
        alert("please write something");
    }
    else{
        console.log(input.value);
      let li=document.createElement('li');
      li.innerHTML=data;
      tasks.appendChild(li);
      let span=document.createElement("span");
      span.innerHTML="\u00d7";
      li.appendChild(span); 
    }
input.value="";
saveData();
});


tasks.addEventListener('click',(e)=>{
    console.log('tasks daba');
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
  }
});

function saveData(){
    localStorage.setItem("data",tasks.innerHTML);
}
function showTask(){
    tasks.innerHTML = localStorage.getItem("data");
}
showTask();