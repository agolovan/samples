// CODE
// Display all people starting with alex and display level from the top
interface IPerson {
  name: string;
  subordinates?: string[];
  level?: number;
}

const people: Array<IPerson> = [
  {
    name: 'alex',
    subordinates: ['mila', 'ira'],
  }
  ,
  {
    name: 'mila',
    subordinates: ['mitchel'],
  }
  ,
  {
    name: 'ira',
    subordinates: ['eugene'],
  }
  ,
  {
    name: 'mitchel',
  }
  ,
  {
    name: 'eugene',
    subordinates: ['jacob', 'jesse'],
  }
  ,
  {
    name: 'jacob',
  }
  ,
  {
    name: 'jesse',
  }
]  
  
const peopleArray: Array<IPerson> = [];

const traversePeople = (name: string, level: number) => {
    peopleArray.push( {
      name,
      level
    }
  );
  
  const person = people.find ( person => person.name === name);
  const subordinates = person.subordinates;
  subordinates?.forEach ( name => {
    traversePeople(name, level + 1);
  })
}

export const processPeople = () => {
  traversePeople('alex', 1);
  return peopleArray;
}
