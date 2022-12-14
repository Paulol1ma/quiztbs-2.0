let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();


function showQuestion(){
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let pct = Math.floor((currentQuestion / questions.length) * 100);
        document.querySelector('.progress--bar').style.width = `${pct}%`;


        document.querySelector('.scoreArea').style.display = "none";
        document.querySelector('.questionArea').style.display = "block";



        document.querySelector('.question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = '';

        let optionsHtml = '';
  
        for(let i in q.options) {
             optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`;
             
        }

        document.querySelector('.options').innerHTML = optionsHtml;


        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        });
    } else{
        finishQuiz();

    }
}

function optionClickEvent(e){
   let clickedOption = parseInt(e.target.getAttribute('data-op'));

   if(questions[currentQuestion].answer === clickedOption){
    correctAnswers++;
    
    
   }
   currentQuestion++;
   showQuestion();
  

}


function finishQuiz() {
    let points = Math.floor((correctAnswers / questions.length) * 100);

    if(points < 60){
        document.querySelector('.scoreText1').innerHTML = 'Ta ruim em?... <br> Volte para os cursos';
        document.querySelector('.scorePct').style.color = '#FF0000';
        document.querySelector('.prizeImage').src = 'errou.png';
        document.querySelector('.btn').innerHTML = 'Clique para voltar aos cursos';

    }

    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`;

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = '100%';

}

