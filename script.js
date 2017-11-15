
/*
Wyświetlanie rysunków:

- zrobić kostkę
- zrobić display obrazka z numerem kostki
*/
//- shuffle
//https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
//https://stackoverflow.com/questions/5451445/how-to-display-image-with-javascript


var pics = [0,0,1,1,2,2,3,3];
   
var i, j, k, m, qaz;
var riddler;
qaz = 'start';

function shuffle(arr){
    for (i=arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random() * i); 
        k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
    }
    return arr;
}

shuffle(pics);
console.log(pics);


function showPics(){
    for(m = 0; m < pics.length; m++){
        var sp = document.querySelector('#screen'+m);
        //sp.className += pics[m];
        sp.classList.add(pics[m]);
        sp.src = "vec-" + pics[m] + ".svg";
    } 
};

showPics(pics);
console.log(pics);


function changePic(i){
    document.querySelector("#butt"+i).style.display = "none";
    document.querySelector("#btn"+i).style.display = "none";
    document.querySelector("#screen"+i).style.display = "inline"
    onClickEv(i);
};



function onClickEv(i){
   // Choose secon picture same as first.
    if (qaz == pics[i]) {
        window.setTimeout(hideSamePics, 500);
        var hide = document.getElementsByClassName('pics'+qaz);
        function hideSamePics(){
            for(var q=0; q < hide.length; q++){
             hide[q].style.display = 'none';
                }
            }
         qaz = 'start';
        }

    // Choose second picture different than first.
    else if(qaz != 'start' && qaz != pics[i]){
        var hide = document.getElementsByClassName('pics'+qaz);
            for(var q=0; q < hide.length; q++){
                window.setTimeout(hideDifferentPics, 500);
                function hideDifferentPics(){  
                    //Hide pictures.
                    document.querySelector("#screen"+riddler).style.display = "none";
                    document.querySelector("#screen"+i).style.display = "none";
                    //Display back buttons.
                    document.querySelector("#butt"+i).style.display = "inline";
                    document.querySelector("#btn"+i).style.display = "inline";
                    document.querySelector("#butt"+riddler).style.display = "inline";
                    document.querySelector("#btn"+riddler).style.display = "inline";
                    }
                
            qaz = 'start';        
            }
    }

     // Choose first picture.
    else{
        qaz = pics[i];
        riddler = i;
        console.log(qaz);
    } 
    
};



