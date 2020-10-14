--------------------------------jQuery----------------------------------
    //syntax:   $(selector).action();

// می خواهیم یک دکمه طراحی کنیم که با فشردن ان به انتهای تمام تگهای span نام متینا اضافه شود:
// ابتدا فایل jquery را در صفحه لود می کنیم.
//    سپس میخواهیم با فشردن دکمه ی ذیگر بدون افزون attribute رویدادی به آن از روش دیگر به انتهای تمام تگهای span نام مهدی اضافه شود.
//    می خواهیم به انتهای تمام تگهای p جمله ی من و تو اضافه شود.
/*<head>

<style>
*{
    padding:5px;
}
    .text-red{
    color:red;
}

.text-blue{
color:blue;
}

.text-green{
color:green;
}

.bg-pink{
    background-color:pink;
}

.bg-gray{
    background-color:gray;
}

.bg-yellow{
    background-color:yellow;
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
    <p class="p3 bg-gray"> paragraph3</p>
    <button class="btn" onclick="addMatinaToSpan()"> add Matina</button>

    <script>
function addMatinaToSpan() {
      $(".spn").append("<strong>Matina</strong>");

  }

$('p').append("<strong>Man & To</strong>");

$("button.btn1").click(function () {
       $(".spn").append("<strong>Mehdi</strong>");
   });

    </script>

</body>*/

    //-----------------------------------------------------------------
//در jquery به جای selector می توانیم یکelement را به طور مستقیم درون double-qoutation بنویسیم و توابع رو روی ان صدا بزنیم.