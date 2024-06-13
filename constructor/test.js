function Pokemon(name,type,hp,level){
  this.name =name;
  this.type=type;
  this.hp=hp;
  this.level=level;
  this.attack=function(){
    console.log(this.name+"이(가) 공격합니다.")
  }
}
const pikachu =new Pokemon("피카츄","전기",100,5);
const charmander =new Pokemon("파이리","불",90,6);
console.log(pikachu)
console.log(charmander)
pikachu.attack()
charmander.attack()