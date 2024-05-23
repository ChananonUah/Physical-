let nums = document.getElementById('se')
let numv = document.getElementById('ve')
let numt = document.getElementById('te')
let v = document.getElementById('v1')
let t = document.getElementById('t1')
let s = document.getElementById('s1')
let message = document.getElementById('result')




function finds(){
    v.style.display = 'block';
    t.style.display = 'block';

}

function findv(){
    s.style.display = 'block';
    t.style.display = 'block';

}
function findt(){
    s.style.display = 'block';
    v.style.display = 'block';

}

function showmessage() {
    let numbers = Number(nums.value);
    let numberv = Number(numv.value);
    let numbert = Number(numt.value);
    let outputhtml = ''


    if (numbers >=1 && numberv >=1){
        outputhtml += numbers/numberv;
        
    }
    else if (numbers >=1 && numbert >=1){
        outputhtml += numbers/numbert;
        
    }
    else{
        outputhtml += numberv*numbert;
    }

    message.innerHTML = outputhtml;

}

