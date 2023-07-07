// API--https://superheroapi.com/api/2071918619630152

// fetch html data by Id
const search=document.getElementById("search_bar");
const matches_list=document.getElementById("search_list");
const search_btn = document.getElementById("search_btn");
const fav_btn=document.getElementById("fav_btn");
  
// using marvel api
fetch(`https://akabab.github.io/superhero-api/api/all.json`
       
       
).then(response => {
  return response.json();
}).then((data)=>{
    return heroes.push(...data);
})

.catch((error) => {
  console.log(error);
});

const heroes=[];
let id;

// searchMatch function 
function SearchMatches(text,heroes){

    return heroes.filter(hero=>{
        const rexex = new RegExp(text,"gi");
        return hero.name.match(rexex);
    });
}

// searching in marvel api
search.addEventListener("input",()=>{


   const matches = SearchMatches(search.value,heroes);
   
   const html = matches.map(hero=>{
       return`<li class="matches" val="${hero.id}"> ${hero.name}</li>`;
       
   }).join("");
   if(search.value.length>0){
    matches_list.style.display="flex";
   matches_list.innerHTML=html;
   


   }else{
       matches_list.innerHTML="";
       matches_list.style.display="none";
       
   }
   
});

// fetching data 
matches_list.addEventListener("click",(e)=>{
    console.log("clicked");
    const item = e.target;
    id=item.getAttribute("val");
    matches_list.style.display="none";
   
    const search_item=item.innerHTML;
    
    search.value=`${search_item}`;
    

})

// when we click the search button then fetch the data and open hero.html file
search_btn.addEventListener("click",()=>{
    
    
    console.log(search.value)
    console.log(id,"id");


   
    window.open(`./html/hero.html?id=${id}`,"_blank");
})


// when we click the favourite button then fetch the data and open favList.html file
fav_btn.addEventListener("click",()=>{
    window.open("./html/favlist.html","_blank");
})


 