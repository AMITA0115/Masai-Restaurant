// Write code related to Favourites page here
let tbody=document.querySelector("tbody") ;
let inData=JSON.parse(localStorage.getItem("fav-menu")) ;

display(inData);

function display(data){
    tbody.innerHTML="" ;
    data.forEach((el,i)=>{
        let tr= document.createElement("tr") ;

        let td1=document.createElement("td");
         td1.innerText=el.Name;
         
         let td2=document.createElement("td");
         td2.innerText=el.Desc;

         let td3=document.createElement("td");
         td3.innerText=el.Type;

         let td4=document.createElement("td");
         td4.innerText=el.Category;

         let td5=document.createElement("td");
         td5.innerText=el.Price;

         let td6=document.createElement("td");
         td6.innerHTML="<button>Delete</button>";

         td6.addEventListener("click",()=>{
            inData=inData.filter((e,i)=>{
                if(ind==i){
                    return false ;
                } else {
                    return true ;
                }
            })
            
            localStorage.setItem("fav-menu",JSON.stringify(inData)) ;

         })
         tr.append(td1,td2,td3,td4,td5,td6) ;
          tbody.append(tr)

    })
}