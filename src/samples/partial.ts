interface Person {
    name: string;
    age: number;
    address: string;
}

// Creating a partial type of Person where all properties are optional
type PartialPerson = Partial<Person>;

// Example usage
const partialPerson: PartialPerson = {
    name: "John",
    age: 30,
    // address is optional, so it's okay to omit it
};

export const getPerson = () => {
    return partialPerson;
}