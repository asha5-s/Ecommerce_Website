function display(value){
    document.getElementById('textarea').value+=value
}
function calculate(value){
    var val=document.getElementById('textarea').value
    var ans=eval(val)
    document.getElementById('textarea').value=ans
}
function clr(){
    document.getElementById('textarea').value=''
}