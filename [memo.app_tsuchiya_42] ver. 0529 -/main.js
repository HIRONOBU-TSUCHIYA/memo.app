

// チェックを二か所入れるとアラート
// $("#send").on("click", function () {
//     var check = $('input[name="check[]"]:checked').map(function () {
//         return $(this).val();
//     }).get();

//     console.log(check);

//     if (check.includes("1") && check.includes("2")) {
//         console.log("2重チェック");
//         alert("２つ以上のチェックは入れないでください");
//     } else if (check.includes("3") && check.includes("4")) {
//         console.log("2重チェック");
//         alert("２つ以上のチェックは入れないでください");
//     } else if (check.includes("5") && check.includes("6")) {
//         console.log("2重チェック");
//         alert("２つ以上のチェックは入れないでください");
//     }
// });



// この部分↓でチェックボックスの値を３つ数字で取り出す→一緒なら画像変更
// $("#send").on("click", function () {
//     var check1 = $('input[name="check[1]"]:checked').map(function () {
//         return $(this).val();
//     }).get();
//     var check2 = $('input[name="check[2]"]:checked').map(function () {
//         return $(this).val();
//     }).get();
//     var check3 = $('input[name="check[3]"]:checked').map(function () {
//         return $(this).val();
//     }).get();
//     var check4 = $('input[name="check[4]"]:checked').map(function () {
//         return $(this).val();
//     }).get();
//     var check5 = $('input[name="check[5]"]:checked').map(function () {
//         return $(this).val();
//     }).get();
//     var check6 = $('input[name="check[6]"]:checked').map(function () {
//         return $(this).val();
//     }).get();

    
//     if (check1.includes("2") && check2.includes("4") && check3.includes("6")
//     && check5.includes("9") && check6.includes("17")) {
//         console.log("経営幹部");
//         result = "経営幹部";
//         judgment = '<img src="img/top-1.png">';
//     } else if (check1.includes("2") && check2.includes("4") && check3.includes("5")
//     && check4.includes("7") && check6.includes("17")) {
//         console.log("長距離運転手");
//         result = "長距離運転手";
//         judgment = '<img src="img/longdriver-1.png">';
//         $("#box").html(judgment);
//     } else if (check1.includes("2") && check2.includes("4") && check3.includes("6")
//     && check5.includes("9")&& check6.includes("15")) {
//         console.log("現場責任者");
//         result = "現場責任者";
//         judgment = '<img src="img/manager-1.png">';
//         $("#box").html(judgment);
//     } else if (check1.includes("2") && check2.includes("4") && check3.includes("5")
//     && check4.includes("7") && check6.includes("13")) {
//         console.log("大型運転手");
//         result = "大型運転手";
//         judgment = '<img src="img/driver-1.png">';
//     } else if (check1.includes("2") && check2.includes("3") && check3.includes("5")
//     && check4.includes("7") && check6.includes("11")) {
//         console.log("大型バス");
//         result = "大型バス";
//         judgment = '<img src="img/bus-1.png">';
//     } else if (check1.includes("2") && check2.includes("3") && check3.includes("5")
//     && check4.includes("7") && check6.includes("16")) {
//         console.log("ダンプ運転手");
//         result = "ダンプ運転手";
//         judgment = '<img src="img/dump-1.png">';
//     } else if (check1.includes("2") && check2.includes("3") && check3.includes("5")
//     && check4.includes("7") && check6.includes("12")) {
//         console.log("トレーラー");
//         result = "トレーラー";
//         judgment = '<img src="img/trailer-1.png">';
//     } else if (check1.includes("1") && check2.includes("3") && check3.includes("5")
//     && check4.includes("8") && check6.includes("11")) {
//         console.log("タクシー運転手");
//         result = "タクシー運転手";
//         judgment = '<img src="img/taxi-1.png">';
//     } else if (check1.includes("2") && check2.includes("3"),("4") && check3.includes("5")
//     && check4.includes("8") && check6.includes("16")) {
//         console.log("引っ越し運転手");
//         result = "引っ越し運転手";
//         judgment = '<img src="img/move-1.png">';
//     } else if (check1.includes("1") && check2.includes("3") && check3.includes("6")
//     && check5.includes("10") && check6.includes("16")) {
//         console.log("引っ越し補助");
//         result = "引っ越し補助";
//         judgment = '<img src="img/movehelp-1.png">';
//     } else if (check1.includes("1") && check2.includes("3") && check3.includes("6")
//     && check5.includes("9")) {
//         console.log("一般事務職");
//         result = "一般事務職";
//         judgment = '<img src="img/jimu-1.png">';
//     }else if (check1.includes("1") && check2.includes("3") && check3.includes("5") 
//     && check4.includes("8") && check6.includes("17")) {
//         console.log("ルート配送");
//         result = "ルート配送";
//         judgment = '<img src="img/rootdriver-1.png">';
//         $("#box").html(judgment);
//     }else if (check1.includes("1") && check2.includes("3") && check3.includes("6") 
//     && check5.includes("10") && check6.includes("14")) {
//         console.log("整備士");
//         result = "整備士";
//         judgment = '<img src="img/seibi-1.png">';
//         $("#box").html(judgment);
//     }else if (check1.includes("1") && check2.includes("3") && check3.includes("6") 
//     && check5.includes("10") && check6.includes("13")) {
//         console.log("構内作業");
//         result = "構内作業";
//         judgment = '<img src="img/folk-1.png">';
//         $("#box").html(judgment);
//     } else if (check1.includes("1") && check2.includes("4") && check3.includes("6")
//     && check5.includes("9")) {
//         console.log("管理助手");
//         result = "管理助手";
//         judgment = '<img src="img/submanager-1.png">';
//         $("#box").html(judgment);
//     } else if (check1.includes("1") && check2.includes("4") && check3.includes("5") 
//     && check4.includes("8")) {
//         console.log("軽貨物便");
//         result = "軽貨物便";
//         judgment = '<img src="img/keirootdriver-1.png">';
//     } 
//     $("#box").html(judgment);
//     $("#graydisplay,#graydispray img").html($("#box").prop('outerHTML'));
//     $("#graydisplay").fadeIn(200);
//     $("#graydisplay, #graydisplay img").click(function() {
//     $("#graydisplay").fadeOut(200);
//     });
// });


    // $("#send2").on("click",function(){
    // var random = Math.floor(Math.random() * 6 + 1);
    // console.log(random, "ランダムな数字の箱");
    // var result =  ""
    // var judgment2 = ""
    // if (random === 1) {
    // console.log("飛行機");
    // result = "飛行機";
    // judgment2 = '<img src="img/starfly.jpg">';
    // } else if (random === 2) {
    // console.log("大型車");
    // result = "大型フルサイズ";
    // judgment2 = '<img src="img/tsuchiya-1.jpg">';
    // } else if (random === 3) {
    // console.log("２ｔ車");
    // result = "２ｔ車";
    // judgment2 = '<img src="img/2t-1.jpg">';
    // }else if (random === 4) {
    // console.log("ベンツ");
    // result = "ベンツ";
    // judgment2 = '<img src="img/benz-1.jpg">';
    // } else if (random === 5) {
    // console.log("バイク");
    // result = "バイク";
    // judgment2 = '<img src="img/bike-1.jpg">';
    // }else if (random === 6) {
    // console.log("自転車");
    // result = "自転車";
    // judgment2 = '<img src="img/bianchi-1.jpg">';
    // } 
    // $("#box2").html(judgment2);
    // });

    $("#save").on("click" , function(){
        //入力された文字の取得 keyは鍵；日付とかにできる
        const key = $("#key").val();
        //中身のチェック
        console.log(key,"keyの中");
        //
        const values = $("#memo").val();
        console.log(values, "valueの中身");
        localStorage.setItem(key,values);
        const html = `
        <tr>
        <th>${key}</th>
        <td>${values}</td>
        </tr>
            `
        $("#list").append(html)
        $("#key").val("")
        $("#memo").val("")
        })
        
        //画面上に表示してみましょう append＝追加
        
        
        
        //2.clear クリックイベント
        $("#clear").on("click",function(){
        localStorage.clear();
        $("#list").empty();
        })
        
        
        //3.ページ読み込み：保存データ取得表示 i=indexの略
        for(let i = 0; i< localStorage.length; i++){
        const key = localStorage.key(i);
        const values = localStorage.getItem(key)
        const html = `
        <tr>
        <th>${key}</th>
        <td>${values}</td>
        </tr>
            `
        $("#list").append(html)
        }