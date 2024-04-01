// CODE
// Display all people starting with alex and display level from the top
interface IPerson {
  name: string;
  boss?: string;
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
    boss: 'alex',
    subordinates: ['mitchel'],
  }
  ,
  {
    name: 'ira',
    boss: 'alex',
    subordinates: ['eugene'],
  }
  ,
  {
    name: 'mitchel',
    boss: 'mila',
  }
  ,
  {
    name: 'eugene',
    boss: 'ira',
    subordinates: ['jacob', 'jesse'],
  }
  ,
  {
    name: 'jacob',
    boss: 'eugene',
  }
  ,
  {
    name: 'jesse',
    boss: 'eugene',
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
