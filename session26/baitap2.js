let test1=["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
let test2=[];
let test3="khong";
let test4=["khong"];
function bai3(arr) {
    if(Array.isArray(arr)){
        if(arr.length===0){
            console.log("Mang rong");
        } else {
            let result=arr.filter((item)=>{
                return item.includes("@")&& !item.includes(" ");
            })
            if(result>0){
                console.log(result);
                
            } else {
                console.log("Mang khong co gia tri hop le");
            }
        } 
    } else {
        console.log("du lieu khong hop le");
    }
}
bai3(test1);
bai3(test2);
bai3(test3);
bai3(test4);