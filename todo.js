
function  add(){
}
function newMemo() {

    
    var inpt = document.createElement("input");
    inpt.id = "inpt";
    inpt.className = "input";
    inpt.setAttribute("placeholder","enter your memo here");
    
    document.getElementById("container").append(inpt);
  
}

function save_btn(){
    

    var add = document.createElement("button");
    add.className = "new_memo_btn";
    add.id = "add";
    add.innerText = "SAVE MEMO";
    add.setAttribute("onclick","out_div(),save_memo()")

    document.getElementById("container").append(add);
}

function delete_btn(){
    var delt = document.createElement("button");
    delt.id = "delt";
    delt.className = "delt_btn";
    delt.innerText = "DELETE MEMO";
    delt.setAttribute("onClick","delete_memo()");

    document.getElementById("container").append(delt);

}
function delete_memo(){
    this.document.getElementById("inpt").remove();
    this.document.getElementById("add").remove();
    this.document.getElementById("delt").remove();
}
function out_div(){
    let p_div = document.createElement("div");
    p_div.className = "p_div";
    p_div.id = "p_div";
    
    document.getElementById("container").append(p_div);
}
function save_memo(){
    let memo = document.getElementById("inpt").value;
    
    if (!memo == " "){
    localStorage.setItem("memory",memo);

    let text = localStorage.getItem("memory",memo);
    
    var out = document.createElement("p");
    var check = document.createElement("input");
    check.id = "check";
    check.setAttribute("type","checkbox");

    out.className = "output";
    out.id = "output";
    out.innerText = text;

    document.getElementById("p_div").append(text);
    document.getElementById("P_div").append(check);
}else{
    var errors = document.getElementById("inpt");
    errors.style = "border: red 5px solid";
    errors.setAttribute("placeholder","memo should not be empty");
    
}
}
/*function delete_memo(){
    let text = document.getElementById("inpt").value;
    localStorage.removeItem("text");
}*/