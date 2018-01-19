export class User {
    constructor(
      public id: number = null,
      public firstName: string = "",
      public lastName: string = "",
      public email: string = "",
      public password: string = "",
      public cPassword: string = "",
      public address: string = "",
      public apt: string = "",
      public city: string = "",
      public state: string = "",
      public lucky: string = "",
      public created_at: Date = new Date(),
      public updated_at: Date = new Date()
    ){}
  }
