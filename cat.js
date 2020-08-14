var chalk = require('chalk');
function Cat  (name)  {
    this.name = name;
    this.stomach = [];
}
Cat.prototype.eat = (mouse) => {
    this.stomach.push(mouse);
}
Cat.prototype.sayHi =  function() {
    console.log('Hi! I am a Cat. My name is' + chalk.blue(this.name));
}

module.exports = Cat;