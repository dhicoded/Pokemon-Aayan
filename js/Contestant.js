class Contestant {
  constructor(){
    this.index = null;
    this.playername=null;
    this.pokemon = 0;
    this.attacktype = null;
    this.score=0;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    this.index=contestantCount;
    var contestantIndex = "contestants/contestant" + this.index;
    this.playername=this.index;
    this.pokemon = pokemon.pokemon;
    this.attacktype = pokemon.attacktype;
    this.score=0;
    database.ref(contestantIndex).set({
      playername:this.playername,
      playerpokemon:this.pokemon,
      playerattack:this.attacktype,
      score:this.score,
    });
  }

  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
}