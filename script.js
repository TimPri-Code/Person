
class Person {
  constructor(school, course) {
    this.school = school;
    this.course = course;
  }

  introduce() {
    console.log(
        "my school name is ${this.school}, am studying ${this.course}
        );
  }
}


class Student extends Person {
  constructor(school, course, faculty, session) {
    super(school, course); 
    this.faculty = faculty;
    this.session = session;
      }

  study() {
    console.log(
      "I school in ${this.school} am studying ${this.course} in the ${this.faculty} in ${this.session}."
    );
  }
}

class Teacher extends Person {
    constructor(school, course, department, awards) {
        super(school,course);
        this.department = department;
        this.awards = awards
        
    }
    
teach() {
    console.log(
     "The teacher of this ${this.school} is teaching ${this.course} in ${this.department} with ${this.award}"
    )
}
}

const person = new person ("UNN", "accounting");
person.introduce();

const student = new student("Lasu", "Mass communication", "arts", 3);
student.introduce();
student.study();

const teacher = new teacher("yaba tech", "electricals", "enginnering", 7); 
teacher.introduce();
teacher.teach();