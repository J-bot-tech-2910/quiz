var questions = ["What is the capital of france", 
    "What is the smallest city in the world", 
    "What is the capital of France?",
    "Which planet is known as the Red Planet?",
    "Who wrote 'To Kill a Mockingbird'?",
    "What is the square root of 64?",
    "Which element has the chemical symbol 'O'?",
    "What is the largest ocean on Earth?",
    "Who painted the Mona Lisa?",
    "Which country is known as the Land of the Rising Sun?",
    "What is the longest river in the world?",
    "Who developed the theory of relativity?",
    "Which gas do plants use for photosynthesis?",
    "What is the hardest natural substance on Earth?",
    "How many continents are there on Earth?"];
var gameQuestion = document.querySelector('#question');
gameQuestion.innerHTML = questions[0];
var gameOptions = [{optionA : "Delhi",optionB: "Barcelona", optionC: "Paris", optionD : "Spain"},
                    {optionA : "Vatican city",optionB : "Toronto", optionC: "Tokyo", optionD : "Osaka"},
                    { optionA: "Paris", optionB: "London", optionC: "Rome", optionD: "Berlin" },
                    { optionA: "Earth", optionB: "Mars", optionC: "Venus", optionD: "Jupiter" },
                    { optionA: "Harper Lee", optionB: "Mark Twain", optionC: "Jane Austen", optionD: "J.K. Rowling" },
                    { optionA: "6", optionB: "8", optionC: "10", optionD: "12" },
                    { optionA: "Oxygen", optionB: "Gold", optionC: "Silver", optionD: "Iron" },
                    { optionA: "Atlantic", optionB: "Pacific", optionC: "Indian", optionD: "Arctic" },
                    { optionA: "Vincent van Gogh", optionB: "Leonardo da Vinci", optionC: "Pablo Picasso", optionD: "Michelangelo" },
                    { optionA: "China", optionB: "Japan", optionC: "India", optionD: "Thailand" },
                    { optionA: "Amazon", optionB: "Nile", optionC: "Yangtze", optionD: "Mississippi" },
                    { optionA: "Isaac Newton", optionB: "Albert Einstein", optionC: "Galileo Galilei", optionD: "Nikola Tesla" },
                    { optionA: "Oxygen", optionB: "Carbon Dioxide", optionC: "Nitrogen", optionD: "Hydrogen" },
                    { optionA: "Gold", optionB: "Iron", optionC: "Diamond", optionD: "Quartz" },
                    { optionA: "5", optionB: "6", optionC: "7", optionD: "8" }
]
var rightAnswer = [gameOptions[0].optionC, gameOptions[1].optionA,gameOptions[2].optionA,gameOptions[3].optionB,gameOptions[4].optionA,gameOptions[5].optionB,
                  gameOptions[6].optionA,gameOptions[7].optionB,gameOptions[8].optionB,gameOptions[9].optionB,gameOptions[10].optionB,gameOptions[11].optionB,
                   gameOptions[12].optionB,gameOptions[13].optionC,gameOptions[14].optionC]

var Options = document.querySelectorAll('.option');
Options.forEach((element, index) => {
    // Assuming you want to access gameOptions[0] for question 1
    const optionsForQuestion = gameOptions[0];
  
    // Update the innerHTML of each option element
    if (index === 0) element.innerHTML = optionsForQuestion.optionA;
    if (index === 1) element.innerHTML = optionsForQuestion.optionB;
    if (index === 2) element.innerHTML = optionsForQuestion.optionC;
    if (index === 3) element.innerHTML = optionsForQuestion.optionD;
  
    // Logging the element and the option for debugging
    console.log(`Option ${index + 1}: ${element.innerHTML}`);
  });
var i=1;j=1; k=0;
let correctOption = document.querySelectorAll('.option')

correctOption.forEach((element, index) => {
    element.addEventListener('click', function(){
        
        if(i<15&&j<15&&k<15){
            if (element.innerHTML === rightAnswer[k]) {
                let list = document.createElement('li');
                list.innerHTML = "Congratulations you won $100";
                document.querySelector('#prize').appendChild(list);
                gameQuestion.innerHTML = questions[i];
                Options.forEach((element, index) => {
                    // Assuming you want to access gameOptions[0] for question 1
                    const optionsForQuestion = gameOptions[j];
                  
                    // Update the innerHTML of each option element
                    if (index === 0) element.innerHTML = optionsForQuestion.optionA;
                    if (index === 1) element.innerHTML = optionsForQuestion.optionB;
                    if (index === 2) element.innerHTML = optionsForQuestion.optionC;
                    if (index === 3) element.innerHTML = optionsForQuestion.optionD;
                  
                    // Logging the element and the option for debugging
                    //console.log(`Option ${index + 1}: ${element.innerHTML}`);
                  });
            }
    
        else{
            let list = document.createElement('li');
            list.innerHTML = "Sorry You lost"
            document.querySelector('#prize').appendChild(list)
            alert("Match Over")
        }
        }
        i++;
        j++;
        k++;
        

})
})
