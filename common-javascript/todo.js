function addLi(id,content){
    var myul=document.getElementById(id);
    var ele=document.createElement("li");
    ele.append(content);
    myul.append(ele);
}