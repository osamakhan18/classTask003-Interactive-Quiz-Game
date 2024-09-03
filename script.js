var question_list = [

    {
        question:"what is the capital of pakistan",
        options:["Lahore","islamabad","karachi","peshawar"],
        answer:1,
    },

    {
        question:5 * 5 ,
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


function  quiz_option_box(){

    document.getElementById("para").textContent = question_list[question_list_index].question;


    document.getElementById("option1").textContent = question_list[question_list_index].options[0];
    document.getElementById("option2").textContent = question_list[question_list_index].options[1];
    document.getElementById("option3").textContent = question_list[question_list_index].options[2];
    document.getElementById("option4").textContent = question_list[question_list_index].options[3];
}


function correct_option(select_option){

    if(select_option == question_list[question_list_index].answer){
        alert('you got it right')
       
        question_list_index++;
        quiz_option_box()
    }else{
        alert('try this next time ')
       
        question_list_index++
        quiz_option_box();
    }

}



// function nextQuestion() {
//     question_list_index++;
//     if (question_list_index < question_list.length) {
//         quiz_option_box();
//     } else {
//         alert('Quiz Completed!');
//         question_list_index = 0; // Optionally reset for a new attempt
//         quiz_option_box();
//     }
// }

// quiz_option_box()


