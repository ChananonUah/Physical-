let nums = document.getElementById('se');
let numv = document.getElementById('ve');
let numt = document.getElementById('te');
let v = document.getElementById('v1');
let t = document.getElementById('t1');
let s = document.getElementById('s1');
let message = document.getElementById('result');






function showmessage() {
    let numbers = parseFloat(document.getElementById("se").value)
    let numberv = parseFloat(document.getElementById("ve").value)
    let numbert = parseFloat(document.getElementById("te").value)

    let outputhtml = ''


    if (isNaN(numbert)){
        outputhtml += 't = '
        let num5 = numbers/numberv;
        outputhtml += num5.toFixed(2);
        outputhtml += "s";

        

        

        if (outputhtml < 0){
            num5 = 'หาค่าไม่ได้'
        }
        
    }
    else if (isNaN(numberv)){
        outputhtml += 'v = '
        let num5 = numbers/numbert;
        outputhtml += num5.toFixed(2);
        outputhtml += 'm/s'

        outputhtml += "         หรือ        "
        let num4 = num5*(18/5);
        outputhtml += num4.toFixed(2);
        outputhtml += "km/hr"

        if (outputhtml < 0){
            outputhtml = 'หาค่าไม่ได้'
         }
    }
    else if(isNaN(numbers)){
        outputhtml += 's = '
        let num5= numberv*numbert;
        outputhtml += num5.toFixed(2);
        outputhtml += 'm'
        if (outputhtml < 0){
            outputhtml = 'หาค่าไม่ได้'
         }
    }


    message.innerHTML = outputhtml;

}

function reset_one() {
    document.getElementById('ve').value = "";
    document.getElementById('se').value = "";
    document.getElementById('te').value = "";
    outputhtml = "เเสดงคำตอบที่นี่"
    message.innerHTML = outputhtml;

}











let message_2 = document.getElementById("resulttwo")
let srv = document.getElementById("sre")
let vrv = document.getElementById("vre")
let urv = document.getElementById("ure")
let arv = document.getElementById("are")
let trv = document.getElementById("tre")




function nos(){
    document.getElementById('vr').style.display = 'block';
    document.getElementById('ur').style.display = 'block';
    document.getElementById('ar').style.display = 'block';
    document.getElementById('tr').style.display = 'block';
    document.getElementById('results').style.display = 'inline-block';
    document.getElementById('but-2').style.display = 'none';
    document.getElementById('but-3').style.display = 'none';
    document.getElementById('but-4').style.display = 'none';
    document.getElementById('but-5').style.display = 'none';
    document.getElementById('but-1').style.display = 'none';
    document.getElementById('resultv').style.display = 'none';


    
}

function nov(){
    document.getElementById('sr').style.display = 'block';
    document.getElementById('ur').style.display = 'block';
    document.getElementById('ar').style.display = 'block';
    document.getElementById('tr').style.display = 'block';
    document.getElementById('resultv').style.display = 'inline-block';
    document.getElementById('but-2').style.display = 'none';
    document.getElementById('but-3').style.display = 'none';
    document.getElementById('but-4').style.display = 'none';
    document.getElementById('but-5').style.display = 'none';
    document.getElementById('but-1').style.display = 'none';
}
function nou(){
    document.getElementById('vr').style.display = 'block';
    document.getElementById('sr').style.display = 'block';
    document.getElementById('ar').style.display = 'block';
    document.getElementById('tr').style.display = 'block';

    document.getElementById('resultu').style.display = 'inline-block';
    document.getElementById('but-2').style.display = 'none';
    document.getElementById('but-3').style.display = 'none';
    document.getElementById('but-4').style.display = 'none';
    document.getElementById('but-5').style.display = 'none';
    document.getElementById('but-1').style.display = 'none';
}
function noa(){
    document.getElementById('vr').style.display = 'block';
    document.getElementById('ur').style.display = 'block';
    document.getElementById('sr').style.display = 'block';
    document.getElementById('tr').style.display = 'block';

    document.getElementById('resulta').style.display = 'inline-block';
    document.getElementById('but-2').style.display = 'none';
    document.getElementById('but-3').style.display = 'none';
    document.getElementById('but-4').style.display = 'none';
    document.getElementById('but-5').style.display = 'none';
    document.getElementById('but-1').style.display = 'none';
}
function not(){
    document.getElementById('vr').style.display = 'block';
    document.getElementById('ur').style.display = 'block';
    document.getElementById('ar').style.display = 'block';
    document.getElementById('sr').style.display = 'block';

    document.getElementById('resultt').style.display = 'inline-block';
    document.getElementById('but-2').style.display = 'none';
    document.getElementById('but-3').style.display = 'none';
    document.getElementById('but-4').style.display = 'none';
    document.getElementById('but-5').style.display = 'none';
    document.getElementById('but-1').style.display = 'none';
}

function findse(){
    let outputhtml_2 = "";
    let message_2 = document.getElementById("resulttwo");

    
    let srv = parseFloat(document.getElementById("sre").value);
    let vrv = parseFloat(document.getElementById("vre").value);
    let urv = parseFloat(document.getElementById("ure").value);
    let arv = parseFloat(document.getElementById("are").value);
    let trv = parseFloat(document.getElementById("tre").value);

    if (isNaN(srv)){
        
        if (isNaN(vrv)){
            outputhtml_2 += "s = ";
            let num1= (urv*trv) + (1/2*arv*(trv**2));
            outputhtml_2 += num1.toFixed(2);
            
        }
        else if (isNaN(urv)){
            outputhtml_2 += "s = ";
            let num1 = (vrv*trv) - (1/2*arv*(trv**2));
            outputhtml_2 += num1.toFixed(2);
        }
        else if(isNaN(arv)){
            outputhtml_2 += "s = ";
            let num1 = ((urv+vrv)/2)*trv;
            outputhtml_2 += num1.toFixed(2);

        }
        else if(isNaN(trv)){
            outputhtml_2 += "s = ";
            let num1 = ((vrv**2)-(urv**2)) / (2*arv);
            outputhtml_2 += num1.toFixed(2);
        }
        else{
            outputhtml_2 += "s = ";
            let num1 = (urv*trv) + (1/2*arv*(trv**2));
            outputhtml_2 += num1.toFixed(2);
        }
        outputhtml_2 += "m"
        
    }
    message_2.innerHTML = outputhtml_2;
    
}

function findve(){
    let outputhtml_2 = "";
    let message_2 = document.getElementById("resulttwo");

    
    let srv = parseFloat(document.getElementById("sre").value);
    let vrv = parseFloat(document.getElementById("vre").value);
    let urv = parseFloat(document.getElementById("ure").value);
    let arv = parseFloat(document.getElementById("are").value);
    let trv = parseFloat(document.getElementById("tre").value);

    if (isNaN(vrv)) {
      
        if (isNaN(srv)){
            outputhtml_2 += "v = ";
            let num1= urv + (arv * trv); 
            outputhtml_2 *= num1.toFixed(2);
        }
        else if(isNaN(urv)){
            outputhtml_2 += "v = ";
            let num1= (srv + 1/2*arv*(trv**2)) / trv;
            outputhtml_2 += num1.toFixed(2);
            
        }
        else if(isNaN(arv)){
            outputhtml_2 += "v = ";
            let num1 = ((srv/trv)*2)-urv;
            outputhtml_2 += num1.toFixed(2);
        }
        else if(isNaN(trv)){
            outputhtml_2 += "v = ";
            let num1 = ((urv**2)+(2*arv*srv))**0.5;
            outputhtml_2 += num1.toFixed(2);
        }
        else{
            outputhtml_2 += "v = ";
            let num1 = urv + (arv * trv);
            outputhtml_2 += num1.toFixed(2);
        }
        outputhtml_2 += "m/s"
        
    }
    message_2.innerHTML = outputhtml_2;
}

function findue(){
    let outputhtml_2 = "";
    let message_2 = document.getElementById("resulttwo");

    
    let srv = parseFloat(document.getElementById("sre").value);
    let vrv = parseFloat(document.getElementById("vre").value);
    let urv = parseFloat(document.getElementById("ure").value);
    let arv = parseFloat(document.getElementById("are").value);
    let trv = parseFloat(document.getElementById("tre").value);

    if (isNaN(srv)){
        outputhtml_2 += "u = ";
        outputhtml_2 += vrv - (arv*trv);
    }
    else if (isNaN(vrv)){
        outputhtml_2 += "u = ";
        let num1 = (srv - (1/2*arv*(trv**2))) / trv;
        outputhtml_2 += num1.toFixed(2);

    }
    else if (isNaN(srv)){
        outputhtml_2 += "u = ";
        let num1= ((srv/trv)*2) - vrv;
        outputhtml_2 += num1.toFixed(2);
    }
    else if (isNaN(trv)){
        outputhtml_2 += "u = ";
        let num1 = ((vrv**2) - (2*arv*srv))**0.5;
        outputhtml_2 += num1.toFixed(2);
    }
    else{
        outputhtml_2 += "u = "
        let num1 = ((vrv**2) - (2*arv*srv))**0.5;
        outputhtml_2 += num1.toFixed(2);
    }
    outputhtml_2 += "m/s"

    message_2.innerHTML = outputhtml_2;
}

function findae(){
    let outputhtml_2 = "";
    let message_2 = document.getElementById("resulttwo");

    
    let srv = parseFloat(document.getElementById("sre").value);
    let vrv = parseFloat(document.getElementById("vre").value);
    let urv = parseFloat(document.getElementById("ure").value);
    let arv = parseFloat(document.getElementById("are").value);
    let trv = parseFloat(document.getElementById("tre").value);

    if (isNaN(srv)){
        outputhtml_2 += "a = ";
        let num1 = (vrv-urv) /trv;
        outputhtml_2 += num1.toFixed(2);
    }
    else if (isNaN(vrv)){
        outputhtml_2 += "a = ";
        let num1= ((srv - (urv*trv))*2) / (trv**2);
        outputhtml_2 += num1.toFixed(2);
    }
    else if (isNaN(urv)){
        outputhtml_2 += "a = ";
        let num1=  -(((srv - (vrv*trv))*2) / (trv**2));
        outputhtml_2 += num1.toFixed(2);
    }
    else if (isNaN(trv)){
        outputhtml_2 += "a = ";
        let num1= ((vrv**2) - (urv**2)) / (2*srv);
        outputhtml_2 += num1.toFixed(2);
    }
    else{
        outputhtml_2 += "a = ";
        let num1= (vrv-urv) /trv;
        outputhtml_2 += num1.toFixed(2);
    }
    
    outputhtml_2 += "  m/s<sup>2</sup>";

    message_2.innerHTML = outputhtml_2;

}


function findte(){
    let outputhtml_2 = "";
    let message_2 = document.getElementById("resulttwo");

    
    let srv = parseFloat(document.getElementById("sre").value);
    let vrv = parseFloat(document.getElementById("vre").value);
    let urv = parseFloat(document.getElementById("ure").value);
    let arv = parseFloat(document.getElementById("are").value);
    let trv = parseFloat(document.getElementById("tre").value);

    if (isNaN(srv)){
        outputhtml_2 += "t = ";
        let number2 = (vrv - urv) / arv ;
        outputhtml_2 += number2.toFixed(2);
    }
    else if (isNaN(vrv)){
        outputhtml_2 += "t = ";
        let number1= ((-urv) + ((urv**2) - ((4*(arv/2)*srv))**0.5)) / (2*srv); 
        outputhtml_2 += number1.toFixed(2);
        outputhtml_2 += "    and    ";
        let number2 = ((-urv) - ((urv**2) - ((4*(arv/2)*srv))**0.5)) / (2*srv);
        outputhtml_2 += number2.toFixed(2);
    }
    else if(isNaN(urv)){
        outputhtml_2 += "t = ";
        let number1= ((-vrv) + ((vrv**2) - ((4*(-arv/2)*srv))**0.5)) / (2*srv); 
        outputhtml_2 += number1.toFixed(2);
        outputhtml_2 += "    and    ";
        let number2 = ((-vrv) - ((vrv**2) - ((4*(-arv/2)*srv))**0.5)) / (2*srv);
        outputhtml_2 += number2.toFixed(2);
    }
    else if(isNaN(arv)){
        outputhtml_2 += "t = ";
        let number2 = srv*2 / ((urv+vrv));
        outputhtml_2 += number2.toFixed(2);

    }
    else{
        outputhtml_2 += "t = ";
        let number2 = srv*2 / ((urv+vrv));
        outputhtml_2 += number2.toFixed(2);
    }
    outputhtml_2 += " s";

    message_2.innerHTML = outputhtml_2;
}






function reset_2(){
    document.getElementById('vre').value = "";
    document.getElementById('sre').value = "";
    document.getElementById('ure').value = "";
    document.getElementById('are').value = "";
    document.getElementById('tre').value = "";


    document.getElementById('sr').style.display = "none";
    document.getElementById('ur').style.display = "none";
    document.getElementById('vr').style.display = "none";
    document.getElementById('tr').style.display = "none";
    document.getElementById('ar').style.display = "none";

    document.getElementById('but-2').style.display = 'inline-block';
    document.getElementById('but-3').style.display = 'inline-block';
    document.getElementById('but-4').style.display = 'inline-block';
    document.getElementById('but-5').style.display = 'inline-block';
    document.getElementById('but-1').style.display = 'inline-block';

    document.getElementById('results').style.display = 'none';
    document.getElementById('resultv').style.display = 'none';
    document.getElementById('resultu').style.display = 'none';
    document.getElementById('resulta').style.display = 'none';
    document.getElementById('resultt').style.display = 'none';




    outputhtml_2 = "";
    outputhtml_2 += "เเสดงคำตอบที่นี่"
    message_2.innerHTML = outputhtml_2;
}





function result_5() {
    const prefixs = {
        y: 10 * (-24), z: 10 * (-21), a: 10 * (-18), f: 10 * (-15), p: 10 * (-12), n: 10 * (-9), 
        μ: 10 * (-6), m: 10 * (-3), c: 10 * (-2), d: 10 * (-1), 
        Y: 10 * 24, Z: 10 * 21, E: 10 * 18, P: 10 * 15, T: 10 * 12, G: 10 * 9, M: 10 * 6, k: 10 * 3, h: 10 ** 2, da: 10, "": 1 
    };
    
    let inputNum = document.getElementById('change1').value;
    let inputPrefix = document.getElementById('change2').value;
    let outputPrefix = document.getElementById('change3').value;
    let output1 = document.getElementById('result-5');
    
    let outputNum = inputNum * (prefixs[inputPrefix]) / (prefixs[outputPrefix]);
    let sciNotationArray = outputNum.toExponential(2).toString().split("e");
    let outputText = (sciNotationArray[0] + " × 10^" + sciNotationArray[1]).replace("+", "") + "    "+outputPrefix + "m" + "        หรือ    "  + outputNum + outputPrefix + "m";
    
    output1.innerHTML = outputText;
}


function reset2(){
    document.getElementById('change1').value = "";
    document.getElementById('change2').value = "";
    document.getElementById('change3').value = "";
    let output1 = document.getElementById('result-5');

    outputText = "เเสดงคำตอบที่นี่";
    output1.innerHTML = outputText;
    
}
