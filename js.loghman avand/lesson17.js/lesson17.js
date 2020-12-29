// کاربرد تابع ready
// این تابع زمانی استفاده می شود که میخواهیم یکسری از کدها پس از لود شدن تمامی کدهای صفحه لود شوند.
// متد html()  زمانی استفاده می شود که می خواهیم محتویات یک element  را بگیریم مثل inner html


/*<style>
    * {
        padding: 15px;
        font-size: 24px;
    }

    .spn {
        display: inline-block;
    }

    .text-red {
        color: red;
    }

    .text-blue {
        color: blue;
    }

    .text-green {
        color: green;
    }

    .bg-pink {
        background-color: pink;
    }

    .bg-gray {
        background-color: gray;
    }

    .bg-yellow {
        background-color: yellow;
    }

    .bg-blue {
        background-color: blue;
    }
</style>

</head>
<body>
<p class="p1 bg-pink"> paragraph1</p>
<p class="p2 bg-yellow"> paragraph2 <br>
<span class="spn text-red"> span1 </span>
<span class="spn text-blue"> span2 </span>
<span class="spn text-green"> span3 </span>
</p>
<p class="p3 bg-gray"> paragraph31</p>
<p class="p3 bg-gray"> paragraph32</p>

<hr>
<p class="p4 bg-gray"> paragraph41</p>
<p class="p4 bg-gray"> paragraph42</p>


<script>
//    با ready
$(document).ready(function () {
    alert($(".p5").html())

});
//بدون ready
alert($(".p6").html());




</script>
<p class="p5 bg-pink"> paragraph5</p>
<p class="p6 bg-blue"> paragraph6</p>
</body>*/


//------------------------------------------------------------
//استفاده از کیبورد this
// استفاده از این کیبورد باعث می شود که زمانی که از یک id یا class مشترک استفاده می کنیم دقیقا شی مربوط به همان element گرفته شود.
//بدون استفاده از this فقط content  شی اول به نمایش در می اید.
/*
<script>
    $(".p3").click(function () {

        alert($(".p3").html())

    });

    $(".p4").click(function () {

        alert($(this).html())

    });
    </script>*/
//---------------------------------------------------------
//انواع متدهای  jquery

// 1. input methods که وظیفه ی دریافت و پردازش اطلاعات از صفحه ی وب را دارند.


/* input methods : text() , html() , val() , attr('A')*/


/*
<body >
< input type = "text" value = "enter your name:"  class="inp1" >
    < button class= 'bt1' > alert text < /button>
< button class= 'bt2' > alert html < /button>
< button class= 'bt3' > alert val < /button>
< button class= 'bt4' > alert attr < /button>
< /body>
*/

//متد text() محتویات متنی و فضاهای خالی ( space) شی گرفته شده را نمایش می دهد.
/*

$(document).ready(function () {
     $('.bt1').click(function () {
         alert($('.p2').text());

     });
 });

*/

//متد html() تمام متن ها و تگهای درونی شی گرفته شده را نمایش می دهد.
/*

$(document).ready(function () {
      $('.bt2').click(function () {
          alert($('.p2').html());
      });
  });

*/

//متد val() مقدار (value) شی input را نمایش می دهد. چه value ای که user وارد کرده باشد چه value ای که برنامه نویس به attribute value داده باشد.
/*

$(document).ready(function () {
    $('.bt3').click(function () {
        alert($('.inp1').val());
    });
});

*/

//متد attr('') که درون string نام attribute را می گیرد و value ان را به نمایش در می اورد.
/*

$(document).ready(function () {
     $('.bt4').click(function () {
         alert($('.p2').attr("class"));
     });
 });

*/

// 2. output methods که وظیفه ی اعمال و پداخت اطلاعات به صفحه ی وب را دارند.


/*output methods :  text('t') , html('h') , val('v') , attr('A','a')*/


//متد text("t") می تواند مقداری متشکل از متن و فضای خالی را به عنوان خروجی به نمایش در اورد.

/*
$(".p1").text("matina jooon");
*/

//متد html("h") می تواند مقداری متشکل از متن و تکهای اعمال شده را به صورت خروجی نمایش دهد.

/*$(".p2").html("<b>matina</b> jooon");*/

// متد val("v") به شی input گرفته شده مقدار (value) اضافه کند.

/*
<body>
<input type="text" value="enter your last-name:" class="inp2">
</body>

<script>
    $(".inp2").val("Baradandar");
</script>
    */

//متد attr("A","a") می تواند  attribute خواسته از شی مورد نظر را edit کند.

/*
<body>
<input type="text" value="enter your pass:" class="inp3">
</body>

<script>
    $(".inp3").attr("type", "password");
</script>
    */

//----------------------append(),prepend(),before(),after()--------------------------------

/*<body>
<button class='bt5'> show append in p1</button>
<button class='bt6'>show prepend in p1</button>
<button class='bt7'>show before p1</button>
<button class='bt8'>show after p1</button>
</body>*/


// متد append() در jquery باعث می شود که یک یا چند محتوا به اخر شی گرفته شده اضافه شود.

/*$(document).ready(function () {
    $(".bt5").click(function () {
        $(".p1").append(" <span class='name'> i am  matina baradandar</span>")
    });
});*/

// متد prepend() باعث می شود که یک یا چند محتوا به ابتدای شی گرفته شده اضافه شود.


/*$(document).ready(function () {
      $(".bt6").click(function () {
          $(".p1").prepend(" <span class='name'> i am matina baradandar</span>")
      });
  });*/

// متد before() موجب می شود که یک یا چند محتوا قبل ار element گرفته شده قرار بگیرد.

/*$(document).ready(function () {
    $(".bt7").click(function () {
        $(".p1").before("  <span class='name'> i  matina baradandar</span>")
    });
});*/

// متد after() موجب می شود که یک یا چند محتوا بعد از element گرفته شده قرار بگیرد.

/*
$(document).ready(function () {
    $(".bt8").click(function () {
        $(".p1").after(" <span class='name'>  matina baradandar</span>")
    });
});*/


//--------------------remove(),empty()-------------------------


/*<body>

<div class="p7 text-blue"> paragraph 7<br>
    <span class="spn-t text-red"> span1 </span>
    <span class="spn-t text-blue"> span2 </span>
</div>
<div class="p8 text-blue"> paragraph 8 <br>
    <span class="spn text-red"> span1 </span>
    <span class="test spn text-blue"> span2 </span>
</div>
<div class="p9 text-blue"> paragraph 9<br>
    <span class="spn-d text-red"> span1 </span>
    <span class="spn-d text-blue"> span2 </span>
</div>

<button class="btn9">remove span than paragraph 7</button>
<button class="btn10">remove span2 than paragraph8</button>
<button class="btn11">empty paragraph 9</button>

</body>*/

// متد remove() باعث حذف شی گرفته شده و یا حذف پارامتر ورودی از شی گرفته شده می شود.
//  زمانی که شی یا پارامتری را remove میکنیم دیگر در inspect element  دیده نمی شود.

/*
 <script>
$(document).ready(function () {
    $(".btn9").click(function () {
        $(".spn-t").remove();
    });
});

$(document).ready(function () {
    $(".btn10").click(function () {
        $("span").remove(".test");
    });
});
 </script>
 */

//متد empty() محتویات درون یک شی را خالی می کند.
//جای خالی شی حذف شده با empty در inspect element مشاهده می شود.

/*
<script>
$(document).ready(function () {
    $(".btn11").click(function () {
        $(".spn-d").empty();
    });
});
</script>
*/
//-------------addClass(),removeClass(),toggleClass()---------------------
//از این متد ها جهت تغییر در استایل دهی صفحه وب استفاده می شود.

/*<button class="btn12">addClass bg-purple to p9</button>
<button class="btn13">removeClass text-blue than p9</button>
<button class="btn14">toggleClass p9</button>*/


//با استفاده از متد addClass() می توانیم یک یا چند class با space را درون string به شی گرفته شده بیافزاییم.

/*$(document).ready(function () {
    $(".btn12").click(function () {
        $(".p9").addClass("bg-purple");
    });
});*/

//با متد removeClass() می توانیم یک class را درون string از شی گرفته شده بگیریم و حذف کنیم.

/*
$(document).ready(function () {
    $(".btn13").click(function () {
        $(".p9").removeClass("text-blue");
    });
});
*/

//با کمک متد toggleClass میتوانیم تغییر حالت بین دو حالت در class شی گرفته شده شویم.

/*
$(document).ready(function () {
    $(".btn14").click(function () {
        $(".p9").toggleClass("text-blue");
    });
});*/

//-----------------------css()-----------------------------------

//متد css() سه روش استفاده دارد که هر کدام کاربرد متفاوتی دارند.
//1.در روش اول یک ویژگی css ای درون string به جای پارامتر ورودی قرار می گیرد و سپس مقدار ان برگردانده میشود.


/*
     $(".btn15").click(function () {
            alert($(".star").css("color"));
        });
*/


//2. در روش دوم یک ویژگی به همراه value ان درون string به جای پارامتر ورودی قرار گرفنه و به شی گرفنه شده القا می شود.


/*
$(".btn16").click(function () {
         $(".btn15").css("color", "red");
     })
*/


//در روش سوم چند ویژگی css به صورت object به جای پارامتر ورودی قرار می گیرد و مجموعه ای از تغیرات به شی گرفته شده اعمال می شود.


/*
$(".btn17").click(function () {
        $(".btn15").css({color: "pink", borderRadius: "20%", border: "2px solid red"});
    })
*/


//درون object ها هم مثل variable ها علامت دش قرار نمیگیرد.

//--------------project-------------------
// در نظر داریم کدی را طراحی کنیم که در ان با کلیک کردن روی هر تگ p محتوای درونی ان در تگ p دیگری با id خاص قرار بگیرد.

/*
<p class="copy-right"> in part ham tamom shod..</p>
<p class="copy-right"> in ok hast..</p>
<p id="result">...</p>
<script>
    $(document).ready(function () {

        $(".copy-right").click(function () {

            var text = $(this).html();

            $("#result").html(text);

        })
    })
</script>*/
