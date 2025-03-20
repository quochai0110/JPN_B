let count=0;
document.getElementsByClassName("onclick")[0].addEventListener("click",()=>{
    console.log("123");
    count++;
    document.getElementById("count").innerHTML="Số lần bấm:"+count;
})
