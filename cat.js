var Cat = () => {
    return "Ceasar";
}
Cat.prototype.eat = (mouse) => {
    this.stomach.push(mouse);
}

module.exports = Cat;