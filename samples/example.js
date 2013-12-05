function Language(name) {
  this.name = name;
}
Language.prototype.isFugly = function() {
  if (this.name === 'JavaScript') {
    return true;
  }
  else {
    return false;
  }
};

var js = new Language('JavaScript');
js.isFugly();
