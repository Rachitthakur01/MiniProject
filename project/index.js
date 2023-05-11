const endDate="30 April 2023 10:00 PM"
document.getElementById("end-date").innerText=endDate;
const input=document.querySelectorAll("input")
function clock(){
    const end=new Date(endDate);
    const now=new Date()
    console.log(end);
    console.log(now);   
     const diff=(end-now)/1000;
     if(diff<0){
        return;
     }
     console.log(diff) 
     input[1].value=Math.floor(diff/3600/24);
     input[2].value=Math.floor((diff/3600)%24);
     input[3].value=Math.floor((diff/60)%60);
     input[4].value=Math.floor((diff)%60);

}
clock()
setInterval(() => {
    clock()
}, 1000);
/*
*/