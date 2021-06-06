class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
     textSize(40);
     fill("black");
     text("Result of the Quiz",300,50)

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      textSize(20);
      fill("blue");
      text("*NOTE :Contestent who have answered correct is highilited in green",100,220);
      var position=250;
      for(var plr in allContestants){
        var correctAns="2";
        if(correctAns===allContestants[plr].answer){
          fill("green");
          text(allContestants[plr].name+" : "+allContestants[plr].answer,150,position);
          
        }else{
          fill("red");
          text(allContestants[plr].name+" : "+allContestants[plr].answer,500,position);
        }
        position+=30;
      }
      }
  

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
    
  }

}
