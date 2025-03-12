let user = ["1213@gmail.com", "nnnn@gmail.com"];
function dangKy(email) {
    let flag = 0;
    // let  email = prompt("Hãy Nhập Email ");
    //kiểm tra xem tồn tại trong mảng chưa
    for (let i = 0; i < user.length; i++) {
        if (user[i] == email) {
            flag =1;
            break;
        }
    }
    if(flag==0){
        // tai khoan không có trong mảng
        // email phải chứa ký tự @ và .com hoặc .vn
        if(email.includes("@")&&(email.endsWith(".com")||email.endsWith(".vn"))){
            console.log("Tài Khoản hợp lệ");
            // lưu vào mảng
            user.push(email);
        }else{
            console.log("Tài khoản không hợp lệ")
        }
    }else{
        // tai khoan đã có trong mảng
        console.log("tài khoản đã tồn tại");
    }
}
 dangKy("nhat@gmail.com");
 dangKy("nhat@gmail.com");
 dangKy("nhat1@gmail.com");
 dangKy("nhat1@gmail.com");




