class Person{
    constructor(name){
        this.name=name;
    }
sayName(){
    console.log(this.name);
}
}
class Student extends Person{
    constructor(name,rollNumber){
        super(name);
        this.rollNumber=rollNumber;
    }
logdetails(){
    console.log(`Name:${this.name},Rollnumber:${this.rollNumber}`);
}
sayName(){
    //do stuff
    console.log("from Student");
    super.sayName();
    }
}
var student=new Student("heisenberg",1);
student.logdetails();
student.sayName();
