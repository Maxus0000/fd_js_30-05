"use strict";

class UserClass{
constructor(fname, sname, age){
  this.fname = fname;
  this.sname = sname;
  this.age = age;
}
getFullName (){
  return '${this.fname} ${this.sname}'
}
};

const userNew = new UserClass('Tom', 'Hulk',25)