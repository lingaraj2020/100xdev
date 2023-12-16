
// class Animal {
//   constructor(name, legCount) {
//     this.name = name
//     this.legCount = legCount
//   }
//   describe() {
//     return `${this.name} has ${this.legCount} legs`
//   }
// }

class Student{
  constructor(name,gender,score){
    this.name=name;
    this.gender=gender;
    this.score=score;
  }
  static mytypo(){
    console.log("I am  student of static method");
  }
  getscore(){
    console.log(`${this.name} has scored ${this.score} with ${this.gender} gender `)
  }
}
Student.mytypo();
let Lingaraj=new Student("Lingaraj","Male",95);
let Aruna=new Student("Aruna","Female",87);
Lingaraj.getscore();
Aruna.getscore();
