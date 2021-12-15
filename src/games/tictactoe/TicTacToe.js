import React from 'react';
import './TicTacToe.css';
import Button from '@mui/material/Button'


const TicTacToe = () => {

    const [board,setBoard] = React.useState([null,null,null,null,null,null,null,null,null]);
    // let board = [null,null,null,null,null,null,null,null,null];
    let [player1,setPlayer] = React.useState(true);
    //let player1 = true;
    // const [win,setWin] = React.useState(false);
    const [tictac,setTicTac] = React.useState(null);
   // const win = checkWin

    const winStates = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    
    const checkWin = (board) => {
        console.log("Function called")
        for (let i = 0; i < winStates.length; i++) {
            const [x,y,z] = winStates[i];
            console.log(board);
            //console.log(x,y,z);
            if (board[x] && board[x] === board[y] && board[y] === board[z]) {
                console.log("Found winner");
                return true;
            }
        }
        return false;
    }
    
    
    let win = checkWin(board);

    const checkStatus = (board,win) => {
        if (win) {
            if (!player1) {
                return "Player 1 wins"
            } else {
                return "Player 2 wins"
            }
        } else if (board.filter(x => x !== null).length === 9) {
            return "Game Draw"
        }
        return null;
    }

    let gameStatus = checkStatus(board,win);
    // React.useEffect(() => {
    //     updateBoard();
    // },[]);

    //const updateBoard = () => {
        //setTicTac(board.map((item,id) => <div class="playerPos" onClick={checkPress} id={id}> {item}</div>));
    //};

   

    // const toggle = React.useCallback(() => {
    //     console.log("In here PLAYER = ",player1);
    //     setPlayer1(player1 => !player1);
    //     console.log("In here PLAYER2 = ",player1);
    //   }, []);

    const resetBoard = () => {
        setBoard([null,null,null,null,null,null,null,null,null]);
        gameStatus = null;
    }
      
    const checkPress = (e) => {
        const pos = e.target.id;



        // if (board[pos] == null) {
            
        //     board[pos] =  player1 ? 'X' : 'O';

        //     //toggle();
        //     //player1 = !player1
        //     setPlayer1(!player1);
        //     //console.log(player1);

        //     //updateBoard();
        //     checkWin();
            
            
        // } 

        let tempBoard = [...board];

        if (win || tempBoard[pos]) return;

        tempBoard[pos] =  player1 ? 'X' : 'O';
        setBoard(tempBoard);
        setPlayer(!player1);
        //checkWin();
    }

    return (
        <>
            <div id="HeadingArea">
                <h1> Tic Tac Toe </h1>
            </div>
            <div id="TicTacArea">
                <div id="TicTacBoard">
                    {board.map((item,id) => <div class="playerPos" onClick={checkPress} id={id}> {item}</div>)}
                </div>
                <div id="TicTacPlayer">
                    <h2> Turn </h2>
                    <p> <span>X</span> Player 1</p>
                    <p> <span>O</span> Player 2</p>
                    <p>{gameStatus}</p>
                    <Button variant="contained" onClick={resetBoard}>Reset</Button>
                </div>
            </div>
            
        </>
        
    );
};

export default TicTacToe;