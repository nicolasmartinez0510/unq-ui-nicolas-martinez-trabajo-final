let pointsP1 = 0;
let pointsP2 = 0;
let formP1 = "";
let formP2 = "";


const updatePoints = (path) => {
    if(path === "P1"){
        pointsP1 = (pointsP1 +1)
    } else {
        pointsP2 = (pointsP2 + 1);
    }
}

const result = (playerWinner) => { 
    return {pointsP1: pointsP1, pointsP2: pointsP2, playerWinner: playerWinner, formP1: formP1, formP2: formP2} 
};

const clearResult= () => {
    pointsP1 = 0;
    pointsP2 = 0;
}    
const checkStoneRule = () => {   
    
    switch(formP2) {
        case "LIZARD":
            updatePoints("P1");
            return result("P1");
        case "SCISSOR":
            updatePoints("P1");
            return result("P1");
        default:
            updatePoints("P2");
            return result("P2");  
    }
};

const checkPaperRule = () => {
    switch(formP2) {
        case "STONE":
            updatePoints("P1");
            return result("P1");
        case "SPOCK":
            updatePoints("P1");
            return result("P1");
        default:
            updatePoints("P2");
            return result("P2");  
    }
};

const checkScissorRule = () => {
    switch(formP2) {
        case "PAPER":
            updatePoints("P1");
            return result("P1");
        case "LIZARD":
            updatePoints("P1");
            return result("P1");
        default:
            updatePoints("P2");
            return result("P2");  
    }
};

const checkLizardRule = () => {
    switch(formP2) {
        case "SPOCK":
            updatePoints("P1");
            return result("P1");
        case "PAPER":
            updatePoints("P1");
            return result("P1");
        default:
            updatePoints("P2");
            return result("P2");  
    }

};

const checkSpockRule = () => {
    switch(formP2) {
        case "SCISSOR":
            updatePoints("P1");
            return result("P1");
        case "STONE":
            updatePoints("P1");
            return result("P1");
        default:
            updatePoints("P2");
            return result("P2");  
    }    
};

const checkRule = (form1, form2) => { 
    formP1 = form1
    formP2 = form2
    if(form1 === form2){
        return result("TIE")
    } else {
        switch (form1) {
            case "STONE":
                return checkStoneRule();
            case "SCISSOR":
                return checkScissorRule();
            case "PAPER":
                return checkPaperRule();
            case "LIZARD":
                return checkLizardRule();
            case "SPOCK":
                return checkSpockRule();
            default:
                return result("TIE")
        }
      }
    }

export default { checkRule,clearResult };
