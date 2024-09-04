var question_list = [

    {
        question:"what is the capital of pakistan",
        options:["Lahore","islamabad","karachi","peshawar"],
        answer:1,
    },

    {
        question:"5 * 5 ",
        options:[10,20,30,25],
        answer:3,
    },

    {
        question:"which of the following is the markup language ",
        options:["HTML","Javascript","C++","CSS"],
        answer:0,
    }

]


var question_list_index = 0;
var score = 0;

function  quiz_option_box(){

    document.getElementById("para").textContent = question_list[question_list_index].question;

    document.getElementById("option1").textContent = question_list[question_list_index].options[0];
    document.getElementById("option2").textContent = question_list[question_list_index].options[1];
    document.getElementById("option3").textContent = question_list[question_list_index].options[2];
    document.getElementById("option4").textContent = question_list[question_list_index].options[3];
}


function correct_option(select_option){

   
    // var option1 =document.getElementById("option1")
    // var option2 =document.getElementById("option2")
    // var option3 =document.getElementById("option3")
    // var option4 =document.getElementById("option4")

    if(select_option == question_list[question_list_index].answer){
        
      //  alert('correct')
        
        //document.getElementById('result').textContent = "you got it right";
        score++;
        
        document.getElementById('score').textContent = ` score :${score}`;
        document.getElementById(`option${select_option + 1}`).style.backgroundColor = 'green'
       
    }else{
       // alert('try next time')
         //document.getElementById('result').textContent = "try again next time ";
         document.getElementById(`option${select_option + 1}`).style.backgroundColor = 'red';
           
    }

}


function nextQuestion() {

    var option1=document.getElementById('option1').style.backgroundColor ='white'
    var option1=document.getElementById('option2').style.backgroundColor ='white'
    var option1=document.getElementById('option3').style.backgroundColor ='white'
    var option1=document.getElementById('option4').style.backgroundColor ='white'

    

    if (question_list_index < question_list.length-1 ) {
        question_list_index++;
        quiz_option_box();
       

    } else {
        document.getElementById("result").textContent = `Quiz Complete! Your final score is ${score}.`;
    //     document.getElementsByClassName("final-score")[0].textContent = `Quiz Complete! Your final score is ${score}.`;
     }
}


function restart(){
    question_list_index=0;
    score = 0;
    document.getElementById('score').textContent = "score :" + score;
    document.getElementById('result').textContent="";
    // document.getElementById("next-question").style.display = "inline"; // Show the Next Question button
    // document.getElementById("play-again").style.display = "none";

    quiz_option_box()


}


quiz_option_box()


