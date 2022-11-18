var score = new Array();

while(true)
{
    var input = prompt("La di da");
    try{
        if(isNaN(input)){
            throw "Err1";
        }               
        }
        catch(er){
        if(er=="Err1")
        alert("Error! The value you entered is not an Number");                
        }
        if(input!=-1 && !isNaN(input))
        score.push(input);
    else
        break;
   
}

document.write("<p>Greetings from beyond the "+ Math.max.apply(Math, score)+ "</p>");
alert('Even aliens use popups!');