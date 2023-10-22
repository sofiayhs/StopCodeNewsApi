export class Login{
    email: string = "";
    password:string ="";
}

export interface User {
    email: string;
    nome: string;
    id: number;
}


export interface LoggedUser {
    user: User;
    accessToken: string;
}