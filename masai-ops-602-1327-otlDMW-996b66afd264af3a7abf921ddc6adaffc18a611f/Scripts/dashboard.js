// Write code related to dashboard page here
let tbody=document.querySelector("tbody") ;
let inData=JSON.parse(localStorage.getItem("menu")) ;

let filter=document.getElementById("filter");

let fav_data=[] ;

display(inData);

filter.addEventListener("change",()=>{
    if(filter.value==""){
        display(inData)
    } else {
        let filtered=inData.filter((element,index)=>{
            if(filter.value== element.Type){
                return true;
            } else {
                return false
            }
        })
        display(filtered)
    }
})





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
         td6.innerHTML="<button>Add</button>";

         td6.addEventListener("click",()=>{
            inData=inData.filter((e,i)=>{
                if(ind==i){
                    return false ;
                } else {
                    return true ;
                }
            })
            fav_data.push(el);
            localStorage.setItem("fav-menu",JSON.stringify(fav_data)) ;

         })
         tr.append(td1,td2,td3,td4,td5,td6) ;
          tbody.append(tr)

    })
}