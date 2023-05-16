// Write code related to Home page here
let nme=document.getElementById("name");
let desc=document.getElementById("desc");
let type=document.getElementsById("type");
let category=document.getElementsById("category");     
let price=document.getElementsById("price");

let my_data=[];

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let obj={
        Name:nme.value,
        Desc:desc.value,
        Type:type.value,
        Category:category.value,
        Price:price.value,
    }
    my_data.push(obj);
    localStorage.setItem("menu",JSON.stringify(my_data)) ;
})