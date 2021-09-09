const changeBG = function(color){
    document.body.style.backgroundColor =color;
    let textColor = document.getElementsByClassName('textColor');
    if(color === '#000000'){
        for(let elm of textColor){
            elm.style.color = 'white'
        }
    }else{
        for(let elm of textColor){
            elm.style.color = 'black'
        }
    }
}