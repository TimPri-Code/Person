
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age;
  }

  introduce() {
    console.log(
        "my name is ${this.name}, am ${this.age} years old"
        );
  }
}


class Student extends Person {
  constructor (name, age, eyeColor, height) {
    super(name, age); 
    this.eyeColor = eyeColor;
    this.height = height;
      }

  study() {
    console.log(
      "my name is ${this.school} am ${this.age} years old, with ${this.eyeColor} and ${this.height} tall."
    );
  }
}

class Teacher extends Person {
    constructor(name, age, subject, awards) {
        super(name,age);
        this.subject = subject;
        this.awards = awards
        
    }
    
teach() {
    console.log(
     "my name is ${this.name} am ${this.age} years old, i teach ${this.subject} with ${this.award}."
    );
}
}

const person = new person ("Blessing", "15");
person.introduce();

const student = new student("Anna", "17", "white", 3);
student.introduce();
student.study();

const teacher = new teacher("Daniel", "25", "Biology", 7); 
teacher.introduce();
teacher.teach();