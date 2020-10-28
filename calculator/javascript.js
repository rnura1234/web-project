function dis(val){
    document.getElementById("result").value+=val;

}
function clr(){
    document.getElementById("result").value="";
}
function solve(){
    var x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;

}
function root(){
    var x=document.getElementById("result").value;
    let y=eval(x);
    let root=Math.sqrt(y);
    document.getElementById("result").value=root;


}
function remove(){
    var x=document.getElementById("result").value;
    var toStr=x.toString();
    var re=toStr.slice(0,-1);
    document.getElementById("result").value=re;


}
