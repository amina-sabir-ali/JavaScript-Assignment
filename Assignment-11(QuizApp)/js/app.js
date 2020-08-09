window.onload = function(){
    show(0);
}

var question_object = [{
    id:1,
    question: "The first country to give a robot citizenship?",
    ans: "Saudi Arabia",
    options: [
        "UAE",
        "Saudi Arabia",
        "Qatar",
        "USA"
    ]
},
{
    id:2,
    question: "The World’s first camel hospital is located in?",
    ans: "Dubai, UAE",
    options: [
        "Dubai, UAE",
        "Jaddah, Saudi Arabia",
        "Mascat, Oman",
        "None of These"
    ]
},
{
    id:3,
    question: "What is the total length of World’s longest Hong Kong-Zhuhai bridge?",
    ans: "55km",
    options: [
        "75km",
        "65km",
        "55km",
        "60km"
    ]
},
{
    id:4,
    question: "Where is the World’s longest sea bridge?",
    ans: "China",
    options: [
        "China",
        "Japan",
        "Russia",
        "USA"
    ]
},
{
    id:5,
    question: "Where is the world’s oldest university?",
    ans: "75km",
    options: [
        "Harvard University",
        "University of London",
        "Fez Morocco",
        "Oxford University"
    ]
}
]

let question_counter = 0;
let score = 0;

function nextQues(){
    let user_answer = document.querySelector("li.option.active").innerHTML;

    // check if the user select correct answer or not
    if(user_answer == question_object[question_counter].ans){
        score += 20;
        sessionStorage.setItem("score",score);
    }


    if(question_counter == question_object.length - 1){
        location.href = "result.html";
        return;
    }
    
    question_counter++;
    show(question_counter);

}

function show(index){
    let ques = document.getElementById("questions");
    ques.innerHTML = `
    <h2>Q${question_object[index].id}. ${question_object[index].question}</h2>
    <ul class="option_grp">
        <li class="option">${question_object[index].options[0]}</li>
        <li class="option">${question_object[index].options[1]}</li>
        <li class="option">${question_object[index].options[2]}</li>
        <li class="option">${question_object[index].options[3]}</li>
    </ul>
    `;
    toggleActive();
}

function toggleActive(){
    let opt = document.querySelectorAll('li.option');
    for(let i=0; i < opt.length ; i++){
        opt[i].onclick = function(){
            for(let j=0 ; j < opt.length; j++){
                if(opt[j].classList.contains("active")){
                    opt[j].classList.remove("active");
                }
            }
            opt[i].classList.add("active");
        }
    }
}









function formSubmited(e){
    e.preventDefault();
    let name = document.forms["welome_form"]["user_name"].value;

    // store username in session
    sessionStorage.setItem("name",name);

    location.href = "quizQuestions.html";
    // console.log(name);
}
