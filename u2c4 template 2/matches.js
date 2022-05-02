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
        td1.innerText =elem.matchNumber

        var td2 =document.createElement("td");
        td2.innerText =elem.TeamA;

        var td3 =document.createElement("td");
        td3.innerText =elem.TeamB;

        var td4 =document.createElement("td");
        td4.innerText =elem.Date;

        var td5 =document.createElement("td");
        td5.innerText =elem.Venue;
        
        var td6=document.createElement("td");
        td6.innerText = " add as Favourites";
        td6.style.color ="blue";
        td6.style.cursor ="pointer";
        td6.addEventListener("click" ,function(){
         favMatchfun(elem);
        });

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
    });
}
function favMatchfun(elem){
    console.log(elem);
    MsatchArr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(MsatchArr));
}