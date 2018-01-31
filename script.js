(function() {
    var pics = [0,1,2,3,4,5,6,7],
        i, j, k, questionSign,
        picValue = 'start',
        allBtnClass = document.getElementsByClassName('rev'),
        picsVal = pics.map(function(current, index) {
        return current =  (Math.ceil((index +1)/ 2) -1);
    });


    // Shuffling all pics
    function shuffle(arr){
        for (i=arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random() * i); 
            k = arr[i];
            arr[i] = arr[j];
            arr[j] = k;
        }
        return arr;
    }

    shuffle(picsVal);


    function showPics(){
        for(var i = 0; i < picsVal.length; i++){
            var sp = document.querySelector('#screen'+i);
            sp.classList.add(picsVal[i]);
            sp.src = "vec-" + picsVal[i] + ".svg";
        } 
    };

    showPics(picsVal);

    
    //Clicking on question mark
    function hideQuestionMarks() {
        for(var i = 0; i < allBtnClass.length; i++) {
                allBtnClass[i].addEventListener('click', activateChangePic);
            }
        }   

    function activateChangePic(event) {
        var i = event.target.id;
            i = i.substr(4,1);
            changePic(i);
    }

    function changePic(i){
       document.querySelector("#btn"+i).style.display = "none"; 
       document.querySelector("#screen"+i).style.display = "inline"
        onClickEv(i);
    }

    function onClickEv(i){
        // Choose first picture.
        if (picValue ==='start') {
            picValue = picsVal[i];
            questionSign = i; 
        }
       // Choose second picture same as first.
        else if (picValue == picsVal[i]) {
            window.setTimeout(hideSamePics, 500);
            var hide = document.getElementsByClassName(picValue);
            function hideSamePics(){
                for(var q=0; q < hide.length; q++){
                 hide[q].style.display = 'none';
                    }
                }
             picValue = 'start';
            }

        // Choose second picture different than first.
        else {
            var hide = document.getElementsByClassName(picValue);
                for(var q=0; q < hide.length; q++){
                    window.setTimeout(hideDifferentPics, 500);
                    function hideDifferentPics(){  
                        //Hide pictures.
                        document.querySelector("#screen"+questionSign).style.display = "none";
                        document.querySelector("#screen"+i).style.display = "none";
                        //Display back buttons.
                        document.querySelector("#btn"+i).style.display = "inline";
                        document.querySelector("#btn"+questionSign).style.display = "inline";
                        }
                    picValue = 'start';        
                }
        }  
    }
    
    hideQuestionMarks();

})();





