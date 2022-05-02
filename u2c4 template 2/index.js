// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",jobSubmit)
 var matchArr =JSON.parse(localStorage.getItem("schedule")) || [] ;

function jobSubmit(){
    event.preventDefault();

    var matchObj= {

     matchNumber:document.querySelector("#matchNum").value ,
        TeamA :document.querySelector("#teamA").value ,
        TeamB :document.querySelector("#teamB").value ,
         Date :document.querySelector("#date").value ,
        Venue  :document.querySelector("#venue").value ,
          
    };
    matchArr.push(matchObj);
    console.log(matchArr) ;
    localStorage.setItem("schedule" ,JSON.stringify(matchArr));
    window.location.href= "matches.html" ;
} 
