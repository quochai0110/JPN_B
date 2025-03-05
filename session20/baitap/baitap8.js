/* 
  Nhập số tự nhiên N in ra N số nguyên tố 
  input: 5 
  output:  2, 3, 5, 7, 11

  input: 7
  output: 2, 3, 5, 7, 11, 13, 17




*/
let count=0; // ban đầu chưa có số nguyên tố nào
let number= +prompt("mời bạn nhập số lượng số nguyên tố từ 1-N");
let num=1;
while (count<number) {

    // làm sao đi kiểm tra số nguyên tố
    let countPrime=0;

    for (let i = 1; i <= num; i++) {
        if(num%i==0){
            countPrime++;
        }
    }
    if(countPrime==2){
        console.log(`${num} là số nguyên tố`);
        count++;
        
    }
    num++;
    // khi duyệt vòng lặp for, sẽ không biết là điều kiện dừng là bao nhiêu 

    // kiểm tra xem nếu là số nguyên tố thì tăng count++
    
}
