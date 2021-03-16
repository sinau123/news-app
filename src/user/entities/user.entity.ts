import { v4 as uuidv4 } from 'uuid';

export class User {
  id: string;

  constructor(public name: string, public age: number) {
    this.id = uuidv4();
  }
}
