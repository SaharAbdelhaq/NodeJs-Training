let predictions = ['scissors', 'rock', 'paper']

export const getComputerPrediction = () => {
    const predictionIndex = Math.floor((Math.random() * 10) % 3);
    return predictions[predictionIndex]
};


export const getWinner = (userPrediction, computerPrediction) => {
    if (userPrediction === computerPrediction) {
        return 'tie';
    }

    if (userPrediction === 'scissors' && computerPrediction === 'rock') {
        return 'computer';
    }

    if (userPrediction === 'rock' && computerPrediction === 'paper') {
        return 'computer';
    }
    
    if (userPrediction === 'paper' && computerPrediction === 'scissors') {
        return 'computer';
    }
    
    return 'user';
};