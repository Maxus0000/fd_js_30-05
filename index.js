"use strict";

class Woker{
constructor(fname, sname, rate,days){
  this.fname = fname;
  this.sname = sname;
  this.rate = rate;
  this.days = days;
}

getSalary(){
  return this.days*this.rate;
}
get days(){
  return this._days;
}
set days(days){
  if (typeof days !== 'number'){
    throw new TypeError('Days must be a number');
  }
  if (days <0 || days > MAX_DAYS){
    throw new RangeError ('day must beb0-' +MAX_DAYS)
  }
  this._days = days;
}
}