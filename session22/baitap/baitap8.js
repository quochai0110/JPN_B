let numbers=[1,3,3,2,2,3,2,4,3,6,5,9];
let maxCount=0; // để đếm số lần xuất hiện nhiều nhất
let minElement; // hiển thị phần tử bé nhất có số lần xuất hiện max
for (let i = 0; i < numbers.length; i++) {
        let count=0;
    for (let j = 0; j < numbers.length; j++) {
        
        if(numbers[i]==numbers[j]){
            count++;
        }
    }
    // kiểm tra count với maxCount
    if(count>maxCount){
        maxCount=count;//1
        minElement=numbers[i];// 3
    }else if(count==maxCount&& minElement>numbers[i]){
        minElement=numbers[i];
    }
}
console.log(`ket qua tim duoc: ${minElement}`);
