'use script'
//実際に使ってる関数
//実験１
function jikkenn1_2(){
    //ボタンの名前変更
    $('#button').val('Wait');

    //アルファベットを表示する場所を取得
    var list_element = document.getElementById("box");

    //実際の処理
    const printA = () => {
        c = 0;

    //計測スタート
        performance.mark("start");

    //アルファベットを表示
        document.getElementById('box').textContent = 'A';

    //表示にかかる時間計測のポイント
        performance.mark("point1");
    
    //表示後の処理
        document.addEventListener('keydown',(event) => {
            if(c==0){
            if(event.key==='y'){
            c = 1;

    //計測終了位置
            performance.mark("end");

    //時間計算・表示
            let time_all = performance.measure("allTime", "start", "end");
            let time_1 = performance.measure("func1Time", "start", "point1");
            let time_2 = performance.measure("func1Time", "point1", "end");
            //桁処理
            realtime = Math.floor(time_2.duration*10)/10;
            ragtime = Math.floor(time_1.duration*10)/10;
            all_time = Math.floor(time_all.duration*10)/10;

            //全桁表示（コンソール内）
            console.log('表示処理前～入力：'+time_all.duration);
            console.log('表示処理時間：'+time_1.duration);
            console.log('表示処理後～入力：'+time_2.duration);
        
            //アルファベットを消す
            list_element.removeChild(list_element.lastChild);

            //結果の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend',realtime+' </br>');

            //ボタンの名前を戻す
            $('#button').val('Start');
            }else{
            list_element.removeChild(list_element.lastChild);
            document.getElementById('kekka').insertAdjacentHTML('beforeend','yを押してください </br>');
            $('#button').val('Start');
            }
            
        }
        },{
            once: true
        })
        
        
    } 

    //ランダム秒置いてアルファベットを表示
    let a = Math.floor(Math.random()*3 + 2);
    a = a*1000;
    setTimeout(printA,a);

}

//実験２
function jikkenn2(){
    //ボタンの名前変更
    $('#button').val('Wait');

    //アルファベットの定義
    let alpha = [['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
                ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']];
    
    //表示するアルファベットを決定
    let alpha_kind = Math.floor(Math.random()*23);
    let big_small = Math.floor(Math.random()*2);

    //アルファベットを表示する場所を取得
    var list_element = document.getElementById("box");
    //console.log('big_small:'+big_small);
    //大文字が表示されたとき
    if(big_small===0){
        //実際の処理
            const printA = () => {
            c = 0;
        //計測スタート
            performance.mark("start");

        //アルファベットを表示
            document.getElementById('box').textContent = alpha[big_small][alpha_kind];

        //表示にかかる時間計測のポイント
            performance.mark("point1");
    
        //表示後の処理
            document.addEventListener('keydown',(event) => {
            if(c===0){
            if(event.key==='y'){
            c = 1;

        //計測終了位置
                performance.mark("end");

        //時間計算・表示
            let time_all = performance.measure("allTime", "start", "end");
            let time_1 = performance.measure("func1Time", "start", "point1");
            let time_2 = performance.measure("func1Time", "point1", "end");
            //桁処理
            realtime = Math.floor(time_2.duration*10)/10;
            ragtime = Math.floor(time_1.duration*10)/10;
            all_time = Math.floor(time_all.duration*10)/10;

            //全桁表示（コンソール内）
            console.log('表示処理前～入力：'+time_all.duration);
            console.log('表示処理時間：'+time_1.duration);
            console.log('表示処理後～入力：'+time_2.duration);
        
            //アルファベットを消す
            list_element.removeChild(list_element.lastChild);

            //結果の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend',realtime+' </br>');

            //ボタンの名前を戻す
            $('#button').val('Start');
            }else{
            list_element.removeChild(list_element.lastChild);
            document.getElementById('kekka').insertAdjacentHTML('beforeend','間違えてますよ～ </br>');
            $('#button').val('Start');
            }
            
        }
        },{
            //一回の入力に限定
            once: true
        })
        
        
        } 

        //ランダム秒置いてアルファベットを表示
        let a = Math.floor(Math.random()*3 + 2);
        a = a*1000;
        setTimeout(printA,a);
    }else if(big_small===1){
        //実際の処理
        const printA = () => {
        c = 0;
        //計測スタート
        performance.mark("start");

        //アルファベットを表示
        document.getElementById('box').textContent = alpha[big_small][alpha_kind];

        //表示にかかる時間計測のポイント
        performance.mark("point1");
    
        //表示後の処理
        document.addEventListener('keydown',(event) => {
            if(c==0){
            if(event.key==='u'){
            c = 1;

        //計測終了位置
            performance.mark("end");

        //時間計算・表示
            let time_all = performance.measure("allTime", "start", "end");
            let time_1 = performance.measure("func1Time", "start", "point1");
            let time_2 = performance.measure("func1Time", "point1", "end");

            //桁処理
            realtime = Math.floor(time_2.duration*10)/10;
            ragtime = Math.floor(time_1.duration*10)/10;
            all_time = Math.floor(time_all.duration*10)/10;

            //全桁表示（コンソール内）
            console.log('表示処理前～入力：'+time_all.duration);
            console.log('表示処理時間：'+time_1.duration);
            console.log('表示処理後～入力：'+time_2.duration);
        
            //アルファベットを消す
            list_element.removeChild(list_element.lastChild);

            //結果の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend',realtime+' </br>');

            //ボタンの名前を戻す
            $('#button').val('Start');
            }else{
            list_element.removeChild(list_element.lastChild);
            document.getElementById('kekka').insertAdjacentHTML('beforeend','間違えてますよ～ </br>');
            $('#button').val('Start');
            }
            
            }
        },{
            //1回の入力に限定
            once: true
        })
        
        
    } 

    //ランダム秒置いてアルファベットを表示
    let a = Math.floor(Math.random()*3 + 2);
    a = a*1000;
    setTimeout(printA,a);
    }

    
}


//実験３
function jikkenn3(){
    //ボタンの名前変更
    $('#button').val('Wait');
    
    //アルファベットの定義
    let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    //表示するアルファベットを決定
    let alpha_kind_1 = Math.floor(Math.random()*46);
    let alpha_kind_2 = Math.floor(Math.random()*46);

    if(Math.floor(Math.random()*2)===0){
        alpha_kind_2 = alpha_kind_1;
    }
    //console.log('alpha_kind_1:'+alpha_kind_1);
    //console.log('alpha_kind_2:'+alpha_kind_2);

    //アルファベットを表示する場所を取得
    var list_element1 = document.getElementById("box1");
    var list_element2 = document.getElementById("box2");

    //２つが同じ文字のとき
    if(alpha_kind_1===alpha_kind_2){
        //実際の処理
            const printA = () => {
            c = 0;
        //計測スタート
            performance.mark("start");

        //アルファベットを表示
            list_element1.textContent = alpha[alpha_kind_1];
            list_element2.textContent = alpha[alpha_kind_2];

        //表示にかかる時間計測のポイント
            performance.mark("point1");
    
        //表示後の処理
            document.addEventListener('keydown',(event) => {
            if(c===0){
            if(event.key==='y'){
            c = 1;

        //計測終了位置
                performance.mark("end");

        //時間計算・表示
            let time_all = performance.measure("allTime", "start", "end");
            let time_1 = performance.measure("func1Time", "start", "point1");
            let time_2 = performance.measure("func1Time", "point1", "end");
            //桁処理
            realtime = Math.floor(time_2.duration*10)/10;
            ragtime = Math.floor(time_1.duration*10)/10;
            all_time = Math.floor(time_all.duration*10)/10;

            //全桁表示（コンソール内）
            console.log('表示処理前～入力：'+time_all.duration);
            console.log('表示処理時間：'+time_1.duration);
            console.log('表示処理後～入力：'+time_2.duration);
        
            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);

            //結果の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend',realtime+' </br>');

            //ボタンの名前を戻す
            $('#button').val('Start');


            }else{
            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);
            //不正解の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend','間違ってますよ～～ </br>');
            //ボタンの名前を戻す
            $('#button').val('Start');
            

            }
            
        }
        },{
            //一回の入力に限定
            once: true
        })
        
        
        } 

        //ランダム秒置いてアルファベットを表示
        let a = Math.floor(Math.random()*3 + 2);
        a = a*1000;
        setTimeout(printA,a);
    }else{
        //実際の処理
        const printA = () => {
        c = 0;
        //計測スタート
        performance.mark("start");

        //アルファベットを表示
        list_element1.textContent = alpha[alpha_kind_1];
        list_element2.textContent = alpha[alpha_kind_2];

        //表示にかかる時間計測のポイント
        performance.mark("point1");
    
        //表示後の処理
        document.addEventListener('keydown',(event) => {
            if(c==0){
            if(event.key==='u'){
            c = 1;

            //計測終了位置
            performance.mark("end");

            //時間計算・表示
            let time_all = performance.measure("allTime", "start", "end");
            let time_1 = performance.measure("func1Time", "start", "point1");
            let time_2 = performance.measure("func1Time", "point1", "end");
            //桁処理
            realtime = Math.floor(time_2.duration*10)/10;
            ragtime = Math.floor(time_1.duration*10)/10;
            all_time = Math.floor(time_all.duration*10)/10;

            //全桁表示（コンソール内）
            console.log('表示処理前～入力：'+time_all.duration);
            console.log('表示処理時間：'+time_1.duration);
            console.log('表示処理後～入力：'+time_2.duration);

            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);

            //結果の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend',realtime+' </br>');


            //ボタンの名前を戻す
            $('#button').val('Start');


            }else{
            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);
            //不正解の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend','間違ってますよ～～ </br>');
            //ボタンの名前を戻す
            $('#button').val('Start');

            }
            
            }
        },{
            //1回の入力に限定
            once: true
        })
        
        
    } 

    //ランダム秒置いてアルファベットを表示
    let a = Math.floor(Math.random()*3 + 2);
    a = a*1000;
    setTimeout(printA,a);
    }

}

//実験４
function jikkenn4(){
    //ボタンの名前変更
    $('#button').val('Wait');
    
    //アルファベットの定義
    let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    //表示するアルファベットを決定
    let alpha_kind_1 = Math.floor(Math.random()*46);
    let alpha_kind_2 = Math.floor(Math.random()*46);

    /*if(Math.floor(Math.random()*2)===0){
        alpha_kind_2 = alpha_kind_1;
    }*/
    //console.log('alpha_kind_1:'+alpha_kind_1);
    //console.log('alpha_kind_2:'+alpha_kind_2);

    //アルファベットを表示する場所を取得
    var list_element1 = document.getElementById("box1");
    var list_element2 = document.getElementById("box2");

    //２つが同じ種類のとき
    if((alpha_kind_1<27&&alpha_kind_2<27)||(alpha_kind_1>26&&alpha_kind_2>26)){
        //実際の処理
            const printA = () => {
            c = 0;
        //計測スタート
            performance.mark("start");

        //アルファベットを表示
            list_element1.textContent = alpha[alpha_kind_1];
            list_element2.textContent = alpha[alpha_kind_2];

        //表示にかかる時間計測のポイント
            performance.mark("point1");
    
        //表示後の処理
            document.addEventListener('keydown',(event) => {
            if(c===0){
            if(event.key==='y'){
            c = 1;

        //計測終了位置
                performance.mark("end");

        //時間計算・表示
            let time_all = performance.measure("allTime", "start", "end");
            let time_1 = performance.measure("func1Time", "start", "point1");
            let time_2 = performance.measure("func1Time", "point1", "end");
            //桁処理
            realtime = Math.floor(time_2.duration*10)/10;
            ragtime = Math.floor(time_1.duration*10)/10;
            all_time = Math.floor(time_all.duration*10)/10;

            //全桁表示（コンソール内）
            console.log('表示処理前～入力：'+time_all.duration);
            console.log('表示処理時間：'+time_1.duration);
            console.log('表示処理後～入力：'+time_2.duration);
        
            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);

            //結果の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend',realtime+' </br>');

            //ボタンの名前を戻す
            $('#button').val('Start');


            }else{
            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);
            //不正解の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend','間違ってますよ～～ </br>');
            //ボタンの名前を戻す
            $('#button').val('Start');
            

            }
            
        }
        },{
            //一回の入力に限定
            once: true
        })
        
        
        } 

        //ランダム秒置いてアルファベットを表示
        let a = Math.floor(Math.random()*3 + 2);
        a = a*1000;
        setTimeout(printA,a);
    }else{
        //実際の処理
        const printA = () => {
        c = 0;
        //計測スタート
        performance.mark("start");

        //アルファベットを表示
        list_element1.textContent = alpha[alpha_kind_1];
        list_element2.textContent = alpha[alpha_kind_2];

        //表示にかかる時間計測のポイント
        performance.mark("point1");
    
        //表示後の処理
        document.addEventListener('keydown',(event) => {
            if(c==0){
            if(event.key==='u'){
            c = 1;

            //計測終了位置
            performance.mark("end");

            //時間計算・表示
            let time_all = performance.measure("allTime", "start", "end");
            let time_1 = performance.measure("func1Time", "start", "point1");
            let time_2 = performance.measure("func1Time", "point1", "end");
            //桁処理
            realtime = Math.floor(time_2.duration*10)/10;
            ragtime = Math.floor(time_1.duration*10)/10;
            all_time = Math.floor(time_all.duration*10)/10;

            //全桁表示（コンソール内）
            console.log('表示処理前～入力：'+time_all.duration);
            console.log('表示処理時間：'+time_1.duration);
            console.log('表示処理後～入力：'+time_2.duration);

            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);

            //結果の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend',realtime+' </br>');


            //ボタンの名前を戻す
            $('#button').val('Start');


            }else{
            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);
            //不正解の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend','間違ってますよ～～ </br>');
            //ボタンの名前を戻す
            $('#button').val('Start');

            }
            
            }
        },{
            //1回の入力に限定
            once: true
        })
        
        
    } 

    //ランダム秒置いてアルファベットを表示
    let a = Math.floor(Math.random()*3 + 2);
    a = a*1000;
    setTimeout(printA,a);
    }

}

function jikkenn5(){
    //ボタンの名前変更
    $('#button').val('Wait');
    
    //アルファベットの定義
    let alpha = ['A','B','C','D','E','F','G','H','I','J',
                'a','b','c','d','e','f','g','h','i','j',
                '!','$','&','?','%'];
    
    //表示するアルファベットを決定
    let alpha_kind_1 = Math.floor(Math.random()*25);
    let alpha_kind_2 = Math.floor(Math.random()*25);



    /*if(Math.floor(Math.random()*2)===0){
        alpha_kind_2 = alpha_kind_1;
    }*/
    //console.log('alpha_kind_1:'+alpha_kind_1);
    //console.log('alpha_kind_2:'+alpha_kind_2);

    //アルファベットを表示する場所を取得
    var list_element1 = document.getElementById("box1");
    var list_element2 = document.getElementById("box2");

    //２つが同じ種類のとき
    if((alpha_kind_1<11&&alpha_kind_2<11)||(alpha_kind_1>10&&alpha_kind_2>10&&alpha_kind_2<21&&alpha_kind_2<21)||(alpha_kind_1>20&&alpha_kind_2>20)){
        //実際の処理
            const printA = () => {
            c = 0;
        //計測スタート
            performance.mark("start");

        //アルファベットを表示
            list_element1.textContent = alpha[alpha_kind_1];
            list_element2.textContent = alpha[alpha_kind_2];

        //表示にかかる時間計測のポイント
            performance.mark("point1");
    
        //表示後の処理
            document.addEventListener('keydown',(event) => {
            if(c===0){
            if(event.key==='y'){
            c = 1;

        //計測終了位置
                performance.mark("end");

        //時間計算・表示
            let time_all = performance.measure("allTime", "start", "end");
            let time_1 = performance.measure("func1Time", "start", "point1");
            let time_2 = performance.measure("func1Time", "point1", "end");
            //桁処理
            realtime = Math.floor(time_2.duration*10)/10;
            ragtime = Math.floor(time_1.duration*10)/10;
            all_time = Math.floor(time_all.duration*10)/10;

            //全桁表示（コンソール内）
            console.log('表示処理前～入力：'+time_all.duration);
            console.log('表示処理時間：'+time_1.duration);
            console.log('表示処理後～入力：'+time_2.duration);
        
            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);

            //結果の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend',realtime+' </br>');

            //ボタンの名前を戻す
            $('#button').val('Start');


            }else{
            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);
            //不正解の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend','間違ってますよ～～ </br>');
            //ボタンの名前を戻す
            $('#button').val('Start');
            

            }
            
        }
        },{
            //一回の入力に限定
            once: true
        })
        
        
        } 

        //ランダム秒置いてアルファベットを表示
        let a = Math.floor(Math.random()*3 + 2);
        a = a*1000;
        setTimeout(printA,a);
    }else{
        //実際の処理
        const printA = () => {
        c = 0;
        //計測スタート
        performance.mark("start");

        //アルファベットを表示
        list_element1.textContent = alpha[alpha_kind_1];
        list_element2.textContent = alpha[alpha_kind_2];

        //表示にかかる時間計測のポイント
        performance.mark("point1");
    
        //表示後の処理
        document.addEventListener('keydown',(event) => {
            if(c==0){
            if(event.key==='u'){
            c = 1;

            //計測終了位置
            performance.mark("end");

            //時間計算・表示
            let time_all = performance.measure("allTime", "start", "end");
            let time_1 = performance.measure("func1Time", "start", "point1");
            let time_2 = performance.measure("func1Time", "point1", "end");
            //桁処理
            realtime = Math.floor(time_2.duration*10)/10;
            ragtime = Math.floor(time_1.duration*10)/10;
            all_time = Math.floor(time_all.duration*10)/10;

            //全桁表示（コンソール内）
            console.log('表示処理前～入力：'+time_all.duration);
            console.log('表示処理時間：'+time_1.duration);
            console.log('表示処理後～入力：'+time_2.duration);

            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);

            //結果の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend',realtime+' </br>');


            //ボタンの名前を戻す
            $('#button').val('Start');


            }else{
            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);
            //不正解の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend','間違ってますよ～～ </br>');
            //ボタンの名前を戻す
            $('#button').val('Start');

            }
            
            }
        },{
            //1回の入力に限定
            once: true
        })
        
        
    } 

    //ランダム秒置いてアルファベットを表示
    let a = Math.floor(Math.random()*3 + 2);
    a = a*1000;
    setTimeout(printA,a);
    }

}



function jikkenn6(){
    //ボタンの名前変更
    $('#button').val('Wait');
    
    //アルファベットの定義
    let alpha = ['A','B','C','D','E','F','G','H','I','J',
                'a','b','c','d','e','f','g','h','i','j',
                '!','$','&','?','%'];
    let color_list = ['red','blue','green'];
    //表示するアルファベットを決定
    let alpha_kind_1 = Math.floor(Math.random()*25);
    let alpha_kind_2 = Math.floor(Math.random()*25);
    let color1 = Math.floor(Math.random()*3 );
    let color2 = Math.floor(Math.random()*3 );
    if(Math.floor(Math.random()*2)===0){
        color1=color2;
    }
    

    //表示するアルファベットを定義
    let hyouji1 = `<div class='${color_list[color1]}'>${alpha[alpha_kind_1]}</div>`
    let hyouji2 = `<div class='${color_list[color2]}'>${alpha[alpha_kind_2]}</div>`

    /*if(Math.floor(Math.random()*2)===0){
        alpha_kind_2 = alpha_kind_1;
    }*/
    //console.log('alpha_kind_1:'+alpha_kind_1);
    //console.log('alpha_kind_2:'+alpha_kind_2);

    //アルファベットを表示する場所を取得
    var list_element1 = document.getElementById("box1");
    var list_element2 = document.getElementById("box2");


    //２つが同じ種類のとき
    if(color1===color2){
        //実際の処理
            const printA = () => {
            c = 0;
        //計測スタート
            performance.mark("start");
            
        //アルファベットを表示
            list_element1.insertAdjacentHTML('beforeend',hyouji1);
            list_element2.insertAdjacentHTML('beforeend',hyouji2);

        //表示にかかる時間計測のポイント
            performance.mark("point1");
    
        //表示後の処理
            document.addEventListener('keydown',(event) => {
            if(c===0){
            if(event.key==='y'){
            c = 1;

        //計測終了位置
                performance.mark("end");

        //時間計算・表示
            let time_all = performance.measure("allTime", "start", "end");
            let time_1 = performance.measure("func1Time", "start", "point1");
            let time_2 = performance.measure("func1Time", "point1", "end");
            //桁処理
            realtime = Math.floor(time_2.duration*10)/10;
            ragtime = Math.floor(time_1.duration*10)/10;
            all_time = Math.floor(time_all.duration*10)/10;

            //全桁表示（コンソール内）
            console.log('表示処理前～入力：'+time_all.duration);
            console.log('表示処理時間：'+time_1.duration);
            console.log('表示処理後～入力：'+time_2.duration);
        
            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);

            //結果の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend',realtime+' </br>');

            //ボタンの名前を戻す
            $('#button').val('Start');


            }else{
            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);
            //不正解の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend','間違ってますよ～～ </br>');
            //ボタンの名前を戻す
            $('#button').val('Start');
            

            }
            
        }
        },{
            //一回の入力に限定
            once: true
        })
        
        
        } 

        //ランダム秒置いてアルファベットを表示
        let a = Math.floor(Math.random()*3 + 2);
        a = a*1000;
        setTimeout(printA,a);
    }else{
        //実際の処理
        const printA = () => {
        c = 0;
        //計測スタート
        performance.mark("start");

        //アルファベットを表示
        list_element1.insertAdjacentHTML('beforeend',hyouji1);
        list_element2.insertAdjacentHTML('beforeend',hyouji2);

        //表示にかかる時間計測のポイント
        performance.mark("point1");
    
        //表示後の処理
        document.addEventListener('keydown',(event) => {
            if(c==0){
            if(event.key==='u'){
            c = 1;

            //計測終了位置
            performance.mark("end");

            //時間計算・表示
            let time_all = performance.measure("allTime", "start", "end");
            let time_1 = performance.measure("func1Time", "start", "point1");
            let time_2 = performance.measure("func1Time", "point1", "end");
            //桁処理
            realtime = Math.floor(time_2.duration*10)/10;
            ragtime = Math.floor(time_1.duration*10)/10;
            all_time = Math.floor(time_all.duration*10)/10;

            //全桁表示（コンソール内）
            console.log('表示処理前～入力：'+time_all.duration);
            console.log('表示処理時間：'+time_1.duration);
            console.log('表示処理後～入力：'+time_2.duration);

            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);

            //結果の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend',realtime+' </br>');


            //ボタンの名前を戻す
            $('#button').val('Start');


            }else{
            //アルファベットを消す
            list_element1.removeChild(list_element1.lastChild);
            list_element2.removeChild(list_element2.lastChild);
            //不正解の表示
            document.getElementById('kekka').insertAdjacentHTML('beforeend','間違ってますよ～～ </br>');
            //ボタンの名前を戻す
            $('#button').val('Start');

            }
            
            }
        },{
            //1回の入力に限定
            once: true
        })
        
        
    } 

    //ランダム秒置いてアルファベットを表示
    let a = Math.floor(Math.random()*3 + 2);
    a = a*1000;
    setTimeout(printA,a);
    }

}




