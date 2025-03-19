/* 
    Tạo 1 mảng chứa danh sách công việc
    Tiến hành tạo menu cho người dùng chọn


*/
let jobs=[
    
        {
            id:1,
            name:"học lập trình",
            description:"js",
            time:"18/3/2025",
            status:false,
        },
        {
            id:2,
            name:"học lập trình",
            description:"html",
            time:"18/3/2025",
            status:true,
        },
        {
            id:3,
            name:"học lập trình",
            description:"css",
            time:"18/3/2025",
            status:true,
        }
    
];
let resutl = jobs.filter(job=>job.status!==true);
console.log("result",resutl);

while (0) {
    let choice= +prompt(
        `
            1. Thêm công việc mới.
            2. Hiển thị tất cả các công việc.
            3. Cập nhật trạng thái công việc theo id.
            4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
            5. Sắp xếp các công việc theo trạng thái công việc.
            6. Thoát.
        
        `)
        
        switch (choice) {
            case 1:
                // thêm công việc mới
                // đi viết hàm thêm công việc mới
                addJob();
                break;
        
            default:
                break;
        }
    if(choice==6){
        break;
    }
}
// tạo function đi thêm công việc mới
function addJob() {
    let id;
    /* 
        tạo id
        1. viết hàm sinh id 
        2. dùng hàm tạo id ngẫu nhiên có sẵn trên mạng
        3. cho người dùng nhập(id đã tồn tại hay chưa vì id là duy nhất)
        4. có thể tăng id cho phần tử tiếp theo
    */

    if(jobs.length==0){
        id=1;
    }else{
        id= jobs[jobs.length-1].id + 1;
    }
    // jobs.length==0? id=1 : id=jobs[jobs.length-1].id + 1;
    let name= prompt("nhập tên công việc");
    let description=prompt("nhập mô tả");
    let time= new Date();
    let status= false;// mặc định chưa hoàn thành
    // tạo đối tượng công việc
    let job= {
        id:id,
        name:name,
        description:description,
        time:time,
        status:status
    }
    // thêm đối tượng vào mảng
     jobs.push(job);
     console.log("thêm công việc thành công");
     console.log("jobs",jobs);
     
     
}   
// console.log("ngày",new Date().getDay());
// console.log("giờ",new Date().getHours());
// console.log("phút",new Date().getMinutes());

/* 
    tìm kiếm: find()
    tìm kiếm vị trí: findIndex()
    lọc: filter()
    sắp xếp: sort()


*/



