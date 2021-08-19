$("#task").blur(function(){
  if($(this).val() == ""){
    $("#addButton").prop("disabled", true);
  }else{
    $("#addButton").prop("disabled", false);
  }
});

$('#addButton').click(function(){
  $("#addButton").prop("disabled", true);
  
  let liLast = $('li:last').find('.time');
  let a,b;
  $(liLast).each(function(){
    a = document.createElement("div");
    a.className = "element";
    b = document.createElement("div");
    b.className = "count";
    a.append(b);
    b = document.createElement("button");
    b.className = "start-btn";
    b.textContent = "start";
    a.append(b);
    b = document.createElement("button");
    b.className = "stop-btn";
    b.textContent = "stop";
    a.append(b);
    b = document.createElement("button");
    b.className = "reset-btn";
    b.textContent = "reset";
    a.append(b);
    $(this).append(a);
  })
  $(".time").each(function(){
    const countBox = $(this).children().children('.count');
    const start = $(this).children().children('.start-btn');
    const stop = $(this).children().children('.stop-btn');
    const reset = $(this).children().children('reset-btn');
    //タイマーの秒数
    let setTime = $(this).data("time");
    //一時停止した時の秒数
    let poseTime = setTime;
    //残りの秒数
    let timeLeft = setTime;
    //setIntervalのための変数
    let testTimer;
    //残りの秒数を表示する関数
    const displayText = () => {
      countBox.text(timeLeft);
    };
    //1ずつカウントダウンする関数
    const countDown = () => {
      timeLeft--;
      poseTime = timeLeft;
      displayText();
    };
    //カウントをストップする関数
    const stopCount = () => {
      clearInterval(testTimer);
    };
    //1000ミリ秒ごとに処理を繰り返す関数
    const timerStart = () => {
      testTimer = setInterval(function () {
        if (timeLeft <= 0)
          clearInterval(testTimer);
        else
          countDown();
      }, 1000);
      return;
    };
    displayText();
    //ボタンを押したらカウントダウンスタート
    start.on('click', () => {
      stopCount();
      timeLeft = poseTime;
      displayText();
      timerStart();
    });
    //ボタンを押したらカウントストップ
    stop.on('click', () => {
      stopCount();
    });
  　//ボタンを押したらカウントリセット
    reset.on('click', () => {
      stopCount();
      timeLeft = poseTime = setTime;
      displayText();
    });
  })
});