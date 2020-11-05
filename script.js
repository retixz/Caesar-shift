
var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
    var inText = document.getElementById("inText").value;
    var shift = document.getElementById("shift").value;
    //Convert to int the shift value
    shift=parseInt(shift);
    
    while (shift < 0) {
        shift +=26;
    }

    var out= "";

    for(var i=0; i < inText.length; i++){

        shift=parseInt(shift);
        
        var c = inText[i];
        // If is a letter
        if(c.match(/[a-z]/i)){
            //Get ASCII code
            var code = inText.charCodeAt(i);
            
     
        // Uppercase letter
        if(code >= 65 &&  code <= 90){
            
            c = String.fromCharCode(((code -  65 + shift) %26) + 65);
            
        }
        // Lowercase letter
        else if(code >= 97 && code <= 122){
            
            c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            
        }
        }
        
        // Append shifted letter to output
        out += c;
        
        

    }
    
    document.getElementById('outText').value = out;

}) 




    
