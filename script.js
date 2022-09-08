let writeQuestions = ["Held hands with a MPS?",
 "Been on a date?",
 "Been in a relationship?",
 'Been "freinds with benefits"?',
 "Danced without leaving room for Jesus?",
 "Kissed a non-family member?",
 "Kissed a non-family member on the lips?",
 "Made out?",
 "Made out in public?",
 "Kissed on the neck?",
 "Kissed laying down?",
 "Given or received a hickey?",
 "Kissed three or more MPS in one night?",
 "Kissed or been kissed on the breast?",
 "Kissed someone below the belt?",
 "Kissed for more than two hours consecutively?",
 "Played a game involving stripping?",
 "Seen or been seen by MPS in person with no clothing",
 "Masturbated?",
 "Masturbated to a picture or video?",
 "Masturbated while someone else was in the room?",
 "Been caught masturbating?",
 "Searched for pornography online (yes smut counts)?",
 "Massaged or been massaged sensually?",
 "Gone through the motions of intercourse while fully dressed? (Derfing)",
 "Undressed completely or been undressed completely by a MPS? (member of the preferred sex)",
 "Showered with a MPS?",
 "Fondled or had your butt cheeks fondled?",
 "Fondled or had your breasts fondled?",
 "Fondled or had your genitals fondled?",
 'Had or given “blue balls”?',
 "Had an orgasm due to someone else’s manipulation?",
 "Sent a sexually explicit text or instant message?",
 "Sent or received nudes?",
 "Engaged in sexually explicit activity over video chat?",
 "Cheated or been cheated on during a relationship?",
 "Purchased contraceptives? (Condoms, plan-b, etc.)",
 "Given oral sex?",
 "Received oral sex?",
 "Stolen Something?",
 'Given or recieved "road head"?',
 "Used a sex toy with a partner?",
 "Spent the night with a MPS?",
 "Showered with a MPS?",
 "Watched porn with a MPS?",
 "Been walked in on while engaging in a sexual act?",
 "Kicked friends/family out to commit a sexual act?",
 "Ingested alcohol in a non-religious context?",
 "Played a drinking game?",
 "Been drunk?",
 "Faked sobriety? (to cops, teachers, parents, etc.)",
 "Gotten drunk to the point you dont remember the night before? (or at least a solid part of it)",
 "Smoked nicotine?",
 "Used tobacco?",
 "Used marijuana?",
 "Used an illegal drug other than marijuana?",
 "Used methamphetamine, crack cocaine, PCP, horse tranquilizers, or heroin?",
 "Been sent to the office of a principal, dean or judicial affairs representative for a disciplinary infraction?",
 "Been put on disciplinary probation or suspended? (ISS, OSS, etc.)",
 "Urinated in public?",
 "Gone skinny-dipping?",
 "Gone streaking?",
 "Hired a stripper or been to a party with one?",
 "Has been at a party when police show up?",
 "Had the police called on you?",
 "Run from the police?",
 "Had the police question you?",
 "Had the police handcuff you?",
 "Been arrested?",
 "Been charged with a misdomeanor?",
 "Been charged with a felony?",
 "Committed an act of vandalism?",
 "Had sex?",
 "Had sex three or more times in 24 hours?",
 '? (Tried the "69" position)',
 "Had sex 10 or more times?",
 "Had sex in four or more positions?",
 "Had sex with a person you met within 24 hours?",
 "Had sex in a motor vehicle?",
 "Had sex outdoors?",
 "Had sex in public? (A business, School, public bathroom, etc.)",
 "Had sex in a swimming pool or hot tub?",
 "Had sex in a bed not belonging to you or your partner?",
 "Had sex while you or your partner’s parents/roomates were in the same home?",
 "Had sex with non-participating third party in the same room?",
 "Joined the mile high club? (Sex on an airplane)",
 "Had sex with an ex?",
 "Had sex with a partner with a 3 or more year age difference?",
 "Had sex with a virgin?",
 "Had sex without a condom?",
 "Been tested for an STD/STI?",
 "Had a threesome?",
 "Attended an orgy? (5 or more)",
 "Been to a party",
 "Thrown a party",
 "Had sex with two or more different people in 24 hours?",
 "Had sex with five or more different people? (In total)",
 "Been photographed or filmed during sex by yourself or others?",
 "Had period sex?",
 "Had anal sex?"];

let questions = [];

document.body.style.backgroundImage = "url('cats.jpg')";
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
let page = document.getElementById('page');

results.style.display = 'none';

for (let i = 0; i < writeQuestions.length; i++) {
  console.log("ran")
  questions.push(new Question(writeQuestions[i]));
}

/*
for (let i = 0; i < 100; i++) {
  questions.push(new Question((i + 1) + " Question?"));
}
*/

for (let i = 0; i < questions.length; i++) {
  num = document.createElement("h1");
  temp = document.createElement("input");
  tempLabel = document.createElement("label");
  br = document.createElement("br");
  num.style.fontSize = '2.5vh';
  tempLabel.style.fontSize = '2.3vh';
  temp.style.marginLeft = '3vw';
  temp.style.width = "2.15vh";
  temp.style.height = "2.15vh";
  temp.style.transform = "translateY(.3vh)";
  num.style.transform = "translateY(-2.8vh) translateX(.8vw)";
  temp.id = i;
  temp.type = 'checkbox';
  tempLabel.innerHTML = " " + questions[i].question;
  num.innerHTML = i+1+'.';
  page.appendChild(temp);
  page.appendChild(tempLabel);
  page.appendChild(br);
  page.appendChild(num);
  //document.html.appendChild(temp);
  //document.html.appendChild(tempLabel);
  //document.html.appendChild(br);
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
  page.style.display = 'none';
  buttonsDiv.style.display = 'none';
  finalScore = Math.round(finalScore*100);
  score.innerHTML = (finalScore);
  results.style.display = 'block';
}
