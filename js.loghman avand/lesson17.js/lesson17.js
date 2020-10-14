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
