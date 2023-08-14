function appendToAnswer(value){
    document.f.display.value += value;
}
function calculateResult(){
    try{
        document.f.display.value=eval(document.f.display.value);
    }
    catch(error){
        document.f.display.value="ERROR"
    }
}
function clearAll(){
    document.f.display.value= '';
}
function del(){
    const currentValue = document.f.display.value;
    document.f.display.value =currentValue.slice(0,-1);
}
function calroot(){
    const currentValue = parseFloat(document.f.display.value);   
    if(!isNaN(currentValue)){
        document.f.display.value = Math.sqrt(currentValue);
    }
}
function calsqt(){
    const currentValue = parseFloat(document.f.display.value);   
    if(!isNaN(currentValue)){
        document.f.display.value = Math.pow(currentValue, 2);
    }
}
function toggle(){
    const currentValue = parseFloat(document.f.display.value);   
    if(!isNaN(currentValue)){
        document.f.display.value = currentValue * -1;
    }
}