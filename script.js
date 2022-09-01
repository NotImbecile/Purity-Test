let questions = [];

document.body.style.backgroundImage = "url('cats.png')";
//document.body.style.backgroundRepeat = "round";
//document.body.style.backgroundSize = "cover"
;
function Question(question) {
  this.question = question;
}

let questionsDiv = document.getElementById('questionsDiv');
let buttonsDiv = document.getElementById('buttonsDiv');
let results = document.getElementById('results');
let score = document.getElementById('score');

results.style.display = 'none';

for (let i = 0; i < 2; i++) {
  questions.push(new Question((i + 1) + " Question?"));
}

for (let i = 0; i < questions.length; i++) {
  temp = document.createElement("input");
  tempLabel = document.createElement("label");
  br = document.createElement("br");
  tempLabel.style.fontSize = '2.5vw';
  temp.style.marginLeft = '2vw';
  temp.style.width = "3vh";
  temp.style.height = "3vh";
  temp.id = i;
  temp.type = 'checkbox';
  tempLabel.innerHTML = " " + questions[i].question;
  questionsDiv.appendChild(temp);
  questionsDiv.appendChild(tempLabel);
  questionsDiv.appendChild(br);
}

function clear2() {
  for (let i = 0; i < questions.length; i++) {
    cb = document.getElementById(i);
    cb.checked = false;
  }
}

function submit() {
  let finalScore = 1;
  for (let i = 0; i < questions.length; i++) {
    cb = document.getElementById(i);
    if (cb.checked) {
      finalScore -= (1/questions.length);
    }
  }
  console.log((Math.round(finalScore * 100)) + "%");
  questionsDiv.style.display = 'none';
  buttonsDiv.style.display = 'none';
  score.innerHTML = (finalScore*100);
  results.style.display = 'block';
}
