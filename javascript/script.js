function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var score = 0;

    if (question1 == 'Dog') {
        score ++;
    } if (question2 == 'Javascript') {
        score ++;
    } if (question3 == 'Summer') {
        score ++;
    }

    var messages = ['Great job!', 'That\'s just okay,', 'You really need to do better,']
    var range;

    if (score < 1) {
        range = 2;
    } if (score > 0 && score < 3) {
        range = 1;
    } if (score > 2) {
        range = 0;
    }
    
    document.getElementById('after_submit').style.visibility = 'visible';
    document.getElementById('number_correct').innerHTML = 'You got ' + score + ' correct.';
    document.getElementById('messages').innerHTML = messages[range];
    document.getElementById('mood').src = '/Javascript Quiz/images/mood-' + score + '.gif';
}
