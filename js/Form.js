class Form {

  constructor() {
    this.input = createInput("");
    this.button = createButton('Play');
    this.reset = createButton('Reset');
    this.greeting = createElement('h2');
    this.title = createElement('h2');

    this.greeting = createElement('h3');
    this.paragraph = createElement('h3');
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.paragraph.hide();
  }

  display(){
    this.title.html("🅲🅰🆁 🆁🅰🅲🅸🅽🅶 🅶🅰🅼🅴");
    this.title.position(displayWidth/2-100, 0);
    this.paragraph.html("𝕎𝕣𝕚𝕥𝕖 𝕐𝕠𝕦𝕣 ℕ𝕒𝕞𝕖 ℍ𝕖𝕣𝕖 ➡️ ");
    this.paragraph.position(displayWidth/5, displayHeight/2-115);
    this.input.position(displayWidth/2 - 100 , displayHeight/2 - 100);
    this.button.position(displayWidth/2-5, displayHeight/2-50);
    this.reset.position(displayWidth-150,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("【H】【E】【L】【L】【O】" + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/2-90);
    });
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
