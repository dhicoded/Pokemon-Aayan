class Game {
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
        contestant.index=contestantCount+1;
        console.log('count'+contestantCount);
      }
      pokemon.displayPokemons();
    }
  }

  play(){

      pokemon.hidepokemonbuttons();
      pokemon.showattackbuttons();
      //write code to change background color to yellow
      background("yellow");

      textSize(18);
      text("Game begins",340,80);

      Contestant.getPlayerInfo();
      for(var plr in allContestants){
        //display both the pokemon side by side

        //display the attack buttons side by side

        //code for the parameters for press of each button
      }
      //Code the battle ground scene
  }

  end(){
    console.log('Over');
  }
}