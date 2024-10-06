// script.js
document.getElementById("calculateButton").addEventListener("click", function() {
    // 入力値の取得
    let G = parseInt(document.getElementById("G").value);
    let satu = parseInt(document.getElementById("satu").value);
    let kin = parseInt(document.getElementById("kin").value);
    let sapphire = parseInt(document.getElementById("sapphire").value);
    let emerald = parseInt(document.getElementById("emerald").value);
    let ruby = parseInt(document.getElementById("ruby").value);
    let diamond = parseInt(document.getElementById("diamond").value);
    let reddiamond = parseInt(document.getElementById("reddiamond").value);
    let yellowdiamond = parseInt(document.getElementById("yellowdiamond").value);
    let pearlS = parseInt(document.getElementById("pearlS").value);
    let pearlM = parseInt(document.getElementById("pearlM").value);
    let pearlL = parseInt(document.getElementById("pearlL").value);

    // 合計金額の計算
    let total_many = 5000 * G + 20000 * satu + 100000 * kin + 500000 * sapphire + 800000 * emerald +
                     1000000 * ruby + 2000000 * diamond + 5000 * reddiamond + 20000000 * yellowdiamond +
                     50000 * pearlS + 100000 * pearlM + 1000000 * pearlL;

    // 結果の表示
    document.getElementById("result").innerHTML = "合計金額: " + total_many.toLocaleString() + " G";

    // ランク判定
    let rank = "";
    if (total_many < 5000000) {
        rank = "H";
    } else if (total_many < 20000000) {
        rank = "G";
    } else if (total_many < 40000000) {
        rank = "F";
    } else if (total_many < 50000000) {
        rank = "E";
    } else if (total_many < 60000000) {
        rank = "D";
    } else if (total_many < 70000000) {
        rank = "C";
    } else if (total_many < 100000000) {
        rank = "B";
    } else if (total_many < 130000000) {
        rank = "A";
    } else {
        rank = "S";
    }

    // ランクの表示
    document.getElementById("rank").innerHTML = "ランク: " + rank;
});
