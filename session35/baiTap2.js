let Bookmark = JSON.parse(localStorage.getItem("Bookmark")) || [];
function add() {
 document.getElementsByClassName("main")[0].style.display="block";
}
function close_btn(){
    document.getElementsByClassName("main")[0].style.display="none";
}
function save_form() {
    let name = document.getElementById("name").value.trim();
    let url = document.getElementById("url").value.trim();
    
}
