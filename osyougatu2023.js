var BoxImage=document.getElementById("BoxImage");
var kamaboko=document.getElementById("kamaboko");
var kurikinton=document.getElementById("kurikinton");
// var clickHere=document.getElementById("clickHere");

kurikinton.style.visibility ="hidden";
BoxImage.style.visibility ="hidden";
kamaboko_clicked=false;
kamaboko.addEventListener('click',() =>{sampleEvent()});
 
//  イメージを表示にする関数
function sampleEvent() {
    if(kamaboko_clicked!==true){
        var fn = function() {
            console.log("1秒経過しました");
            console.log("i'm very cold.");
    // BoxImage.style.visibility="visible"
    kurikinton.style.visibility="visible"
    // var kamaboko=document.getElementById("kamaboko");
}
    kamaboko_clicked=true;
          };
          var tm = 1000;
          setTimeout(fn,tm);
    
  
}





function kamabokoTouch(){
    // メモ　removeAttributeとは　属性(Attribute)をいじれるシリーズ　これは消去用
    kamaboko.removeAttribute("src");
    kamaboko.removeAttribute("class");
    kamaboko.setAttribute('src', 'images/font_a.png');
    kamaboko.setAttribute('width', '30%');
}


