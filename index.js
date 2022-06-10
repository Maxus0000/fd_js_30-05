function Ladder() {
  this.step = 0;
}
function LadderStep() {
  this.up = function () {
    this.step++;
    return this;
  };
  this.down = function () {
    this.step--;
    return this;
  };
  this.showStep = function () {
    return this.step;
  };
}
Ladder.prototype = new LadderStep();

const myLadder1 = new Ladder();
const myLadder2 = new Ladder();

console.log(myLadder1.up().up().up().down().up().up().showStep());
console.log(myLadder2.down().up().up().showStep());
