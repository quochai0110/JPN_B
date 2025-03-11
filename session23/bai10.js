/* 1. Nhập số phần tử cần nhập và giá trị các phần tử 

2. In ra giá trị các phần tử đang quản lý 

3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần

4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng 

5. In ra các số nguyên tố trong mảng và tính tổng 

6. Nhập một số và đếm số lần xuất hiện trong mảng 

7. Thêm một phần tử vào vị trí chỉ định 

8. Xóa một phần tử theo giá trị 

9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần 

0. Thoát 

*/
let a;
let arr = [];
do {
    a = Number(prompt("Nhap lưa chon"));
    switch (a) {
        case 1:
            //Nhap so phan tu can nhap va gia tri cac phan tu
            let number = Number(prompt("Nhap so luong phan tu"));
            for (let i = 0; i < number; i++) {
                let valueNumber = +prompt("Nhap gia tri phan tu" + i);
                arr.push(valueNumber);
            }
            break;
        case 2:
            //In ra cac phan tu dang quan li
            for (let i = 0; i < arr.length; i++) {
                console.log(`arr[${i}]= ${arr[i]}`);
            }
            break;
        case 3:
            //In ra phan tu chan, tinh tong, sap xep giam dan
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 == 0) {
                    console.log("Phan tu chan:" + arr[i]);
                    sum += arr[i];
                }
                for (let j = 0; j < arr.length - 1 - i; j++) {
                    if (arr[j] < arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            console.log("mang sau khi duoc sap xep" + arr);
            console.log("tong cac phan tu chan la" + sum);

            break;
        case 4:
            //In ra giá trị lớn nhất và nhỏ nhất và vị trí của chúng
            let maxItem = arr[0];
            let maxIndexItem = 0;
            let minItem = arr[0];
            let minIndexItem = 0;

            for (let i = 0; i < arr.length; i++) {
                if (maxItem < arr[i]) {
                    maxItem = arr[i];
                    maxIndexItem = i;

                }
            }
            console.log("số lớn nhất ", maxItem,);
            console.log("vị trí lớn nhất ", maxIndexItem);
            for (let i = 0; i < arr.length; i++) {
                if (minItem > arr[i]) {
                    minItem = arr[i];
                    minIndexItem = i;
                }
            }
            console.log("số nhỏ nhất ", minItem,);
            console.log("vị trí nhỏ nhất", minIndexItem);
            break;
            case 5:
            // In ra các số nguyên tố trong mảng và tính tổng 
            let total=0;
            for(let i=0; i< arr.length;i++){
                let count=0;
                for (let j=1; j<= arr[i];j++){
                    if(arr[i]%j==0){
                        count++;
                    }
                }
                if(count==2){
                    console.log("các số nguyên tố là",+arr[i]);
                    total += arr[i];
                    console.log("tổng các phần tử số nguyên là",total); 
                }
            }
                break;

        default:
            break;
    }
} while (a != 0)