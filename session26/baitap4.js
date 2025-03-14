let test1=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,13,14];
let test2=[];
let test3="abc";
function soNg(n) {
    if(n<=1){
        return false
    }    
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
        
    }
    return true
}
function test(arr) {
    if(!Array.isArray(arr)){
        console.log("Du lieu khong hop le");
        
        return
    }
    if(arr.length==0){
        console.log("Mang khong duoc de trong");
        return

    }
    let result=arr.filter((item)=>{
        return soNg(item);
    })
    console.log(result);
    
}
test(test1);
test(test2);
test(test3);
