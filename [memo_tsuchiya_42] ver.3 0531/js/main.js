

$("#send").on("click", function () {
    var check1 = $('input[name="check[1]"]:checked').map(function () {
        return $(this).val();
    }).get();
    var check2 = $('input[name="check[2]"]:checked').map(function () {
        return $(this).val();
    }).get();
    var check3 = $('input[name="check[3]"]:checked').map(function () {
        return $(this).val();
    }).get();
    
    if (check1.includes("1") && check2.includes("4") && check3.includes("7")) {
        console.log("小型　近距離");
        result = "小型　近距離　積み合わせ／バラ";
        judgment = '￥２０，０００';
    } else if (check1.includes("1") && check2.includes("5")&& check3.includes("7")) {
        console.log("小型　中距離");
        result = "小型　中距離　積み合わせ／バラ";
        judgment = '￥２４，０００';
        $("#box").html(judgment);
    } else if (check1.includes("1") && check2.includes("6")&& check3.includes("7")) {
        console.log("小型　長距離");
        result = "小型　長距離　積み合わせ／バラ";
        judgment = '￥３１，０００';
        $("#box").html(judgment);
    } else if (check1.includes("2") && check2.includes("4")&& check3.includes("7")) {
        console.log("大型運転手");
        result = "中型　近距離　積み合わせ／バラ";
        judgment = '￥２５，０００';
    } else if (check1.includes("2") && check2.includes("5")&& check3.includes("7")) {
        console.log("中型　近距離");
        result = "中型　近距離　積み合わせ／バラ";
        judgment = '￥３０，０００';
    } else if (check1.includes("2") && check2.includes("6")&& check3.includes("7")) {
        console.log("中型　中距離");
        result = "中型　長距離　積み合わせ／バラ";
        judgment = '￥３６，０００';
    } else if (check1.includes("3") && check2.includes("4")&& check3.includes("7")) {
        console.log("大型　近距離");
        result = "大型　近距離　積み合わせ／バラ";
        judgment = '￥３０，０００';
    } else if (check1.includes("3") && check2.includes("5")&& check3.includes("7")) {
        console.log("大型　中距離");
        result = "大型　中距離　積み合わせ／バラ";
        judgment = '￥３６，０００';
    } else if (check1.includes("3") && check2.includes("6")&& check3.includes("7")) {
        console.log("大型　長距離　積み合わせ／バラ");
        result = "大型　遠距離　積み合わせ／バラ";
        judgment = '￥４２，０００';
    } else if (check1.includes("1") && check2.includes("4") && check3.includes("9")) {
        console.log("小型　近距離");
        result = "小型　近距離";
        judgment = '￥１５，０００';
    } else if (check1.includes("1") && check2.includes("5")&& check3.includes("9")) {
        console.log("小型　中距離");
        result = "小型　中距離";
        judgment = '￥１９，０００';
        $("#box").html(judgment);
    } else if (check1.includes("1") && check2.includes("6")&& check3.includes("9")) {
        console.log("小型　長距離");
        result = "小型　長距離";
        judgment = '￥２６，０００';
        $("#box").html(judgment);
    } else if (check1.includes("2") && check2.includes("4")&& check3.includes("9")) {
        console.log("大型運転手");
        result = "中型　近距離";
        judgment = '￥２０，０００';
    } else if (check1.includes("2") && check2.includes("5")&& check3.includes("9")) {
        console.log("中型　近距離");
        result = "中型　近距離";
        judgment = '￥２５，０００';
    } else if (check1.includes("2") && check2.includes("6")&& check3.includes("9")) {
        console.log("中型　中距離");
        result = "中型　長距離";
        judgment = '￥３１，０００';
    } else if (check1.includes("3") && check2.includes("4")&& check3.includes("9")) {
        console.log("大型　近距離");
        result = "大型　近距離";
        judgment = '￥２２，０００';
    } else if (check1.includes("3") && check2.includes("5")&& check3.includes("9")) {
        console.log("タクシー運転手");
        result = "大型　中距離";
        judgment = '￥２８，０００';
    } else if (check1.includes("3") && check2.includes("6")&& check3.includes("9")) {
        console.log("大型　長距離");
        result = "大型　長距離";
        judgment = '￥３４，０００';
    } else if (check1.includes("1") && check2.includes("4") && check3.includes("8")) {
        console.log("小型　近距離");
        result = "小型　近距離　助手付き";
        judgment = '￥２５，０００';
    } else if (check1.includes("1") && check2.includes("5")&& check3.includes("8")) {
        console.log("小型　中距離");
        result = "小型　中距離　助手付き";
        judgment = '￥２９，０００';
        $("#box").html(judgment);
    } else if (check1.includes("1") && check2.includes("6")&& check3.includes("8")) {
        console.log("小型　長距離　助手付き");
        result = "小型　長距離　助手付き";
        judgment = '￥３６，０００';
        $("#box").html(judgment);
    } else if (check1.includes("2") && check2.includes("4")&& check3.includes("8")) {
        console.log("大型運転手");
        result = "中型　近距離　助手付き";
        judgment = '￥３０，０００';
    } else if (check1.includes("2") && check2.includes("5")&& check3.includes("8")) {
        console.log("中型　近距離");
        result = "中型　近距離助手付き";
        judgment = '￥３５，０００';
    } else if (check1.includes("2") && check2.includes("6")&& check3.includes("8")) {
        console.log("中型　中距離　助手付き");
        result = "中型　長距離　助手付き";
        judgment = '￥４１，０００';
    } else if (check1.includes("3") && check2.includes("4")&& check3.includes("8")) {
        console.log("大型　近距離　助手付き");
        result = "大型　近距離　助手付き";
        judgment = '￥３２，０００';
    } else if (check1.includes("3") && check2.includes("5")&& check3.includes("8")) {
        console.log("タクシー運転手");
        result = "大型　中距離　助手付き";
        judgment = '￥３８，０００';
    } else if (check1.includes("3") && check2.includes("6")&& check3.includes("8")) {
        console.log("大型　長距離　助手付き");
        result = "大型　遠距離　助手付き";
        judgment = '￥４４，０００';
    } 
    
    $("#box").html(judgment);
    $("#cost").html(judgment);
    $("#company").html(result);
    


});
    


    $("#save").on("click",function(){
        const key = $("#key").val();
        const value1 = $("#company").val();
        const value2 = $("#cost").val();
        localStorage.setItem(key,value1,value2);
        const html = '<tr><th>'+key+'</th><td>'+value1+'</td><td>'+value2+'</td></tr>';
        $("#list").append(html);
    });
    
    //2.clear クリックイベント
    $("#clear").on("click",function(){
        localStorage.clear();
        $("#list").empty();
    });
    
    //3.ページ読み込み：保存データ取得表示
    for(let i=0; i<localStorage.length; i++){
        const key   = localStorage.key(i);
        const value1 = localStorage.getItem(key);
        const value2 = localStorage.getItem(key);
        const html = '<tr><th>'+key+'</th><td>'+value1+'</td><td>'+value2+'</td></tr>';
        $("#list").append(html);
    }
    // チェックボックスの複数選択の値を取る
    // $(function(){
    //     $('input[name=check]').on('change',function(){
    //         var vals = $('input[name=check]:checked').map(function(){
    //             return $(this).val();
    //         }).get();
    //         (vals);
    //     });
    //     });
