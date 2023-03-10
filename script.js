
let image=document.querySelector('#imgr');
let sc=document.querySelector("#sc");
let sc2=document.querySelector("#sc2");
let sct2=document.querySelector("#sct2");
let sct=document.querySelector("#sct");
let roll= document.querySelector('#roll');
let image_num;
let players=1;
 var player1={
     player_num:1,
     player_score:sc,
     player_totale_score:sct
 }
 var player2={
    player_num:2,
    player_score:sc2,
    player_totale_score:sct2
}
const new_game=function(){player1.player_score.textContent=0;
    player2.player_score.textContent=0;
    player1.player_totale_score.textContent=0;
    player2.player_totale_score.textContent=0;}

const rand=function (p){
     p.player_score.textContent=Math.trunc(Math.random() * 6) + 1;
     image_num=p.player_score.textContent;
     switch(image_num){
        case '1':
            document.querySelector('#img1').style.display='inline';
            document.querySelectorAll('#img2,#img3,#img4,#img5,#img6 ').style.display='none';
            break;
        case '2':
            document.querySelector('#img2').style.display='inline';
            document.querySelectorAll('#img1,#img3,#img4,#img5,#img6 ').style.display='none';
            break;
        case '3':
            document.querySelector('#img3').style.display='inline';
            document.querySelectorAll('#img2,#img1,#img4,#img5,#img6 ').style.display='none';
            break;
        case '4':
            document.querySelector('#img4').style.display='inline';
            document.querySelectorAll('#img2,#img3,#img1,#img5,#img6 ').style.display='none';
            break;
        case '5':
            document.querySelector('#img5').style.display='inline';
            document.querySelectorAll('#img2,#img3,#img4,#img1,#img6 ').style.display='none';
            break;
        case '6':
            document.querySelector('#img6').style.display='inline';
            document.querySelectorAll('#img2,#img3,#img4,#img5,#img1 ').style.display='none';
            break;
    }
 }
const  player_test=function() {return (players==1)? player1:player2;} 
const hold=function(p){p.player_totale_score.textContent=Number(p.player_totale_score.textContent)+Number(p.player_score.textContent);
    players=!players;
    if (p.player_totale_score.textContent>=20){
        alert(`player num:${p.player_num} win`);
        new_game();
    }
}
 document.querySelector('#roll').addEventListener('click',()=>rand(player_test())); 
 document.querySelector('.hold2').addEventListener('click',()=>hold(player_test())); 
 document.querySelector('#new').addEventListener('click',()=>new_game()); 
 
