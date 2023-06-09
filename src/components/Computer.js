import { settings } from "../configs/game";
import "./Computer.css";

export const Computer = ({
    pcScore, 
    userSelection, 
    pcSelection, 
    rockIcon, 
    paperIcon, 
    scissorsIcon, 
    trophyIcon,
}) => {
    return(    
        <div className="computer-card">
        <h1>Computer's score: {pcScore}</h1>
        {pcScore < settings.winTarget ? (
            userSelection === '' ? (
                <h3 className="waiting-message">{settings.waitingMessage}</h3>
            ) : (
                <>
                <img src={pcSelection === "Rock" 
                ? rockIcon
                : pcSelection === "Paper"
                ? paperIcon
                : scissorsIcon} alt="icon"></img>
                <h3>PC selected: {pcSelection}</h3>
                </>
            )
        ) : (
            <>
            <img src={trophyIcon} alt="trophy"></img>
            <h3>Victory!</h3>
            </>
        )}
    </div>
    );
};