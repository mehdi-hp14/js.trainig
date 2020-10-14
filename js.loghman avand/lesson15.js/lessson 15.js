// --------------------------------------new project about smooth scroll------------------------------------------
// متد  scroolTo(x,y) برای شی window باعث scroll شدن موس به عرض و ارتفاع ورودی میشود:
//متد scrollTo باعث تغییر scroll صفحه ی وب می شود.
/*window.scrollTo(0,1000);*/

//متد scrollBy(x,y) باعث تغییر scroll صفحه ی وب با مقدار دلخواه می شود. برای تغییر scroll صفحهی وب به صورت step by step از این استفاده می شود.
//ویژکی scrollY موقعیت کنونی scroll موس در راستای محور y را نشان می دهد.
window.scrollY;
// می خواهیم دو دکمه طراحی کنیم که scroll  موس را به ارامی بالا و پایین ببرد:

/*<body>
<button onclick="smoothScroll(1000)">smooth scrool to 1000px </button>
<button onclick="smoothScroll(0)">smooth scrool to top </button>
    <br>
<button onclick="window.scrollTo(100,1000)">smooth scrool to 1000px </button>
<button onclick="window.scrollTo(0,0)">smooth scrool to top </button>

    <script>
function smoothScroll(ypos) {
    var step= 20;
    if (ypos<scrollY){
        step*= -1
    }
    if(Math.abs(ypos-scrollY)<=20){
        return;
    }
  window.scrollBy(0,step);
  setTimeout(function () {
smoothScroll(ypos)
  },10)

}*/
//می خواهیم تابع پیش فرض scrollTo() را با تابع originalScrollSmooth() جایگزین کنیم:

/*var originalSmothScroll= scrollTo
scrollTo=function (x,y) {
smoothScroll(y);
</script>
</body>*/

//----------------------------mini project------------------------------------
//برای افزودن یک element به صفحه ی وب علاوه بر نوشتن کد html می توانیم از طریق js نیز ان را به صفحه ی خود بیفزاییم:

/*    <body>
    <img src="#" id="11" onclick="goUp()">
        </body>*/
//  به جای کد بالا در js می توان:

/*<script>
 var goUpBtn= document.createElement("img");
goUpBtn.src= "#";
    goUpBtn.id= "11";
    document.body.appendChild(goUpBtn)

        goUpBtn.addEventListener("click",function () {
            goUp()
        })
        </script>*/

//    می خواهیم بدون دسترسی به کد html صفحه و فقط با تغییر در js صفحه باعث ایجاد یک دکمه در پایین صفحه شویم که با click شدن scrollTop  شود:
//طراحی این دکمه با استفاده از تابع self-invoking function ممکن است.
//برای اینکه icon مذبور در position صفر دیده نشود به ان opacity صفر در css میدهیم.


/*
            <script>
            (function scrollTop() {
                var goUpBtn = document.createElement("button");
                var spanIn = document.createElement("span");
                spanIn.className = "mdi mdi-arrow-up-box"
                spanIn.id = "goUp"
                goUpBtn.appendChild(spanIn)
                document.body.appendChild(goUpBtn);

                function goUpBtnVisibility() {
                    if (scrollY <= 500) {
                        fadeOut(spanIn);
                        /!* goUpBtn.style.display = "none"*!/
                    } else {

                        fadeIn(spanIn);
                        /!*goUpBtn.style.display = "inline-block"*!/
                    }

                }


                spanIn.addEventListener("click", function () {
                    smoothScroll(0);
                    /!* scrollTo(0, 0)*!/
                });
                window.addEventListener("scroll", goUpBtnVisibility);

            }())
    </script>*/

//-----------------mini project about fixed navigation with animation when user scroll -------------------------------
//می خواهیم که navbar با scroll کردن کاربر برود بالای صفحه و fix شود:
// برای یاداوری لازم است بدانیم که متد getAttribute(' ') یک ویژگی را از شی می گیرد.
// متد setAttribute('ویژگی', ' value') یک ویژگی جدید را برای شی مورد نظر set می کند.
//متد indexOf('') یک مقدار رادرون string میگیرد و index ان را نمایش میدهد اگر ان مقدار false  باشد یا وجود نداشته باشد عدد -1 را برمیگرداند.
// در ابتدا در css یک class به نام sticky تعریف میکنم و به ان  position  با مقدار fixed می دهیم و سپس با js ان را به navbar میچسبانیم:
// ویژگی offSetTop فاصله ی یک شی از بالا را به ما بر می گرداند.

/*
<head>

<style>

#menuTop {
    line-height: 70px;
    font-size: 22px;
    width: 100%;
    background-color: gray;
    direction: rtl;
    height: 70px;
    color: white;
    transition: line-height,font-size,height 1s,1s,1s;
}

.sticky {
    line-height: 40px !important;
    font-size: 18px !important;
    width: 100%;
    height: 40px !important;
    position: fixed;
    top: 0;
}

</style>

</head>

<body>

<div class="navigation">
    <nav id="menuTop">
        <li><a href="#">خانه</a></li>
        <li><a href="#">درباره ی ما</a></li>
        <li><a href="#">اشتراک گذاری</a></li>
        <li><a href="#">دسترسی به سایر صفحات</a></li>
        <li><a href="#">تماس با ما</a></li>
    </nav>
</div>

    <script>

    var navbar= document.getElementById("menuTop");

window.addEventListener('scroll', function () {

    var navClasses= navbar.getAttribute("class")

    if(!navClasses){
        navbar.setAttribute("class", " ");
    }


    if( scrollY<=navbar.offsetTop){

        navbar.setAttribute("class", navClasses.replace('sticky',' '))
    }else{

        if( navClasses.indexOf("sticky")==-1){
            navbar.setAttribute("class", navClasses+' sticky')
        }

    }

})

</script>

</body>
*/


//---------------------mini project about spider game----------------------------------
//می خواهیم بازی ای طراحی کنیم که در ان در زمان تعیین شده عنکبوت زنبور را بخورد.
//هرگاه بخواهیم در زمانی معلوم به صورت گام به کام بر یک چیز افزوده یا از ان کم شود باید از توابع بازگشتی استفاده کنیم.
//توابع بازگشتی باید حتما شرط متوقف کننده داشته باشند و در ان باید return نوشته شود.
//استفاده از متد location.reload() باعث میشود صفحه خود به خود لود شود.
//به جای استفاده از keycode ها میتوان از which استفاده کرد.
//

<head>

<style>
    #spider {
        width: 100px;
        height: 100px;
        z-index: 999;
        border-radius: 50%;
        position: fixed;
    }

    #bee {
        width: 90px;
        height: 70px;
        border-radius: 50%;
        position: fixed;
        top: 200px;
        z-index: 99;

    }

    .spiders-Web {
        background: url(spiderGamePic/6fc8cea958de6a45670d3219899756c0.jpg) no-repeat center;
        position: fixed;
        height: 100%;
        width: 100%;
        transform: scale(7);

    }

    #timer {
        position: fixed;
        font-size: 100px;
        color: red;
        opacity: 0.1;
        left: 20px;
        top: 5px;

    }

</style>
</head>

<body onload="insectPosition()" onkeydown="handleKey(event)">
<img id='spider' src="spiderGamePic/images.jpg">
<img id='bee' src="spiderGamePic/images (1).jpg">
<div class='spiders-Web'></div>
<div id="timer"></div>

<script>
var spider = document.getElementById('spider')
var bee = document.getElementById('bee')

function rand(start, end) {
    var rnd = start + Math.floor(Math.random() * (end - start));
    return rnd;

}

function insectPosition() {
    alert("hi, can you kill a bee?");

    spider.style.top = rand(0, window.innerHeight - 50) + "px";
    spider.style.left = rand(0, window.innerWidth - 50) + "px";
    bee.style.top = rand(0, window.innerHeight - 50) + "px";
    bee.style.left = rand(0, window.innerWidth - 50) + "px";
    decreaseTime();


}

function handleKey(e) {
    if (e.which === 39) {
        moveSpider("right");

        /*    if(e.keyCode===39){
                moveSpider("right");
            }*/

    } else if (e.which === 37) {
        moveSpider("left");

    } else if (e.which === 38) {
        moveSpider("up");

    } else if (e.which === 40) {
        moveSpider("down");

    }
}

function moveSpider(direction) {
    var d = 10;
    switch (direction) {
        case "right":
            spider.style.left = (spider.offsetLeft + d) + 'px';
            spider.style.transform = "rotate(180deg)";
            break;

        case "left":
            spider.style.left = (spider.offsetLeft - d) + 'px';
            spider.style.transform = "rotate(0deg)";

            break;

        case "up":
            spider.style.top = (spider.offsetTop - d) + 'px';
            spider.style.transform = "rotate(90deg)";

            break;

        case "down":
            spider.style.top = (spider.offsetTop + d) + 'px';
            spider.style.transform = "rotate(-90deg)";

    }
    if (win(1)) {
        alert("you are winner");
        location.reload();
    }


}

function win() {
    return Math.abs(spider.offsetTop - bee.offsetTop) < 20 && Math.abs(spider.offsetLeft - bee.offsetLeft) < 20

}

var timer = document.getElementById("timer");
var remainingTime = 10;
timer.innerHTML = remainingTime;


function decreaseTime() {
    if (Number(timer.innerHTML) <= 0) {
        gameOver();
        return;
    }
    timer.innerHTML = Number(timer.innerHTML) - 1;
    setTimeout(function () {
        decreaseTime();
    }, 1000);


}

function gameOver() {
    alert("hey you are looser!!");
    location.reload();
}

</script>
</body>
