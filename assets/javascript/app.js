$("#container").on("click", function(){
	console.log("Start the Game!")
	game.start();
	game.done();
	// $("#startGame").remove();
	// for (var i = 0; i < questions.length; i++) {
	// 	$("#container2").append('<h2>' +questions[i].question+'</h2>');
	// 	for (var j = 0; j < questions[i].answers.length; j++) {
	// 		$("#container2").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>" + questions[i].answers[j]);
	// 		console.log("here");
		// }
	// }
})	

var questions =[{
	question: "How many claws does Wolverine have?",
	answers: ["4","6","8","10"],
	correctAnswers: "6"
}, {
	question: "What is the correct HULK quote?",
	answers: ["Hulk Slam!","Hulk Blam!","Hulk Smash!","Hulk Crash!"],
	correctAnswers: "Hulk Smash"

}, {
	question: "What X-Men character shoots a single beam out of his eye?",
	answers: ["Wolverine","Cylops","Beast","Colossus"],
	correctAnswers: "Cylops"

}];

var game = {
	correct: 0,
	incorrect: 0,
	counter:3,
	countDown: function(){
		game.counter --;
		$("#counter").html(game.counter);
		if (game.counter <= 0) {
			console.log("Time is up!");
			// game.done();
		}
	},
	start: function(){
		timer = setInterval(game.countDown,1000);
		console.log("Timer");
		$("container2").prepend('<h2>Time Left: <span id="counter">15</span> Seconds</h2>');
		$("#startGame").remove();
			for (var i = 0; i < questions.length; i++) {
				$("#container2").append('<h2>' +questions[i].question+'</h2>');
				for (var j = 0; j < questions[i].answers.length; j++) {
					$("#container2").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>" + questions[i].answers[j]);
				console.log("here");
			}
		}
	},
	done: function(){
		$.each($('input[name="question-0]":checked'),function(){
			if($(this).val()==questions[0].correctAnswers){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-1]":checked'),function(){
			if($(this).val()==questions[1].correctAnswers){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-2]":checked'),function(){
			if($(this).val()==questions[2].correctAnswers){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		this.result();
	},

	result:function(){
		clearInterval(timer);
		$("container2 h2").remove();
		$("container2").html("<h2>Finished!</h2>");
		$("container2").append("<h3>Correct Answers: "+this.correct+"</h3>");
		$("container2").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
		$("container2").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
	}
}
// // ********* Global VAR's ******************************************************
// var startGame;
// var gameHTML;
// var correctGuess = 0;
// var incorrectGuess = 0;
// var outaTimeGuess = 0;
// var counter = 15;
// var questions = ["How many claws does wolverine have in each hand?","Later in the comics spiderman joins which group?",];
// var answers = [["3","5","6","10"],["X-Men","guardians of the galaxy","Avengers"],];
// var correctAnswers = [3];
// // var questions = 0;
// var correctGuess = 0;
// var incorrectGuess = 0;
// var noMoreTime = 0;
// var clock;
// //********** Functions *********************************************************
// $(document).ready(function() {

// //********** startPage *********************************************************
// function startPage(){
// 	var startGame = "<p class='text-center main-button-container'><a class='btn btn-danger btn-lg btn-block start-button' href='#' role='button'>Start Marvle Quiz!</a></p>"
// 	$(".mainPage").html(startGame);
	
// 	console.log(startPage);
// 	// console.log(mainPage);
// }
// 	startPage();
// $("body").on("click", ".start-button", function(event)  {
// 	event.preventDefault();
// 	console.log("start button")
// 	questionPage();
// 	// gameHTML();
// 	// timerWrapper();	
// 	// console.log(event)
// });

// function questionPage(){
// 	$("#question").append("<p>hello" + questions[0] +" some more text</p>");
// 	console.log("questionPage")
// }
// // $("body").on("click", ".selection", function(event) { 
// // selectAnswer = $(this).text();
// // if (selectAnswer === correct[questions]) {
// // // Does the correct answer need to be here?
// // 	clearClock(clock);
// // 	congratsWin();
// // }else {
// // // Does the incorrect answer need to be here=?
// // 	clearClock(clock);
// // 	congratsLoss();
// // }
// // 	console.log(event);
// // 	console.log(selectAnswer);
// // 	console.log(correct);
// // });

// // $("body").on("click", ".reset-button", function(event) {
// // 	console.log(event);
// // 	resetGame();
// // });
// });
// // //********* end startPage ******************************************************

// // //********* WIN LOSSES OUTA TIME AND CONTENT ***********************************
// // function gameWon() {
// // 	correctGuess ++;
// // 	gameHTML =
// // $(".mainPage").html(gameHTML);
// // 	timeout(wait, 10000);
// // }
// // 	function gameLost() {
// // 	incorrectGuess ++;
// // 	gameHTML =
// // $(".mainPage").html(gameHTML);
// // 	timeout(wait, 10000);
// // }
// // 	function noMoreTime() {
// // 	outaTimeGuess ++;
// // 	gameHTML =
// // $(".mainPage").html(gameHTML);
// // 	timeout(wait, 10000);
// // }
// // function contentHTML() {
// // 	gameHTML = 
// // $(".mainPage").html(gameHTML);
// // }
// // 	console.log(gameWon);
// // 	console.log(gameLost);
// // 	console.log(noMoreTime);
// // 	console.log(contentHTML);

// // //********* END WIN LOSSES OUTA TIME AND CONTENT *******************************
// // function wait() {
// // 	if (questions < 7) {
// // 		questions++;
// // 		contentHTML();
// // 		counter = 15;
// // 		timerWrapper();
// // 	}else {
// // 		finalScreen();
// // 	}
// // }
// // function timerWrapper() {
// // 	clock = setInterval(fifteenSeconds,1000);
// // 	function fifteenSeconds() {
// // 		 if (counter === 0) {
// // 		 	clearClock(clock);
// // 		 	noMoreTime();
// // 		 }
// // 		 if (counter > 0) {
// // 		 	counter --;
// // 		 }
// // 		 $(".timer").html(counter);
// // 	}
// // }
// // function finalScreen() {
// // 	gameHTML =
// // 	$(".startPage").html(gameHTML);
// // }
// // function resetGame() {
// // 	 questions = 0;
// // 	 correctGuess = 0;
// // 	 incorrectGuess = 0;
// // 	 outaTimeGuess = 0;
// // 	 counter = 15;
// // 	 contentHTML();
// // 	 timerWrapper();
// // }



// // //********** Running Functions! ************************************************























