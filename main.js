

function getWinner(){
    var box1=document.getElementById("b1"),
        box2=document.getElementById("b2"),
        box3=document.getElementById("b3"),
        box4=document.getElementById("b4"),
        box5=document.getElementById("b5"),
        box6=document.getElementById("b6"),
        box7=document.getElementById("b7"),
        box8=document.getElementById("b8"),
        box9=document.getElementById("b9")

        if(box1.innerHTML != "null" && box1.innerHTML==box2.innerHTML && box2.innerHTML==box3.innerHTML || box4.innerHTML != "null" && box4.innerHTML==box5.innerHTML && box5.innerHTML==box6.innerHTML || box7.innerHTML != "null" && box7.innerHTML==box8.innerHTML && box8.innerHTML==box9.innerHTML  ){
            console.log('winner');
        }
        elseif(box1.innerHTML != "null" && box1.innerHTML==box4.innerHTML && box4.innerHTML==box7.innerHTML || box2.innerHTML != "null" && box2.innerHTML==box5.innerHTML && box5.innerHTML==box8.innerHTML || box3.innerHTML != "null" && box3.innerHTML==box6.innerHTML && box6.innerHTML==box9.innerHTML  ){
            console.log('winner');
        }
        elseif(box1.innerHTML != "null" && box1.innerHTML==box5.innerHTML && box5.innerHTML==box9.innerHTML || box3.innerHTML != "null" && box3.innerHTML==box5.innerHTML && box5.innerHTML==box7.innerHTML ){
            console.log('winner');
        }
    

}




var player1=1;
var player2=0;

function changetext(id){
   
    if(player1==1){
        id.innerHTML='x';
        player2=1;
        player1=0;
    }
    else{
        id.innerHTML='o';
        player1=1;
        player2=0;
    }
   
    
}

