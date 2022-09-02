let writeQuestions = ["Held hands romantically?",
 "Been on a date?",
 "Been in a relationship?",
 "Danced without leaving room for Jesus?",
 "Kissed a non-family member?",
 "Kissed a non-family member on the lips?",
 "French kissed?",
 "French kissed in public?",
 "Kissed on the neck?",
 "Kissed horizontally?",
 "Given or received a hickey?",
 "Kissed or been kissed on the breast?",
 "Kissed someone below the belt?",
 "Kissed for more than two hours consecutively?",
 "Played a game involving stripping?",
 "Seen or been seen by another person in a sensual context?",
 "Masturbated?",
 "Masturbated to a picture or video?",
 "Masturbated while someone else was in the room?",
 "Been caught masturbating?",
 "Masturbated with an inanimate object?",
 "Seen or read pornographic material?",
 "Massaged or been massaged sensually?",
 "Gone through the motions of intercourse while fully dressed?",
 "Undressed or been undressed by a MPS (member of the preferred sex)?",
 "Showered with a MPS?",
 "Fondled or had your butt cheeks fondled?",
 "Fondled or had your breasts fondled?",
 "Fondled or had your genitals fondled?",
 "Had or given “blue balls”?",
 "Had an orgasm due to someone else’s manipulation?",
 "Sent a sexually explicit text or instant message?",
 "Sent or received sexually explicit photographs?",
 "Engaged in sexually explicit activity over video chat?",
 "Cheated on a significant other during a relationship?",
 "Purchased contraceptives?",
 "Gave oral sex?",
 "Received oral sex?",
 "Ingested someone else’s genital secretion?",
 "Used a sex toy with a partner?",
 "Spent the night with a MPS?",
 "Been walked in on while engaging in a sexual act?",
 "Kicked a roommate out to commit a sexual act?",
 "Ingested alcohol in a non-religious context?",
 "Played a drinking game?",
 "Been drunk?",
 "Faked sobriety to parents or teachers?",
 "Had severe memory loss due to alcohol?",
 "Used tobacco?",
 "Used marijuana?",
 "Used a drug stronger than marijuana?",
 "Used methamphetamine, crack cocaine, PCP, horse tranquilizers or heroin?",
 "Been sent to the office of a principal, dean or judicial affairs representative for a disciplinary infraction?",
 "Been put on disciplinary probation or suspended?",
 "Urinated in public?",
 "Gone skinny-dipping?",
 "Gone streaking?",
 "Seen a stripper?",
 "Had the police called on you?",
 "Run from the police?",
 "Had the police question you?",
 "Had the police handcuff you?",
 "Been arrested?",
 "Been convicted of a crime?",
 "Been convicted of a felony?",
 "Committed an act of vandalism?",
 "Had sexual intercourse?",
 "Had sexual intercourse three or more times in one night?",
 "?",
 "Had sexual intercourse 10 or more times?",
 "Had sexual intercourse in four or more positions?",
 "Had sexual intercourse with a stranger or person you met within 24 hours?",
 "Had sexual intercourse in a motor vehicle?",
 "Had sexual intercourse outdoors?",
 "Had sexual intercourse in public?",
 "Had sexual intercourse in a swimming pool or hot tub?",
 "Had sexual intercourse in a bed not belonging to you or your partner?",
 "Had sexual intercourse while you or your partner’s parents were in the same home?",
 "Had sexual intercourse with non-participating third party in the same room?",
 "Joined the mile high club?",
 "Participated in a “booty call” with a partner whom you were not in a relationship with?",
 "Traveled 100 or more miles for the primary purpose of sexual intercourse?",
 "Had sexual intercourse with a partner with a 3 or more year age difference?",
 "Had sexual intercourse with a virgin?",
 "Had sexual intercourse without a condom?",
 "Had a STI test due to reasonable suspicion?",
 "Had a STI?",
 "Had a threesome?",
 "Attended an orgy?",
 "Had two or more distinct acts of sexual intercourse with two or more people within 24 hours?",
 "Had sexual intercourse with five or more partners?",
 "Been photographed or filmed during sexual intercourse by yourself or others?",
 "Had period sex?",
 "Had anal sex?",
 "Had a pregnancy scare?",
 "Impregnated someone or been impregnated?",
 "Paid or been paid for a sexual act?",
 "Committed an act of voyeurism?",
 "Committed an act of incest?",
 "Engaged in bestiality?",];

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
  temp = document.createElement("input");
  tempLabel = document.createElement("label");
  br = document.createElement("br");
  tempLabel.style.fontSize = '2.3vh';
  temp.style.marginLeft = '3vw';
  temp.style.width = "2.15vh";
  temp.style.height = "2.15vh";
  temp.style.transform = "translateY(.3vh)";
  temp.id = i;
  temp.type = 'checkbox';
  tempLabel.innerHTML = " " + questions[i].question;
  page.appendChild(temp);
  page.appendChild(tempLabel);
  page.appendChild(br);
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
  score.innerHTML = (finalScore*100);
  results.style.display = 'block';
}
