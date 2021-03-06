export class Person {
  // public name: string;
  // public surname: string;
  // private age: number;
  // protected cpf: string;

  // constructor(name: string, surname: string, age: number, cpf: string) {
  //   this.name = name;
  //   this.surname = surname;
  //   this.age = age;
  //   this.cpf = cpf;
  // }

  //OU simplificando
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getCompletedName(): string {
    return this.name + ' ' + this.surname;
  }
}

export class Student extends Person {
  // room: string;

  constructor(
    name: string,
    surname: string,
    age: number,
    cpf: string,
    public room: string, // Criado
  ) {
    super(name, surname, age, cpf);
    // this.room = room;
  }

  getCompletedName(): string {
    console.log('Fazendo algo antes');
    const result = super.getCompletedName();
    return result + ' HEEEEEEEY';
  }
}
export class Client extends Person {
  getCompletedName(): string {
    return 'Isso vem do Client: ' + this.name + ' ' + this.surname;
  }
}

const person = new Person('Luis', 'Henrique', 25, '000.000.000-00');
const student = new Student('Luis', 'Henrique', 25, '000.000.000-00', '001');
const client = new Client('Luis', 'Henrique', 25, '000.000.000-00');

console.log(person.getCompletedName());
console.log(student.getCompletedName());
console.log(client.getCompletedName());
console.log(student);
