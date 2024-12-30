var old;
var new_num;
function startQuestions() {
    document.getElementById("questions1").style.display = "block";
  }

  function nextQuestions(num) {
    new_num = num;
    document.getElementById("questions"+num).style.display = "block"; 
    old = num - 1;
    document.getElementById("questions"+old).style.display = "none";
  }  
  
  function answerYes() {
    document.getElementById("questions"+old).style.display = "none";
    document.getElementById("questions"+new_num).style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "Thế là mình có hẹn vào thứ 7 (04/01/2024) tuần này nhá (。・ω・。)";
    showConfetti()
}
  
  function answerNo() {
    // document.getElementById("questions"+old).style.display = "none";
    // document.getElementById("questions"+new_num).style.display = "none";
    // document.getElementById("que").style.display = "none";
    // document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
    // document.getElementById("message").style.display = "block";
    // document.getElementById("messageText").innerText = "No worries, love takes time. But can we spend some time together and see if something beautiful blossoms?";
    // showConfetti()
    alert("Ai cho cậu nhấn không (•ˋ _ ˊ•)")
}
  
// Function to show confetti
function showConfetti() {
    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ff0000', '#00ff00', '#0000ff'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 50000);
  }
  
