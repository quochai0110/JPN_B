// Viết chương trình yêu cầu người dùng nhập vào 3 số a, b, c, giải phương trình bậc 2 : ax^2 + bx + c = 0 và in kết quả ra màn hình.

let a = prompt("Nhập vào a ");
let b = prompt("Nhập vào b");
let c = prompt("Nhập vào c");
let check =isNaN(a);
let check1 = isNaN(b);
let check2 = isNaN(c);
if(!check && !check1 && !check2){
    delta = b*b - 4*a*c;
    if(delta < 0){
        document.write("Phương trình vô nghiệm");
    }else if(delta == 0){
        x = -b / (2*a);
        document.write(`Phương trình có nghiệm kép x1=x2=${x.toFixed(2)}`);
    }else{
        x1= (-b - Math.sqrt(delta))/2*a;
        x2= (-b + Math.sqrt(delta))/2*a;
        document.write(`Phương trình có hai nghiệm phân biệt x1=${x1.toFixed(2)} và x2=${x2.toFixed(2)}`);
    }
}else{
    document.write("Thông tin không hợp lệ");
}