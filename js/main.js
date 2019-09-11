// 初始化
$(document).ready(function(){

    // 隐藏切换按钮
    $("#qiehuan1").hide();
    $("#qiehuan2").hide();
    $("#qiehuan3").hide();

    updatebg();

    updatecart();
});

function updatebg() {

    // 初始化背景色
    var clientHeight = document.body.clientHeight;
    // var clientHeight = $("body").css("height");
    var headerHeightpx = $(".header").css("height");
    var cartHeightpx = $("#cart1").css("height");

    var k1 = headerHeightpx.lastIndexOf("p");
    var headerHeight = headerHeightpx.slice(0,k1);
    var h1 = clientHeight-2*headerHeight-2;

    var k2 = cartHeightpx.lastIndexOf("p");
    var cartHeight = cartHeightpx.slice(0,k2);

    var c = 0;
    for (let i=0;i<7;i++) {
        if(arr[i]==0) continue;
        else c++;
    }
    cartHeight = parseInt(cartHeight);
    h2 = 55+c*(cartHeight+25);
    var result = h1>h2?h1:h2;

    // console.log(clientHeight);
    // console.log(headerHeightpx);
    // console.log(k);
    // console.log(headerHeight);
    console.log(cartHeight);
    console.log(h1, h2);

    $(".background").css("height", result);
    $(".background2").css("height", h1);

}
let h2 = 0;
let cartvalue = 1;
let arr=[0,0,0,0,0,0,0];
let price=0;
// 各按钮效果
function tomain1() {
    $("#qiehuan1").click();
}
function tomian2() {
    updatecart();
    updatebg();
    $("#qiehuan2").click();
}
function tomian3() {
    $("#qiehuan3").click();
}
function updatecart() {
    if ($("#cartnum1").text()=="0") $("#cart1").hide();
    if ($("#cartnum2").text()=="0") $("#cart2").hide();
    if ($("#cartnum3").text()=="0") $("#cart3").hide();
    if ($("#cartnum4").text()=="0") $("#cart4").hide();
    if ($("#cartnum5").text()=="0") $("#cart5").hide();
    if ($("#cartnum6").text()=="0") $("#cart6").hide();
    if ($("#cartnum7").text()=="0") $("#cart7").hide();
    if ($("#cartnum1").text()=="1") $("#cart1").show();
    if ($("#cartnum2").text()=="1") $("#cart2").show();
    if ($("#cartnum3").text()=="1") $("#cart3").show();
    if ($("#cartnum4").text()=="1") $("#cart4").show();
    if ($("#cartnum5").text()=="1") $("#cart5").show();
    if ($("#cartnum6").text()=="1") $("#cart6").show();
    if ($("#cartnum7").text()=="1") $("#cart7").show();
    arr[0]=$("#cartnum1").text();
    arr[1]=$("#cartnum2").text();
    arr[2]=$("#cartnum3").text();
    arr[3]=$("#cartnum4").text();
    arr[4]=$("#cartnum5").text();
    arr[5]=$("#cartnum6").text();
    arr[6]=$("#cartnum7").text();
    price=150*arr[0]+80*arr[1]+80*arr[2]+39.80*arr[3]+6.80*arr[4]+6.80*arr[5]+19.90*arr[6];
    price=price.toFixed(2);
    console.log(price);
    $("#price").text(price);

    updatebg();

    console.log("updated!")
}
function remove(a) {
    switch (a) {
        case 1: $("#cartnum1").text(0); break;
        case 2: $("#cartnum2").text(0); break;
        case 3: $("#cartnum3").text(0); break;
        case 4: $("#cartnum4").text(0); break;
        case 5: $("#cartnum5").text(0); break;
        case 6: $("#cartnum6").text(0); break;
        case 7: $("#cartnum7").text(0); break;
    }
    updatecart();
}



function cartval1() {
    cartvalue = 1;
}
function cartval2() {
    cartvalue = 2;
}
function cartval3() {
    cartvalue = 3;
}
function cartval4() {
    cartvalue = 4;
}
function cartval5() {
    cartvalue = 5;
}
function cartval6() {
    cartvalue = 6;
}
function cartval7() {
    cartvalue = 7;
}
function plus1() {
    $("#cartnum1").text(parseInt($("#cartnum1").text())+1);
    updatecart();
}
function minus1() {
    if($("#cartnum1").text()<="1") return;
    else {
        $("#cartnum1").text(parseInt($("#cartnum1").text())-1);
        updatecart();
    }
}
function plus2() {
    $("#cartnum2").text(parseInt($("#cartnum2").text())+1);
    updatecart();
}
function minus2() {
    if($("#cartnum2").text()<="1") return;
    else {
        $("#cartnum2").text(parseInt($("#cartnum2").text())-1);
        updatecart();
    }
}
function plus3() {
    $("#cartnum3").text(parseInt($("#cartnum3").text())+1);
    updatecart();
}
function minus3() {
    if($("#cartnum3").text()<="1") return;
    else {
        $("#cartnum3").text(parseInt($("#cartnum3").text())-1);
        updatecart();
    }
}
function plus4() {
    $("#cartnum4").text(parseInt($("#cartnum4").text())+1);
    updatecart();
}
function minus4() {
    if($("#cartnum4").text()<="1") return;
    else {
        $("#cartnum4").text(parseInt($("#cartnum4").text())-1);
        updatecart();
    }
}
function plus5() {
    $("#cartnum5").text(parseInt($("#cartnum5").text())+1);
    updatecart();
}
function minus5() {
    if($("#cartnum5").text()<="1") return;
    else {
        $("#cartnum5").text(parseInt($("#cartnum5").text())-1);
        updatecart();
    }
}
function plus6() {
    $("#cartnum6").text(parseInt($("#cartnum6").text())+1);
    updatecart();
}
function minus6() {
    if($("#cartnum6").text()<="1") return;
    else {
        $("#cartnum6").text(parseInt($("#cartnum6").text())-1);
        updatecart();
    }
}
function plus7() {
    $("#cartnum7").text(parseInt($("#cartnum7").text())+1);
    updatecart();
}
function minus7() {
    if($("#cartnum7").text()<="1") return;
    else {
        $("#cartnum7").text(parseInt($("#cartnum7").text())-1);
        updatecart();
    }
}



// 交互
function pay() {
    console.log(price);
    // $.post("#",
    //     {
    //         price: price
    //     },
    //     function(data, status) {
    //         console.log("Data: " + data + "\nStatus: " + status);
    //     }
    // );
}



























