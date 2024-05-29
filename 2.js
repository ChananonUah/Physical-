let nums = document.getElementById('se');
let numv = document.getElementById('ve');
let numt = document.getElementById('te');
let v = document.getElementById('v1');
let t = document.getElementById('t1');
let s = document.getElementById('s1');
let message = document.getElementById('result');




function finds(){
    v.style.display = 'block';
    t.style.display = 'block';
    document.getElementById('but2').style.display = 'none';
    document.getElementById('but3').style.display = 'none';
    document.getElementById('but1').style.display = 'none';


}

function findv(){
    s.style.display = 'block';
    t.style.display = 'block';
    document.getElementById('but2').style.display = 'none';
    document.getElementById('but3').style.display = 'none';
    document.getElementById('but1').style.display = 'none';


}
function findt(){
    s.style.display = 'block';
    v.style.display = 'block';
    document.getElementById('but2').style.display = 'none';
    document.getElementById('but3').style.display = 'none';
    document.getElementById('but1').style.display = 'none';


}

function showmessage() {
    let numbers = Number(nums.value);
    let numberv = Number(numv.value);
    let numbert = Number(numt.value);
    let outputhtml = ''


    if (numbers >=1 && numberv >=1){
        outputhtml += 't = '
        outputhtml += numbers/numberv;
        outputhtml += 's'

        if (outputhtml < 0){
            outputhtml = 'หาค่าไม่ได้'
        }
        
    }
    else if (numbers >=1 && numbert >=1){
        outputhtml += 'v = '
        outputhtml += numbers/numbert;
        outputhtml += 'm/s'
        if (outputhtml < 0){
            outputhtml = 'หาค่าไม่ได้'
         }
    }
    else if(numberv >=1 && numbert >=1){
        outputhtml += 's = '
        outputhtml += numberv*numbert;
        outputhtml += 'm'
        if (outputhtml < 0){
            outputhtml = 'หาค่าไม่ได้'
         }
    }
    else{
        outputhtml = 'หาค่าไม่ได้'
    }

    message.innerHTML = outputhtml;

}

function reset_one() {
    document.getElementById('ve').value = "";
    document.getElementById('se').value = "";
    document.getElementById('te').value = "";
    outputhtml = "เเสดงคำตอบที่นี่"
    message.innerHTML = outputhtml;
    s.style.display = 'none';
    v.style.display = 'none';
    t.style.display = 'none';

    document.getElementById('but2').style.display = 'inline-block';
    document.getElementById('but1').style.display = 'inline-block';
    document.getElementById('but3').style.display = 'inline-block';


}














let message_1 = document.getElementById('result-1');

const unit_all = {'p':10**-12, 'n':10**-9, 'mi':10**-6,
            'm':10**-3, 'c':10**-2, 'd':10**-1,
            'da':10**1, 'h':10**2, 'k':10**3, 
            'M':10**6, 'G':10**9, 'T':10**12, 
            }

// ตัวอย่าง 10 nm 10 cm
// ถ้าเป็น micro ให้ใส่เป็น mi
function result_1() {
    let unit_input = document.getElementById('change1').value;
    let unit_ans = document.getElementById('change2').value;
    
    unit_array = unit_input.split(" ");
    
    unit_need = unit_array[1].substring(0, unit_array[1].length - 1);
    
    for (const key in unit_all) {
        if (key == unit_need) {
            ans = parseInt(unit_array[0])*(1/unit_all[key])
        }    
        if (key == unit_ans) {
            ans = parseInt(unit_array[0])*(unit_all[key])
        }
    }
    
    function formatExponent(num) {
        // แปลงเลขเป็นสตริงในรูปแบบเลขยกกำลังฐาน 10
        let exponentString = num.toExponential();
    
        // แยกส่วนฐานและเลขชี้กำลัง
        let [base, exponent] = exponentString.split('e');
    
        // แปลงเลขชี้กำลังเป็นจำนวนเต็ม
        exponent = parseInt(exponent, 10);
    
        return [parseFloat(base), exponent];
    }

    function roundToTwoDecimalPlaces(number) {
    return Math.round(number * 100) / 100;
}
    
    message_1.innerHTML = `<p>หน่วยที่ได้ ${function roundToTwoDecimalPlaces(formatExponent(ans)[0])}× 10<sup>${formatExponent(ans)[1]}</sup> ${unit_ans}</p>`;
}




function reset_1(){
    document.getElementById('defult-1').value ="";
}
