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

document.getElementById('next').disabled=true;

function correct_option(select_option){
  if(select_option == question_list[question_list_index].answer){
        
    
        score++;
        
        document.getElementById('score').textContent = ` score :${score}`;
        document.getElementById(`option${select_option + 1}`).style.backgroundColor = 'green'
        document.getElementById('next').disabled = false;
       // here the option is the simple string of the  of the multiple id`s and select_option passing the 
       // the index and "select_option +1" show the actual option b/z the index start from 0 and option start
       // the 1; 
    }else{
      
         document.getElementById(`option${select_option + 1}`).style.backgroundColor = 'red';
          
        
document.getElementById(`option${question_list[question_list_index].answer + 1}`).style.backgroundColor = 'green';
        
        }
        
        disable_option()
    }

    
    

function disable_option(){
    var total_option = 4;
    for(var i =0 ;i<=total_option;i++){
        var option_button = document.getElementById(`option${i}`)
        if(option_button){
            option_button.disabled = true;
        }
    }
}
   
    

  


function nextQuestion() {

   
   
    for(var i =1;i<=4;i++){
        
        document.getElementById(`option${i}`).style.backgroundColor = 'white'
        document.getElementById(`option${i}`).disabled=false;
       
    }
    

    if (question_list_index < question_list.length-1 ) {
        question_list_index++;
        quiz_option_box();

        
       

    } else {
       document.getElementById('h1-box').style.display= 'none'
        document.getElementById('quiz-container').style.display= 'none'
          document.getElementById('final-result').style.display= 'block'
        document.getElementById('result').textContent = `your final score is ${score}`;
        
    }
}


function restart(){
    var main = document.getElementById("quiz-container");
     
    main.style.display = "block";
    question_list_index=0;
    score = 0;
    document.getElementById('score').textContent = "score :" + score;
   
    
    quiz_option_box()


}



document.addEventListener('keydown', function(event) {
    if (event.key >= '1' && event.key <= '4') {
        correct_option(parseInt(event.key) - 1);
    }
});




quiz_option_box()


//redirect page 