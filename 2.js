<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="pro.css".css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
   
   <header>
        <div class="head-top">
            <h2>Physics</h2>
        </div>

        <div class="boxbig">
            <div class="box box-1">
                <h2>อัตราเร็วเเละความเร็ว</h2>
                <p id="v1">
                   <span>v</span>
                   <span><input type="number" class="in v" id="ve">หน่วย m/s</span>
                </p>
    
                <p id="s1">
                    <span>s</span>
                    <span><input type="number" class="in s" id="se">หน่วย m</span>
                </p>
    
                <p id="t1">
                    <span>t</span>
                    <span><input type="number" class="in a" id="te">หน่วย s</span>
                </p>
    
                <button onclick="finds();" class="button-1" id="but1">หา s</button>
                <button onclick="findv()"  class="button-1" id="but2">หา v</button>
                <button onclick="findt()"  class="button-1" id="but3">หา t</button>
    
    
                <button class="re ae" onclick="showmessage();">Result</button>
                <button id="reset" class="reset" onclick="reset_one();" value="Reset">Reset</button>
    
                <p class="result" id="result" >เเสดงคำตอบที่นี่</p>
    
    
            </div>
        </div>

        <div class="boxbig">
            <div class="box box-2">
                <h2 class="h-2">เเปลงหน่วย</h2>
                
                <p>
                    <p>ตัวเลขพร้อมหน่วย</p>
                    <input type="text" placeholder="ตัวอย่าง 200 cm" id="change1">
                </p>

                <p>
                    <p>หน่วยที่จะเปลี่ยน</p>
                    <input type="text" placeholder="ตัวอย่าง mm" id="change2">
                </p>
                
                        
                <button class="re ae" onclick=" result_1();">Result</button>
                <button class="reset" onclick="reset_1();">Reset</button>
    
                <p class="result" id="result-1">เเสดงคำตอบที่นี่</p>
    
            </div>
        </div>

        <div class="boxbig">
            <div class="box box-3">
                <h2>การเคลื่อนที่เส้นตรง</h2>

                <p style="display: none;" id="sr">
                    s=
                    <input type="number" id="sre" >m
                </p>
                <p style="display: none;" id="vr">
                    v=
                    <input type="number" id="vre">m/s
                </p>
                <p style="display: none;" id="ur">
                    u=
                    <input type="number" id="ure">m/s
                </p>
                <p style="display: none;" id="ar">
                    a=
                    <input type="number" id="are">m/s<sup>2</sup>
                </p>
                <p style="display: none;" id="tr">
                    t=
                    <input type="number" id="tre">s
                </p>

                <button class="button-1" onclick="nos();" id="but-1">หาs</button>
                <button class="button-1" onclick="nov();" id="but-2">หาv</button>
                <button class="button-1" onclick="nou();" id="but-3">หาu</button>
                <button class="button-1" onclick="noa();" id="but-4">หาa</button>
                <button class="button-1" onclick="not();" id="but-5">หาt</button>
            
                <button class="re ae" id="results" style="display: none;" onclick="findse();">Result</button>
                <button class="re ae" id="resultv" style="display: none;" onclick="findve();">Result</button>
                <button class="re ae" id="resultu" style="display: none;" onclick="findue();">Result</button>
                <button class="re ae" id="resulta" style="display: none;" onclick="findae();">Result</button>
                <button class="re ae" id="resultt" style="display: none;" onclick="findte();">Result</button>
            
                <button class="reset" onclick="reset_2();"  value="Reset">Reset</button>

                <p class="result" id="resulttwo">เเสดงคำตอบที่นี่</p>
            </div>
        </div>
        
        
   </header>


    






    <script src="2.js"></script>
</body>
</html>
