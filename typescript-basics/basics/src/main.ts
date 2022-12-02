// //TS object
// const stud1: { name: string; age: number; enrolled: boolean } = {
//   name: "John",
//   age: 20,
//   enrolled: true,
// };

// //JS object
// const stud2 = {
//   name: "John",
//   age: 20,
//   enrolled: true,
// };

interface Student {
  readonly name: string;
  age: number;
  enrolled?: boolean;
  greet(): void;
}

// interface UndergradStudent extends Student {
//   major?: string;
// }

// const stud3: UndergradStudent = {
//   name: "kim",
//   age: 18,
//   enrolled: true,
//   major: "chemistry",
// };
// //classes
// class Pupil {
//   grade: number;
//   private id: number;
//   protected nickname: string;
//   constructor(grade: number, id: number, nickname: string) {
//     this.grade = grade;
//     this.id = id;
//     this.nickname = nickname;
//   }
// }

//Factory design pattern

// function studentFactory(name: string, age: number): Student {
//   function greet():void {
//     console.log('Hello');
//   }
//   return{name, age, greet}
// }
// const student1 = studentFactory('Femi', 24)

// Generics

function getItemString<T>(arr: T[]): T {
  return arr[1];
}

// Async Await
async function myFunc(): Promise<void> {
  const result = await getItemString([]);
  console.log(result);
}
// Async Await Arrow
const myFunc2 = async ():Promise<void> => { /* do stuff */};


