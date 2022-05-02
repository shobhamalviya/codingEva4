// write js code here corresponding to favourites.html
var MsatchArr= JSON.parse(localStorage.getItem("favourites"));
 displayData(MsatchArr) ;
 function displayData(data){
    data.forEach(function (elem ,index){
        var tr =document.createElement("tr");
  var matchNumber=document.createElement("td")
  td1.innerText=elem.matchNumber;
        var td2 =document.createElement("td");
        td2.innerText =elem.TeamA;

        var td1 =document.createElement("td");
        td2.innerText =elem.TeamB;

        var td3 =document.createElement("td");
        td3.innerText =elem.Date;

        var td4 =document.createElement("td");
        td4.innerText =elem.Venue;
        
        var td5=document.createElement("td");
        td5.innerText = "Delete";
        td5.setAttribute("class","deleteText")

        td5.addEventListener("click" ,function(){
         deleteItem(elem,index)
        });

        tr.append(td1,td2,td3,td4,td5);

        document.querySelector("tbody").append(tr);
    });
     
 }
 function deleteItem(elem,index){
     MsatchArr.splice(index,i);
     localStorage.setItem("favourites",JSON.stringify(MsatchArr));
     window.location.reload();

 }