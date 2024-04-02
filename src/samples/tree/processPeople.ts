// Display all people starting with top and level from the top for each person
interface IPerson {
  name: string;
  subordinates?: string[];
  level?: number;
}

const topName = 'alex';

const people: Array<IPerson> = [
  {
    name: 'alex',  // level 1
    subordinates: ['mila', 'ira'],
  }
  ,
  {
    name: 'mila', // level 2
    subordinates: ['mitchel'],
  }
  ,
  {
    name: 'ira', // level 2
    subordinates: ['eugene'],
  }
  ,
  {
    name: 'mitchel', // level 3
  }
  ,
  {
    name: 'eugene',  // level 3
    subordinates: ['jacob', 'jesse'],
  }
  ,
  {
    name: 'jacob', // level 4
  }
  ,
  {
    name: 'jesse', // level 4
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
  traversePeople(topName, 1);
  return peopleArray;
}
