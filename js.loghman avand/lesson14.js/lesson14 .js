// js traning whit loghman avand
//lesson 14
// debug = بررسی روند اجرای کد + خطایابی
//1. با استفاده از ابزار debuger یعنی مراجه به inspect element صفحه و تنظیم کردن ان روی قسمت source میتوان وضعیت کد را بررسی نمود.
//ابتدا نقاط break point را مشخص می کنیم.
//در حاشیه بخشی به نام call stack وجود دارد که ترتیب صدا زدن توابع رو نشان می دهد.
//در حاشیه بخشی به نام scope وجود دارد که مجموعه متغیر هایی که تا break point مورد نظر وجود دارد و ما به انها دسترسی داریم را نمایش می دهد.
//2. روش دیگری که برای بررسی کد و خطا یابی کاربرد دارد استفاده از بلاک try..cath..finally است. البته این در تمام زبان های شی گزا کاربرد دارد.
try {
//    کدی که باید بررسی شود
//    زمانی که چند کد در این قسمت نوشته می شود به محض اینکه به اولین error برخورد کند break می شود و وارد قسمت catch می شود در واقع کدهای بعد error این قسمت خوانده نمی شود.
    alery(" hello matina")
    alert("hello mehdi")
//    در قسمت try برنامه نویس می تواند از ویژگی throw استفاده کند و خظایی رو به صورت کد یا string جلوی ان قرار بدهد. مانند break عمل می کند و کدهای بعد ان اجرا نمی شود و وارد قسمت catch می شود.
    throw "i want to make error hear"
} catch (error) {
//    اتفاقی که می خواهیم سر error بیاریم
    alert(error.toString())

} finally {
    //کدی که در صورت بروز و یا عدم بروز error به اجرا در می اید
    //نوشتن قسمت finally اختیاری است.
    alert("bye matina")
}
// ---------------------------mini project---------------------------------
//می خواهیم با توجه به توضیحات بالا یک مثال بزنیم و طی ان از کاربر نام و سنش را بپرسیم؟

try {
    var name = prompt("enter your name please?")
    var age = prompt("enter your age?")
    if (isNaN(age)) {
        throw "sorry! your age in not valied"
    } else if (age > 100) {
        throw "sorry!you are too old for do that"
    } else if (age < 0) {
        throw "this age number  not true!"
    } else {
        alert("thanke you dear " + name + " with " + age + " years old, here you are:")
    }
} catch (e) {
    alert(e)
}
//-------------------------mini project---------------------------------------
//حال می خواهیم مثال بالا را به گونه ای تغییر بدهیم که زمانی که کاربر اطلاعات سن خود را نادرست وارد کرد سوال مجددا تکرار شود؟

var name = prompt("enter your name please?")
while (1){
    try {
        var age = prompt("enter your age?")
        if (isNaN(age)||age < 0) {
            throw "sorry! your age in not valied"
        } else if (age > 100) {
            throw "sorry!you are too old for do that"
        } else {
            alert("thanke you dear " + name + " with " + age + " years old, here you are:")
            break;
        }
    } catch (e) {
        alert(e)
    }
}
//کدهای try..catch قادر به تشخیص خطاهای منطقی نیستند.


//-------------------------------timing functions-----------------------------------------
//1-setInterVal( "زمان به میلی ثانیه , "کدی که خاستار اجرای ان در فواصل زمانی مختلف هستیم )
//2-clearInterVal( variable نام)
//از توابع فوق برای تکرار اجرای یک کد در فواصل زمانی تعیین شده استفاده می شود
//بعد از قرار دادن مقدار تابع setInterVal درون یک variable نام متغیر را به عنوان پارامتر ورودی به تابع clearInteVal می دهیم.
//کد ورودی تابع setIntrVal رامیتوانیم به صورت string بنویسیم.
var IV1= setInterval("alert(rand(1-10))",1000);
//اما بهتر است که کد ورودی پارامتر را به صورت تایع anonymose بنویسیم و درون string قرار ندهیم
var IV2= setInterval(function (){
    alert(rand(1-10))
},1000)

//3-setTimeOut("  زمان به میلی ثانیه , "کدی که خاستار اجرای ان پس از سپری شدن زمان مقرر هستیم)
//4-clearTimeOut( variable نام )
//از توابع بالا برای اجرای یک کد پس از سپری شدن زمان مقرر استفاده می کنیم.
//بعد از قرار دادن مقدار تابع setTimeOut درون یک variable میتوانیم نام متغیر را به عنوان پارامتر ورودی به تابع clearTimeOut بدهیم.
var TO1= setTimeout(function (){
    alert('salam')
},1000)

//-------------------------mini project------------------------------

    <body>
    <div id="div1"></div>
    <div id="div2"></div>
    <button onclick= clearInterval(IV1)>clearInterval</button>
    <button onclick= clearInterval(TO1)>clearTimeout</button>
    <script>

    var div1 = document.getElementById("div1")
    var div2 = document.getElementById("div2")

    var IV1 = setInterval(function () {
    div1.innerHTML = rand(0, 10)
    }, 1000)


    var TO1 = setTimeout(function () {

    div2.innerHTML = rand(0, 10)
    }, 3000)

    </script>
    </body>

//--------------------------------mini project---------------------------
//میخواهیم یک دکمه در صفحه طراحی کنیم که زمان سیستم کاربر را به صورت انلاین نماش بدهد
//ضمنا با onclick کردن ان ساعت متوقف و با onclick کردن مجدد ان دوباره کار کند.


<body>
        <button id=btn3 onclick=toggleTime()>matina baradandar</button>
    <script>
function setTimeInBtn() {
    var btn3= document.getElementById("btn3")
    var dt= new Date()
    btn3.innerHTML=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()
}

 var tg= setInterval(function () {
setTimeInBtn()
},1000)
     function toggleTime() {
if (tg>0){
    clearInterval(tg);
    tg=0
}else {
    tg= setInterval(function () {
        setTimeInBtn()
    },1000)

}
     }
</script>
        </body>
//--------------------------------mini project------------------------------------
//زمانی تابع setIntervalرا درون یک تابع دیگر قرار می دهیم درواقع با هربار صدا زده شدن ان تابع تابع setInterval هم مجددا با یک id جدید صدا زده میشود.
//باید بدانیم که کلیه این id ها عدد صحیح و بزرگتر و مساوی 1 هستند.
//میخواهیم 3 دکمه طراحی کنیم که اولی با نمایش دادن عددهای random در رنگهای مختلف توضیح بالا را به اثبات برساند.
//دکمه دوم با هر بار onclick شدن باعث stop شدن تولید اعداد با اخرین رنگ شود که این نشان دهنده ی داشتن id های مختلف setInterval در هر بار صدا زده شدن تابع بیرونی است.
//دکمه سوم باعث متوقف شدن کلیه ی تولید اعداد با رنگهای مختلف بشود.


<body>
<button id="btn4" onclick=startRandNumber()> start </button>
    <button id="btn5" onclick=stopRandNumber()> stop </button>
    <button id="btn6" onclick=stopAllRandNumber()> stop all </button>
    <div id="div"></div>
    <div id="interval-id">setInterval id : </div>

    <script>
var btn4=document.getElementById("btn4")
var btn5=document.getElementById("btn5")
var btn6=document.getElementById("btn6")
var div=document.getElementById("div")
var internalId=document.getElementById("interval-id")
var sI;

function startRandNumber() {
    var randomColor= "rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")"
    sI=setInterval(function () {
        div.innerHTML += "<span style='color:" + randomColor + "'>" + rand(10, 99) + "</span>" + "&nbsp;"
    },1000)

    internalId.innerHTML+= + "&nbsp;" +sI;
}
function stopRandNumber() {
    clearInterval(sI)
}
function stopAllRandNumber() {
    for (var i; i<=100;i++){
        clearInterval(i);
    }
}

</script>
</body>

//-------------------------------------mini project----------------------------------
//میخواهیم با کمک توابع بازگشتی دو دکمه طراحی کنیم که یک <div> را با effect اهسته پنهان و نمایان کند.
//دکمخ fade in به معنی ظاهر شدن و دکمه fade out به معنی محو شدن می باشد.
//می توانیم از تابع getComputedStyle() استفده کنیم تامقداری که یک element در نهایت می گیرد را به برنامه نویس بدهد.
//تابع مهم getComputedStyle() مقداری که برنامه نویس یا خود مرور گر به ان می دهد را نمایش می دهد.
//میتوان تمام ویژگی های css را پس از یک نقطه پشت سر این تابع قرار داد.

var elemstyle= getComputedStyle(element).opacity

//بدون استفاده از تابع فوق با روش زیر فقط میتوان ویژگی هایی که خود برنامه نویس به یک element داده است را گرفت نه ویژگی هایی که مرورگرها به element می دهند.

var elemStile= element.style.opacity

//متد toPrecision() برای شی number باعث به نمایش در اوردن دقت یک عدد می شود. درون پرانتزها تعداد رقم دقت اعشار نوشته می شود.
// در کار با اعداد هر بار که کد اجرا نمی شود به یاد داشته باشید که از تابع number() استفاده کنید.


<body>
<button onclick=fadeIn(div7)> fadeIn div7</button>
<button onclick=fadeOut(div7)> fadeout div7</button>
<div id="div7" style="background: pink;width: 100px;height: 100px"> this is my div7</div>

    <script>


var div7 = document.getElementById("div7");

function fadeIn(elem) {

    var elemOpacity = Number(getComputedStyle(elem).opacity).toPrecision(2);
    elem.style.opacity = elemOpacity
    if (elemOpacity >= 1) {
        return;
    }
    elem.style.opacity = Number(elemOpacity) + 0.1;

    setTimeout(function () {
        fadeIn(elem)
    }, 100)


}

function fadeOut(elem) {

    var elemOpacity = Number(getComputedStyle(elem).opacity).toPrecision(2);
    elem.style.opacity = elemOpacity

    if (elemOpacity <= 0) {
        return;
    }
    elem.style.opacity = Number(elemOpacity) - 0.1;

    setTimeout(function () {
        fadeOut(elem)
    }, 100)

}


</script>
    </body>
//-------------------------------------------------------------------------------------------
//در java script می توانیم یک متد برای کلیه ی اشیایی که خودمان ساختیم ایجاد کنیم.
//برای این کار کافیست که یک تابع که از قبل تعریف کرده ایم را به صورت anonymous درون protptype یک Element یا شی دیگر قرار دهیم.
// ویژگی prototype باعث می شود که متدی که تعریف کردیم به تمامی فرزندان شی پدر به ارث برسد.
//در مثال بالا کافیست:


<body>

<button ondblclick="this.myFadeOut()" onclick="div8.myFadeIn()"> fadeIn div8</button>

<button  ondblclick="this.myFadeOut()" onclick="div8.myFadeOut()")> fadeout div8</button>

<div  ondblclick="this.myFadeOut()" id="div8" style="background: blueviolet;width: 100px;height: 100px"> this is my div8</div>
<script>



var div8 = document.getElementById("div8");

Element.prototype.myFadeIn= function () {
fadeIn(this);
}

Element.prototype.myFadeOut= function () {
        fadeOut(this);
    }


</script>
    </body>

//ترتیب اشیا در js:
//object  --->   window  --->  document  -->  Element

//شی string و number دو زیر مجموعه ی مستقیم object  هستند.


