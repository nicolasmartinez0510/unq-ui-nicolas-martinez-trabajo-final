import Rules from './Rules'


    const forms = ["STONE","SCISSOR","SPOCK","PAPER","LIZARD"];

    const randomForm = () => {
        let randomItem = forms[Math.floor(Math.random()*forms.length)];
        return randomItem
    };

    const clearResult = () => Rules.clearResult();

    const playGame = (form1,form2) => {
        if(!Boolean(form2)){
            return(Rules.checkRule(form1, randomForm()));
        } else { return Rules.checkRule(form1,form2) }  
    }

export default { playGame,clearResult };