// 구구단 게임

//HTML 변수
let scoreArea = document.querySelector('h3');
let lifeArea = document.querySelectorAll('h3');
lifeArea1 = lifeArea[lifeArea.length-1];
let question = document.querySelector('p');
let form = document.querySelector('form');
let input = document.querySelector('input');
let button = document.querySelector('button');
let result = document.querySelectorAll('div');
result1 = result[result.length-1];

//문제
let num1 = Math.ceil(Math.random() * 9); // 왼쪽 숫자
let num2 = Math.ceil(Math.random() * 9); // 오른쪽 숫자
let answer = num1 * num2; // 답
question.textContent = String(num1) + '곱하기' + String(num2) + '는?';

// 점수, 기회 표시
let scoreText = document.createElement('span');
scoreArea.append(scoreText);
scoreText.textContent = '0';

let lifeText = document.createElement('span');
lifeArea1.append(lifeText);
lifeText.textContent = '3';

//점수, 기회 초기값
let score = 0;
let life = 3;

form.addEventListener('submit', function (e){
    e.preventDefault();
    if (answer === Number(input.value)) { // 답을 맞췄을 때
        result1.textContent = '정답!';
        input.value = '';
        input.focus();
        score += 10;
        scoreText.textContent = score;
        //console.log('점수' + score,'기회' + life);
        //score.textContent = 'score + 1';
        //score.setText('점수 : ' + score);

        num1 = Math.ceil(Math.random() * 9); // 왼쪽 숫자
        num2 = Math.ceil(Math.random() * 9); // 오른쪽 숫자
        answer = num1 * num2; // 답
        question.textContent = String(num1) + '곱하기' + String(num2) + '는?';       
    } else { //답을 틀렸을 때
        if (life < 1 ) { //기회가 0이되면 게임오버
            result1.textContent = '게임 오버!'
        } else { // 기회가 0이 되기 전까지 -1
            result1.textContent = '땡!'
        input.value = '';
        input.focus();
        life -= 1;
        lifeText.textContent = life;
        //console.log('점수' + score,'기회' + life);

        }        
    }
})

