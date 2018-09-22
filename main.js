
function getWinner(){
    var winner;
    var box1=document.getElementById("b1"),
    box2=document.getElementById("b2"),
    box3=document.getElementById("b3"),
    box4=document.getElementById("b4"),
    box5=document.getElementById("b5"),
    box6=document.getElementById("b6"),
    box7=document.getElementById("b7"),
    box8=document.getElementById("b8"),
    box9=document.getElementById("b9");

        if((box1.innerHTML =='x' ||box1.innerHTML =='o' ) && box1.innerHTML==box2.innerHTML && box2.innerHTML==box3.innerHTML || (box4.innerHTML =='x' ||box4.innerHTML =='o' ) && box4.innerHTML==box5.innerHTML && box5.innerHTML==box6.innerHTML || (box7.innerHTML =='x' ||box7.innerHTML =='o' ) && box7.innerHTML==box8.innerHTML && box8.innerHTML==box9.innerHTML  ){
            console.log('winner');
            winner=1;
        }
        else if((box1.innerHTML =='x'|| box1.innerHTML =='o')&&  box1.innerHTML==box4.innerHTML && box4.innerHTML==box7.innerHTML || (box2.innerHTML =='x' ||box2.innerHTML =='o' ) && box2.innerHTML==box5.innerHTML && box5.innerHTML==box8.innerHTML || (box3.innerHTML =='x' ||box3.innerHTML =='o' )&& box3.innerHTML==box6.innerHTML && box6.innerHTML==box9.innerHTML  ){
            console.log('winner');
            winner=1;
        }
        else if((box1.innerHTML == 'x' || box1.innerHTML =='o') && box1.innerHTML==box5.innerHTML && box5.innerHTML==box9.innerHTML || (box3.innerHTML =='x' ||box3.innerHTML =='o' ) && box3.innerHTML==box5.innerHTML && box5.innerHTML==box7.innerHTML ){
            console.log('winner');
            winner=1;
        }
        else{
            winner=0;
        }

        return(winner);
    

}




var player1=1;
var player2=0;
var won=0;


function changetext(id){


if(won!=1){
    if(id.innerHTML !=="x" && id.innerHTML!=="o"){
    if(player1==1){
        id.innerHTML='x';
        player2=1;
        player1=0;
        won=getWinner();


     
     
    }
    else{
        id.innerHTML='o';
        player1=1;
        player2=0;
        won=getWinner();
        
    }
}

}
else{
  restart();    
}
}

/*function restart(){
    var box=[0,0,0,0,0,0,0,0,0];
    player1=1;
    player2=0;
    
   box[0]=document.getElementById("b1")
    box[1]=document.getElementById("b2"),
    box[2]=document.getElementById("b3"),
    box[3]=document.getElementById("b4"),
    box[4]=document.getElementById("b5"),
    box[5]=document.getElementById("b6"),
    box[6]=document.getElementById("b7"),
    box[7]=document.getElementById("b8"),
    box[8]=document.getElementById("b9");
    var i;
    for( i=0; i<10; i++){
       
        box[i].innerHTML=null;
    }
   
}*/

function restart(){

    player1=1;
    player2=0;
    won=0;

    var box1=document.getElementById("b1"),
    box2=document.getElementById("b2"),
    box3=document.getElementById("b3"),
    box4=document.getElementById("b4"),
    box5=document.getElementById("b5"),
    box6=document.getElementById("b6"),
    box7=document.getElementById("b7"),
    box8=document.getElementById("b8"),
    box9=document.getElementById("b9");


    
    box1.innerHTML=null;
    box2.innerHTML=null;
    box3.innerHTML=null;
    box4.innerHTML=null;
    box5.innerHTML=null;
    box6.innerHTML=null;
    box7.innerHTML=null;
    box8.innerHTML=null;
    box9.innerHTML=null;
}
