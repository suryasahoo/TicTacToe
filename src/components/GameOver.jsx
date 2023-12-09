
import {Logo} from './index';
import './css/GameOver.scss';

function GameOver({
    gameResult="",
    message="",
    refresh=false,
    winner="",
    handleQuit,
    handlePlayAgain,
    handleClosePopup,
}) {
  return (
    <div className='game-over'>
        {gameResult && <h3 className='game-result'>{gameResult}</h3>}
          <h1>{winner && (winner === "X" ?
              <Logo width='33' height='34'>X</Logo> : <Logo width='36' height='36' style={{ top: "8px", marginRight: "8px" }}>O</Logo>)}
              {message}
          </h1>
        <div className="game-over-buttons">
            <button style={{order: refresh ? 1 : 0}} className='quit' onClick={handleQuit}>QUIT</button>
            <button className='play-again' onClick={handlePlayAgain}>{refresh ? "NEW GAME" : "PLAY AGAIN"}</button>
        </div>
        {refresh && <div className="close-popup" onClick={handleClosePopup}>
            &#215;
        </div>}
    </div>
  )
}

export default GameOver