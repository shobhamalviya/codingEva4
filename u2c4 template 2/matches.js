// write js code here corresponding to matches.html
var matchArr= JSON.parse(localStorage.getItem("schedule"));
displayData(matchArr); 
var MsatchArr= JSON.parse(localStorage.getItem("favourites")) || [];
function handleVenueSort() {
    var selected =document.querySelector("#filterVenue").value;
    var filteredList =matchArr.filter(function(elem){
    return elem.Venue ==selected;
    });
     console.log(filteredList) ;
     displayData(filteredList) ;
    
} 

function displayData(data) {
    document.querySelector("tbody").innerHTML = "" ;

    data.forEach(function(elem){
        var tr =document.createElement("tr");

        var td1 =document.createElement("td");
        td1.innerText =elem.TeamA;

        var td1 =document.createElement("td");
        td2.innerText =elem.TeamB;

        var td3 =document.createElement("td");
        td3.innerText =elem.Date;

        var td4 =document.createElement("td");
        td4.innerText =elem.Venue;
        
        var td5=document.createElement("td");
        td5.innerText = "favourite";
        td5.style.color ="blue";
        td5.style.cursor ="pointer";
        td5.addEventListener("click" ,function(){
         favMatchfun(elem);
        });

        tr.append(td1,td2,td3,td4,td5);

        document.querySelector("tbody").append(tr);
    });
}
function favMatchfun(elem){
    console.log(elem);
    MsatchArr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(MsatchArr));
}