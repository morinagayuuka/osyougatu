var BoxImage=document.getElementById("BoxImage");
var CurrentYear=document.getElementById("CurrentYear");
var kamaboko=document.getElementById("kamaboko");
var kamabokoEndding=document.getElementById("kamabokoEndding");
var kurikinton=document.getElementById("kurikinton");
var tadukuri=document.getElementById("tadukuri");
var kuromame=document.getElementById("kuromame");
var kouhakunamsu=document.getElementById("kouhakunamsu");
var kobumaki=document.getElementById("kobumaki");
var kazunoko=document.getElementById("kazunoko");
var kurimusiyoukan=document.getElementById("kurimusiyoukan");
var nisime=document.getElementById("nisime");
var endimg=document.getElementById("endimg");

// 配列
const guzai=[kamaboko,kurikinton,tadukuri,kuromame,kouhakunamsu,kobumaki,kazunoko,kurimusiyoukan,nisime,endimg,endimg];
const fontHiragana=["images/font_a.png",'images/font_ke.png',"images/font-ma.png",'images/font-si.png','images/font-te.png','images/font-o.png','images/font-me.png','images/font-de.png','images/font-to.png','images/font-u.png'];
// 初期値の設定
var currentNum=0
// kamaboko_clicked=false;
NowClicked=false;
current_Clicked=0;
var Item_clicked=0;
// 初期は表示しない絵柄の設定
for(let z=1;z<guzai.length;z++){
guzai[z].style.visibility ="hidden";};
// 今の西暦
var today = new Date();
var year = today.getFullYear();
CurrentYear.textContent=year;

// kamaboko.addEventListener('click',() =>{sampleEvent()});
 
// 次の絵柄を表示する関数
function sampleEvent() {
    // console.log(current_Clicked);
    // console.log(currentNum);
    if(current_Clicked==currentNum){
        var fn = function() {
            // currentGuzai=currentNum+1;
            // console.log(currentGuzai);
    guzai[currentNum+1].style.visibility="visible";
   
}
    // kamaboko_clicked=true;
    current_Clicked++;
    NowClicked=false;
          };
        //   var tm = 1500;
          var tm = 500;
          setTimeout(fn,tm);
        
  
}


var y=0
function guzaiTouch0(){
    // メモ　removeAttributeとは　属性(Attribute)をいじれるシリーズ　これは消去用
    if(NowClicked==false){
    NowClicked=true;
    currentNum=0;
    CharacterConversion();
    sampleEvent();
    }}
function guzaiTouch1(){
        // メモ　removeAttributeとは　属性(Attribute)をいじれるシリーズ　これは消去用
        if(NowClicked==false){currentNum=1;
        CharacterConversion();
        sampleEvent();
        }}
function guzaiTouch2(){
// メモ　removeAttributeとは　属性(Attribute)をいじれるシリーズ　これは消去用
if(NowClicked==false){currentNum=2;
CharacterConversion();
sampleEvent();
            }}     
function guzaiTouch3(){
                // メモ　removeAttributeとは　属性(Attribute)をいじれるシリーズ　これは消去用
                if(NowClicked==false){currentNum=3;
                CharacterConversion();
                sampleEvent();
                }}
function guzaiTouch4(){
                    // メモ　removeAttributeとは　属性(Attribute)をいじれるシリーズ　これは消去用
                    if(NowClicked==false){currentNum=4;
                    CharacterConversion();
                    sampleEvent();
                    }}
function guzaiTouch5(){
                        // メモ　removeAttributeとは　属性(Attribute)をいじれるシリーズ　これは消去用
                        if(NowClicked==false){currentNum=5;
                        CharacterConversion();
                        sampleEvent();
                        }}
function guzaiTouch6(){
                            // メモ　removeAttributeとは　属性(Attribute)をいじれるシリーズ　これは消去用
                            if(NowClicked==false){ currentNum=6;
                            CharacterConversion();
                            sampleEvent();
                            }}
function guzaiTouch7(){
                                // メモ　removeAttributeとは　属性(Attribute)をいじれるシリーズ　これは消去用
                                if(NowClicked==false){currentNum=7;
                                CharacterConversion();
                                sampleEvent();
                                }}
function guzaiTouch8(){
                                    // メモ　removeAttributeとは　属性(Attribute)をいじれるシリーズ　これは消去用
                                    if(NowClicked==false){  currentNum=8;
                                    CharacterConversion();
                                    sampleEvent();
                                    }}
 function guzaiTouch9(){
                                        // メモ　removeAttributeとは　属性(Attribute)をいじれるシリーズ　これは消去用
                                        if(NowClicked==false){  currentNum=9;
                                        CharacterConversion();
                                        sampleEvent();
                                        }       }
    // var i=0

// 具材の絵柄をひらがなに変換して各々の表示設定をする関数
function CharacterConversion(){
        if(currentNum==Item_clicked){
            //srcとclassを消す
           guzai[currentNum].removeAttribute("src");
           guzai[currentNum].removeAttribute("class");
        //絵柄を変更する
           guzai[Item_clicked].setAttribute('src', fontHiragana[Item_clicked]);
    switch(Item_clicked){
        case 0:
            guzai[0].setAttribute('width', '60%');
         break;
        case 1:
            // guzai[1].setAttribute('src',fontHiragana[1] );
            guzai[1].setAttribute('width', '40%');
           
        break;
        case 2:
            // guzai[2].setAttribute('src',fontHiragana[2] );
            guzai[2].setAttribute('width', '40%');
           
        break;
        case 3:
            // guzai[3].setAttribute('src',fontHiragana[3] );
            guzai[3].setAttribute('width', '40%');
        break;
        case 4:
            // guzai[4].setAttribute('src',fontHiragana[4] );
            guzai[4].setAttribute('width', '40%');
        break;
        case 5:
            // guzai[4].setAttribute('src',fontHiragana[4] );
            guzai[5].setAttribute('width', '40%');
        break;
        case 6:
            // guzai[4].setAttribute('src',fontHiragana[4] );
            guzai[6].setAttribute('width', '40%');
        break;
        case 7:
            // guzai[4].setAttribute('src',fontHiragana[4] );
            guzai[7].setAttribute('width', '40%');
        break;
        case 8:
            // guzai[4].setAttribute('src',fontHiragana[4] );
            guzai[8].setAttribute('width', '40%');
        break;
       
    }
    // i++;
    if(Item_clicked==9){
        guzai[9].setAttribute('width', '40%');
         BoxImage.removeAttribute("style");
         BoxImage.setAttribute('style', "background-image:url('images/oseticoverset.png')");
        // BoxImage.classList.replace('BoxImage', 'BoxImage2');
    } 
         
         
   
    Item_clicked++;
}
}

