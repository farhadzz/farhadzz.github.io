let option1 = document.getElementById("pilihan1");
let option2 = document.getElementById("pilihan2");
let option3 = document.getElementById("pilihan3");
let option4 = document.getElementById("pilihan4");
let list = document.getElementById("pilihan-jawaban");
let btn = document.getElementById("btn");
let hasilSkor = document.getElementById("hasil-score"); 
let quizBox = document.getElementById("question");
let nomorQuiz = document.getElementById("no-quiz")
let pertanyaan = document.getElementById("nomor-pertanyaan")
let hasil = document.getElementsByClassName("score")
let index = 0
let score = 0

const quiz = [
    {
        question: 'Diantara game ini, manakah game yang merupakan game first party Sony?',
        option: ['Red Dead Redemption 2', 'Grand Theft Auto 5', 'Legend of Zelda: Breath of the Wild', 'The Last of Us'],
        answer: 3
    },
    {
        question: 'Manakah diantara karakter ini yang telah menjadi icon paling terkenal dalam sejarah video game?',
        option: ['Pac-Man', 'Mario', 'Sonic the Hedgehog', 'Crash Bandicoot'],
        answer: 1
    },
    {
        question: 'Manakah diantara game ini yang belum pernah diangkat menjadi film ataupun serial TV?',
        option: ['Sonic', 'Doom', 'Super Mario Bros', 'Donkey Kong'],
        answer: 3
    },
    {
        question: 'Kingdom Hearts terkenal memiliki karakter utama yang memiliki senjata berbentuk kunci, siapakah pemeran utamanya?',
        option: ['Sora', 'Cloud Strife', 'Riku', 'Zidane Tribal'],
        answer: 0
      },
    {
        question: 'Insomniac berhasil membuat sebuah game yang menjadi salah satu iterasi terbaik superhero tersebut. Siapakah dia?',
        option: ['Batman Arkham Series', "Marvel's Avengers", "Marvel's Spider-Man", 'Suicide Squad'],
        answer: 2
      }
]

function setQuestion(){
   
  if(index <= quiz.length -1) {
    pertanyaan.innerText = `Pertanyaan ${index + 1} dari ${quiz.length}`
    quizBox.innerText = quiz[index].question
    option1.innerText = quiz[index].option[0]
    option2.innerText = quiz[index].option[1]
    option3.innerText = quiz[index].option[2]
    option4.innerText = quiz[index].option[3]
  } else {  
    result()
  }
}

function nextQuestion() {
    index++
    setQuestion()
}

function checkAnswer(hasil) {
    if(hasil.innerText === quiz[index].option[quiz[index].answer]) {
      score++
      hasil.innerText = "Anda Benar!"
      hasilSkor.innerText = score
    } else {
      hasil.innerText = "Anda Salah!"
    }
    nextQuestion()
}

function result() {
  if(score === 5) {
      quizBox.innerHTML = "Gokil! Nilai sempurna! Kamu pasti banyak main game!"
      list.className = "none"
      document.getElementById("btn").style.display = "inline"
  } else if(score < 4) {
      quizBox.innerHTML = `Yaaah skor kamu cuma ${score}! Banyak main game lagi ya!`
      list.className = "none"
      document.getElementById("btn").style.display = "inline"
  }
  document.getElementById("score").style.display = "none"
  pertanyaan.innerText = "Selesai!"
}