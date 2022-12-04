import jwt_decode from "jwt-decode"
interface IToken{
    Id: string |number
}
export const tokenParse = (token:string|any):IToken => {
    return jwt_decode(token)
}