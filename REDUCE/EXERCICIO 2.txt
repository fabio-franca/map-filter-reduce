//Somar todos os scores do objeto phaseScores 

const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
];

const sumScore = phaseScores.reduce( (accumulator, phaseScores) => 
                                    accumulator + phaseScores.score, 0);
       
console.log(sumScore);

//Somar apenas os scores do Alfredo Braga

const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
];

const alfredoScore = phaseScores.reduce((accumulator, phaseScore) => {
	if(phaseScore.name === 'Alfredo Braga') {
		return accumulator + phaseScore.score
	} else {
  	return accumulator  
  }
	
}, 0);

console.log(alfredoScore);
