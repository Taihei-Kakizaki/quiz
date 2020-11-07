const quiz = [
    {   //一問目
        qusetion: 'ゲーム市場最も売れたゲーム機とは？',
        answers: [
            'スーファミ',
            'セガサターン',
            'ps2',
            'switch'
        ],
        correct: 'switch'
    },
    {   //二問目
        qusetion: '2019年放送作品は？',
        answers: [
            'Dr.stone',
            'ゾンビランドサガ',
            'fate/zero',
            '涼宮ハルヒの憂鬱'
        ],
        correct: 'Dr.stone'
    },
    {   //三問目
        qusetion: 'Deeplearnigを強みとするP言語は？',
        answers: [
            'C',
            'Java',
            'Python',
            'Ruby'
        ],
        correct: 'Python'
    }
]

//配列の中身
const quizLength = quiz.length;
let quizIndex = 0;
//正解数
let score = 0;

//長ったらしい文章をconst定数とボタンの数を設定しとく
//$はHTMLのオブジェクトであるという暗黙のルール（ごちゃごちゃしないで分かりやすい）
const $button = document.getElementsByTagName('button')
let buttonLength = $button.length;



//使いやすいように関数化。クイズの問題文、選択肢を設定
const setupQuiz = () => {
    //１問題文に充てられる箇所のテキストを取得し変数questionの中身を代入
    document.getElementById('js-question').textContent = quiz[quizIndex].qusetion;

    //２選択肢に充てられる箇所のテキストとボタンの数を取得しwhileで順繰りに代入
    let buttonindex = 0;
    while(buttonindex < buttonLength){
        $button[buttonindex].textContent = quiz[quizIndex].answers[buttonindex];
        buttonindex++;
    }
}

setupQuiz();


//正誤判定アラートを関数化。引数eを忘れずに。
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解!!');
        score++;
    }
    else{
        window.alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題が残っていたらこちら
        setupQuiz(quizIndex);
    }else{
        //問題が無かったらこちら
        window.alert('お疲れ様でした!'+score+'問正解ですよ!');
        quizIndex = 0;
        score = 0;
        setupQuiz(quizIndex);
    }
}


//クリックで正誤判定。引数eを忘れずに。

let handleIndex = 0;
while (handleIndex < buttonLength) {
    $button[handleIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    })    
    handleIndex++;
}

