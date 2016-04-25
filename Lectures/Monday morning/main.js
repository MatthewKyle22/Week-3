function cereal(name, sweetness, crunchFactor, mascotName) {
    this.name = 'Luck Charms';
    this.sweetness = 10;
    this.crunchFactor = 10;
    this.mascotName = 'Rabbit';
}
var charms = new cereal()

cereal.prototype.makeyoufat= function (){
    console.log(this.name + ' makes you fat!');
};

