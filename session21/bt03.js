/* 

    khai báo biến lưu giá trị mật khẩu
    let pass="admin";
    cho người dùng nhập tối đa 3 lần, nếu đúng thì hiển thị "mk hợp lệ"
    nếu sai hiển thị "mk không hợp lệ"
*/
let passWord="admin";
let count=0;
while( count<3 ){
    let pass =prompt("mời bạn nhập mật khẩu ");
    if(passWord===pass){
        console.log("mk chính xác ");
        break;
    } else {
        console.log("mk sai");
        count++;

    }
}
