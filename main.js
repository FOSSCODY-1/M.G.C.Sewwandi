
var player1=1;
var player2=0;
var won=0;
var countlimit=9;
var count=0;

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

    var turn = document.getElementById("turn");

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





function changetext(id){

if(count<countlimit){

if(won!=1){

    if(id.innerHTML !=="x" && id.innerHTML!=="o"){
        count++;
    if(player1==1){
        id.innerHTML='x';
        var turn = document.getElementById('turn');
        player2=1;
        player1=0;
        won=getWinner();

        if(count<countlimit){
        if(won==1){
            turn.innerHTML="player x won";
        }
        else{
            turn.innerHTML="o turn now";
        }
    }
    else{
        turn.innerHTML="Draw";
    }
     
    }
    else{
        id.innerHTML='o';
        var turn = document.getElementById("turn");
        
        player1=1;
        player2=0;
        won=getWinner();

        if(count<countlimit){
        if(won==1){
            turn.innerHTML='player o won';
        }
        else{
        turn.innerHTML="x turn now";
        }
    }

    else{
        trun.innerHTML="Draw";
    }
}
}

}
else{
    
  restart(); 
  count=0;   
}
}
else{
    restart();
}
}

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

    
turn.innerHTML='play';
count=0;

}


