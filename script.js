


//時間帯で画像の表示切り替え
var now = new Date();
var hour = now.getHours();

//img_element_pc要素を作成
let img_element_pc = document.createElement('img');
img_element_pc.className = "img-pc";

if(hour >= 0 && hour <= 5){
    img_element_pc.src = 'images/key3-1.jpg';
}
else if(hour >= 6 && hour <= 16){
    img_element_pc.src = 'images/key1-1.jpg';
}
else if(hour >= 17 && hour <= 19){
    img_element_pc.src = 'images/key2-1.jpg';
}
else if(hour >= 20 && hour <= 23){
    img_element_pc.src = 'images/key3-1.jpg';
}

let img_pc = document.getElementById("mv-section");
img_pc.appendChild(img_element_pc);




//img_element_pc要素を作成
let img_element_tab = document.createElement('img');
img_element_tab.className = "img-tab";

if(hour >= 0 && hour <= 5){
    img_element_tab.src = "images/key3-2.jpg";
}
else if(hour >= 6 && hour <= 16){
    img_element_tab.src = "images/key1-2.jpg";
}
else if(hour >= 17 && hour <= 19){
    img_element_tab.src = "images/key2-2.jpg";
}
else if(hour >= 20 && hour <= 23){
    img_element_tab.src = "images/key3-2.jpg";
}

let img_tab = document.getElementById("mv-section");
img_tab.appendChild(img_element_tab);