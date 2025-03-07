let arr=[1,2,3,2,4,5,3,4,2,1];
for (let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr.splice(j,1);
            j--;
        }
    }
}
console.log(arr);

let temp;
for (let i=0;i<arr.length;i++){
    for(let i=0;i<arr.length;i++){
        for (let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
               temp=arr[j];
                arr[i]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
}
document.writeln(arr);