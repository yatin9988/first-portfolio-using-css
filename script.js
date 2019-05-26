function toggle(){
    let list = document.getElementById("xyz");
    if (list.className === "anchor"){
        list.className += " responsive";
    }
    else{
        list.className = "anchor";
    }
}