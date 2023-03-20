
// 【時間帯で画像の表示切替を行うScript】


// 現在の時刻(～時の部分)の取得
var now = new Date();
var hour = now.getHours();


// [PC用の時間帯別設定]

//img_element_pc要素（'img'タグ）を作成
let img_element_pc = document.createElement('img');

//img_element_pcのクラス名として、"img-pc"を設定
img_element_pc.className = "img-pc";

// 時間帯ごとに挿入する画像のソース（リンク）を変える
// 0-5時台の場合
if(hour >= 0 && hour <= 5){
    // 挿入する画像のソース（リンク）を指定
    img_element_pc.src = 'images/key3-1.jpg';
}
// 6-16時台の場合
else if(hour >= 6 && hour <= 16){
    img_element_pc.src = 'images/key1-1.jpg';
}
// 17-19時台の場合
else if(hour >= 17 && hour <= 19){
    img_element_pc.src = 'images/key2-1.jpg';
}
// 20-23時台の場合
else if(hour >= 20 && hour <= 23){
    img_element_pc.src = 'images/key3-1.jpg';
}

// html中の"mv-section"のidがある部分に「img_element_pc」を追加
let img_pc = document.getElementById("mv-section");
img_pc.appendChild(img_element_pc);


// [モバイル用の時間帯別設定]

//img_element_tab要素（'img'タグ）を作成
let img_element_tab = document.createElement('img');

//img_element_tabのクラス名として、"img-tab"を設定
img_element_tab.className = "img-tab";

// 時間帯ごとに挿入する画像のソース（リンク）を変える
// 0-5時台の場合
if(hour >= 0 && hour <= 5){
    // 挿入する画像のソース（リンク）を指定
    img_element_tab.src = "images/key3-2.jpg";
}
// 6-16時台の場合
else if(hour >= 6 && hour <= 16){
    img_element_tab.src = "images/key1-2.jpg";
}
// 17-19時台の場合
else if(hour >= 17 && hour <= 19){
    img_element_tab.src = "images/key2-2.jpg";
}
// 20-23時台の場合
else if(hour >= 20 && hour <= 23){
    img_element_tab.src = "images/key3-2.jpg";
}

// html中の"mv-section"のidがある部分に「img_element_tab」を追加
let img_tab = document.getElementById("mv-section");
img_tab.appendChild(img_element_tab);