
class Person{
  constructor(name, age) {
    this.name = name;
    this.age = age;
 
 }

 introduction() {
  console.log(
    'Hi, my name is ${this.name} and I am ${this.age} years old.'
  );
 }
}

class Students extends Person{
  constructor(name, age, state, height) {
    super(name, age);
    this.state = state;
    this.height = this.height;
  }

state() {
  console.log(
  'Am ${this.name} am from ${this.state} am ${this.height} tall.'
  );
}
}

class Teacher extends Person{
  constructor(name, age, subject, awards) {
    super(name, age);
    this.subject = subject;
    this.awards = this.awards;
  }

  teacher() {
    console.log(
      ' Am ${this.name} I teach ${this.subject} with ${this.awards} awards'
    );
  }
}
const person = new Person("Anna", 12);
person.introduction();

const students = new Students("Daniel", 14, "Imo", 3);
students.introduction();
students.state();

const teacher = new Teacher("John", 34, "maths", 4);
teacher.introduction();
  teacher.teacher();


