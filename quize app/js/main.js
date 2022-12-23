const quizData = [
{
    question:'what is the most popular language 2022?',
    a:'javascript',
    b:'python',
    c:'c++',
    d:'c#',
    correct:'a'
},{
    question:'what does Html stand for?',
    a:'Hyper transformation market language',
    b:'Hyper text markup language',
    c:'cascding style sheet',
    d:'Jason object notation',
    correct:'b'
},{
    question:'Who is the father of C language?',
    a:'Steve Jobs',
    b:'James Gosling',
    c:'Dennis Ritchie',
    d:'Rasmus Lerdorf',
    correct:'c'
},{
    question:' A derived class may also be called a ......',
    a:'Subclass',
    b:'Super class',
    c:'Parent class',
    d:'Base class',
    correct:'a'
},{
    question:'The C++ _________ function generates random numbers',
    a:'generate()',
    b:'genRand',
    c:'rand',
    d:'srand',
    correct:'d'
}

]
const answerEls =  document.querySelectorAll('.answer');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const submit = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;


function loadQuiz() {
    getSelected();
    deselectedAnswer();
    currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
loadQuiz();

function getSelected() {
    let answer = undefined;

   answerEls.forEach((answerEl) =>{

    if (answerEl.checked) {
        answer = answerEl.id;
    } 
    
   });
   return answer;
}

function deselectedAnswer() {
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    })
}
submit.addEventListener("click",()=>{
   const answer = getSelected();

   
   if (answer) {
    if (answer === quizData[currentQuiz].correct) {
        score++;
       }
    currentQuiz++;

      if (currentQuiz < quizData.length) {

        loadQuiz();

    } else {
        quiz.innerHTML =
         `
        <h2>You answered correctly at ${score}/${quizData.length}questions</h2>
        <button onclick="location.reload()" >Reload</button>
        `
        }
   }

  

})