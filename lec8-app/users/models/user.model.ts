import { v4 } from "uuid";
export class User {
  constructor(
    public id: String = v4(),
    public firstName: String = '',
    public lastName: String = '',
    public birthDate: Date | null = null,
    public isActive: boolean = false
  ) {}
}
