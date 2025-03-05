//  Viết chương trình yêu cầu người dùng nhập vào 5 số nguyên,
// tiến hành đếm số lượng số chẵn và số lượng số lẻ trong các số đã 
// nhập và in kết quả ra màn hình.

let even =0;
let odd =0;
for(let i = 1; i <6;i++){
    let num = Number(prompt(`nhap so thu ${i}`));
    if(num%2===0){
        even++;
    }else{
        odd++;
    }
}
document.write(`so luong cac so chan= ${even}`);
document.write(`so luong cac so le= ${odd}`);
