interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  },
];

export function getUserById(id: number, callback: (err?:string, user?: User) => void) {
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user) {
    return callback(`User with id ${id} not found`, undefined);
  }
  callback(undefined, user);
}


