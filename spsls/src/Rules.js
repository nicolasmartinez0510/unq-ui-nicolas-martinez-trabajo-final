let pointsP1 = 0;
let pointsP2 = 0;

const updatePoints = (path) => {
    if(path === 'P1'){
        pointsP1 = (pointsP1 +1)
    } else {
        pointsP2 = (pointsP2 + 1);
    }
}

const result = (playerWinner) => { return {pointsP1: pointsP1, pointsP2: pointsP2, playerWinner: playerWinner} };

const clearResult= () => {
    pointsP1 = 0;
    pointsP2 = 0;
}    
const checkStoneRule = ( form ) => {   
    
    switch(form) {
        case 'LIZARD':
            updatePoints('P1');
            return result('P1');
        case 'SCISSOR':
            updatePoints('P1');
            return result('P1');
        default:
            updatePoints('P2');
            return result('P2');  
    }
};

const checkPaperRule = (form) => {
    switch(form) {
        case 'STONE':
            updatePoints('P1');
            return result('P1');
        case 'SPOCK':
            updatePoints('P1');
            return result('P1');
        default:
            updatePoints('P2');
            return result('P2');  
    }
};

const checkScissorRule = (form) => {
    switch(form) {
        case 'PAPER':
            updatePoints('P1');
            return result('P1');
        case 'LIZARD':
            updatePoints('P1');
            return result('P1');
        default:
            updatePoints('P2');
            return result('P2');  
    }
};

const checkLizardRule = (form) => {
    switch(form) {
        case 'SPOCK':
            updatePoints('P1');
            return result('P1');
        case 'PAPER':
            updatePoints('P1');
            return result('P1');
        default:
            updatePoints('P2');
            return result('P2');  
    }

};

const checkSpockRule = (form) => {
    switch(form) {
        case 'SCISSOR':
            updatePoints('P1');
            return result('P1');
        case 'STONE':
            updatePoints('P1');
            return result('P1');
        default:
            updatePoints('P2');
            return result('P2');  
    }    
};

const checkRule = (form1, form2) => { 
    if(form1 === form2){
        return {pointsP1:pointsP1, pointsP2: pointsP2, playerWinner: 'Anyone'}
    } else {
        switch (form1) {
            case "STONE":
                return checkStoneRule(form2);
            case "SCISSOR":
                return checkScissorRule(form2);
            case "PAPER":
                return checkPaperRule(form2);
            case "LIZARD":
                return checkLizardRule(form2);
            case "SPOCK":
                return checkSpockRule(form2);
        }
      }
    }

export default { checkRule,clearResult };
