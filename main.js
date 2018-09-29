
var player1 = 1; /*player1 has 1st chance to play*/
var player2 = 0;/*player2 has 2nd chance to play*/
var won = 0; 
var countlimit = 9; /*game is drawn after 9 terms*/
var count = 0;

function getWinner() { /*To find winner*/
    var winner;
    /*Get the created button's data in html to javascript*/
        var box1 = document.getElementById("b1"),
        box2 = document.getElementById("b2"),
        box3 = document.getElementById("b3"),
        box4 = document.getElementById("b4"),
        box5 = document.getElementById("b5"),
        box6 = document.getElementById("b6"),
        box7 = document.getElementById("b7"),
        box8 = document.getElementById("b8"),
        box9 = document.getElementById("b9");

    var turn = document.getElementById("turn");
    /*check buttons in grid horizontally*/
    if ((box1.innerHTML == 'X' || box1.innerHTML == 'o') && box1.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML || (box4.innerHTML == 'x' || box4.innerHTML == 'o') && box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML || (box7.innerHTML == 'x' || box7.innerHTML == 'o') && box7.innerHTML == box8.innerHTML && box8.innerHTML == box9.innerHTML) {
        console.log('winner'); /*print winner in console*/
        winner = 1; /*if a player won,winner is  1*/



    }
    /*check buttons in grid  vertically*/
    else if ((box1.innerHTML == 'X' || box1.innerHTML == 'O') && box1.innerHTML == box4.innerHTML && box4.innerHTML == box7.innerHTML || (box2.innerHTML == 'x' || box2.innerHTML == 'o') && box2.innerHTML == box5.innerHTML && box5.innerHTML == box8.innerHTML || (box3.innerHTML == 'x' || box3.innerHTML == 'o') && box3.innerHTML == box6.innerHTML && box6.innerHTML == box9.innerHTML) {
        console.log('winner');
        winner = 1;
    }
    /*check buttons in grid  diagonally*/
    else if ((box1.innerHTML == 'X' || box1.innerHTML == 'O') && box1.innerHTML == box5.innerHTML && box5.innerHTML == box9.innerHTML || (box3.innerHTML == 'x' || box3.innerHTML == 'o') && box3.innerHTML == box5.innerHTML && box5.innerHTML == box7.innerHTML) {
        console.log('winner');
        winner = 1;
    }
    else {
        winner = 0;/*if player is not win yet*/
    }



    return (winner);/*return winner's value to the calling function*/


}





function changetext(id) {

    if (count < countlimit) /*if no of rounds is not finished*/ {

        if (won != 1)  /*if player didn't win game*/ {
      
            if (id.innerHTML !== "X" && id.innerHTML !== "O") /*if the buttons has nothing*/{
                count++;/*increase no of round by 1*/
                if (player1 == 1) /*palyer1 has the turn now*/{
                    id.innerHTML = 'X';/*display X on the button */
                    var turn = document.getElementById('turn');
                    player2 = 1;
                    player1 = 0;
                    won = getWinner();

                    if (count <= countlimit) {
                        if (won == 1) {

                            turn.innerHTML = "Player X Won.";/*display winner*/
                            alert("Player1 won!!!");

                        }
                        else {
                            if (count < countlimit) {
                                turn.innerHTML = "O Turn Now.";/*give next turn to player2*/


                            }
                            else {
                                turn.innerHTML = "Draw.";/*rounds are finished*/
                                alert("Game is drawn!!!"); 
                                count = 0;
                            }
                        }



                    }
                    else {
                        turn.innerHTML = "Draw.";
                        alert("Game is drawn!!!");
                        count = 0;



                    }

                }
                else/*player2 has the trun now*/ {
                    id.innerHTML = 'O';
                    var turn = document.getElementById("turn");

                    player1 = 1;
                    player2 = 0;
                    won = getWinner();

                    if (count <= countlimit) {
                        if (won == 1) {
                            turn.innerHTML = 'Player O Won.';

                            alert("Player2 won!!!");

                        }
                        else {
                            if (count < countlimit) {
                                turn.innerHTML = "X Turn Now.";
                            }
                            else {
                                turn.innerHTML = "Draw.";
                                alert("Game is drawn!!!")
                                count = 0;
                            }
                        }
                    }
                }
            }
        }
        else {
            restart();
        }

    }


    else {

        restart();
        count = 0;
    }
}




function restart()/*restart game*/ {

    player1 = 1;
    player2 = 0;
    won = 0;

    var box1 = document.getElementById("b1"),
        box2 = document.getElementById("b2"),
        box3 = document.getElementById("b3"),
        box4 = document.getElementById("b4"),
        box5 = document.getElementById("b5"),
        box6 = document.getElementById("b6"),
        box7 = document.getElementById("b7"),
        box8 = document.getElementById("b8"),
        box9 = document.getElementById("b9");


/*set all buttons without any data*/
    box1.innerHTML = null;
    box2.innerHTML = null;
    box3.innerHTML = null;
    box4.innerHTML = null;
    box5.innerHTML = null;
    box6.innerHTML = null;
    box7.innerHTML = null;
    box8.innerHTML = null;
    box9.innerHTML = null;


    turn.innerHTML = 'Play';
    count = 0;

}


