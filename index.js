// Your code here


//**LAB**:




function saturdayFun(activity = 'roller-skate'){
    if (activity == 'roller-skate'){
        return `This Saturday, I want to ${activity}!`;
    }
    else {
        return `This Saturday, I want to ${activity}!`;
    }
}

function mondayWork(duties = 'go to the office'){
    if (duties == 'go to the office'){
        return `This Monday, I will ${duties}.`;
    }
    else {
        return `This Monday, I will ${duties}.`;
    }
}


function wrapAdjective(symbol = '*'){
    return function(adjective = 'special'){
            return `You are ${symbol}${adjective}${symbol}!`
    }

}

const encouragingWordsFunction = wrapAdjective('!!!');

wrapAdjective("%")("a hard worker")


