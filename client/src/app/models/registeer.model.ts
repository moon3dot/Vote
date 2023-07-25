export interface register {
    name?: string,
    email: string,
    password: string,
    confirmPass?: string,
    isAdmin? : boolean
}