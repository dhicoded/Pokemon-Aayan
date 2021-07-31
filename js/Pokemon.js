class Pokemon {
  constructor() {
    this.title = createElement('h1')
    this.question= createElement('h2');
    this.pokemon=0;
    this.attacktype=0;
    this.greeting=createElement("h2");
    var gengar="<img src='images/gengar.png' width='100px' height='100px'>";
    var charizard="<img src='images/charizard.png' width='100px' height='100px'>";
    var venusaur="<img src='images/venusaur.png' width='100px' height='100px'>";
    var greninja="<img src='images/greninja.png' width='100px' height='100px'>";
    this.button1= createButton(gengar);
    this.button2 = createButton(charizard);
    this.button3 = createButton(venusaur);
    this.button4 = createButton(greninja);

    this.attack1=createButton();
    this.attack2=createButton();
    this.attack3=createButton();
    this.attack4=createButton();
  }

  hide(){
    this.title.hide();
    this.question.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
  }

  displayPokemons(){
    this.title.html("Pokemon Battle");
    this.title.position(350, 0);

    this.question.html("Choose your pokemon!" );
    this.question.position(325,40);
    this.button1.position(100,180);
    this.button2.position(250,180);
    this.button3.position(400,180);
    this.button4.position(550,180);

    if(gameState===0){
     this.hideattackbuttons();
    }

    this.button1.mousePressed(()=>{
      this.pokemon='1';
      this.hidepokemonbuttons();
      this.greeting.html("Waiting for your opponent to join");
      this.greeting.position(displayWidth/2 , displayHeight/4);
      contestantCount++;
      contestant.update();
      contestant.updateCount(contestantCount)
    });

    this.button2.mousePressed(()=>{   
      this.pokemon='2';
      this.hidepokemonbuttons();
      this.greeting.html("Waiting for your opponent to join");
      this.greeting.position(displayWidth/2, displayHeight/4);
      contestantCount++;
      contestant.update();
      contestant.updateCount(contestantCount)
    });

    this.button3.mousePressed(()=>{
      this.pokemon='3'
      this.hidepokemonbuttons();
      this.greeting.html("Waiting for your opponent to join");
      this.greeting.position(displayWidth/2, displayHeight/4);
      contestantCount++;
      contestant.update();
      contestant.updateCount(contestantCount)
    });

    this.button4.mousePressed(()=>{
      this.pokemon='4'
      this.hidepokemonbuttons();
      this.greeting.html("Waiting for your opponent to join");
      this.greeting.position(displayWidth/2, displayHeight/4);
      contestantCount++;
      contestant.update();
      contestant.updateCount(contestantCount)
    });
  }

  hidepokemonbuttons(){
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
  }

  hideattackbuttons(){
    this.attack1.hide();
    this.attack2.hide();
    this.attack3.hide();
    this.attack4.hide();  
  }

  showattackbuttons(){
    
    this.greeting.hide();
    this.question.hide();

    if(this.pokemon=='1'){
      this.attack1.html('ShadowBall1')
      this.attack2.html('ShadowClaw2')
      this.attack3.html('ShadowClaw3')
      this.attack4.html('ShadowClaw4')
    }
    if(this.pokemon=='2'){
      this.attack1.html('FlameThrower5')
      this.attack2.html('Hurricane6')
      this.attack3.html('ShadowClaw7')
      this.attack4.html('ShadowClaw8')
    }
    if(this.pokemon=='3'){
      this.attack1.html('ShadowBall9')
      this.attack2.html('ShadowClaw10')
      this.attack3.html('ShadowClaw11')
      this.attack4.html('ShadowClaw12')
    }
    if(this.pokemon=='4'){
      this.attack1.html('ShadowBall13')
      this.attack2.html('ShadowClaw14')
      this.attack3.html('ShadowClaw15')
      this.attack4.html('ShadowClaw16')
    }

    this.attack1.position(120,200)
    this.attack1.show();
    this.attack2.position(220,200)
    this.attack2.show();
    this.attack3.position(320,200)
    this.attack3.show();
    this.attack4.position(420,200)
    this.attack4.show();

    this.attack1.mousePressed(()=>{
      this.attacktype=1;
      contestant.update();
      contestant.updateCount(contestant.index);
    })

    this.attack2.mousePressed(()=>{
      this.attacktype=2;
      contestant.update()
      contestant.updateCount(contestant.index)
    })

    this.attack3.mousePressed(()=>{
      this.attacktype=3;
      contestant.update()
      contestant.updateCount(contestant.index)
    })

    this.attack4.mousePressed(()=>{
      this.attacktype=4;
      contestant.update()
      contestant.updateCount(contestant.index)
    })
  }
}