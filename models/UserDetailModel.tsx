interface IUser{
    id:number;
    name:string;
    surname: string;
    email:string ;
    password: string ;
    role: number;
}
export class UserDetailModel{
    static mapUserDetail(payload:any){
        const UserDetail = Array<IUser>();
        Object.values(payload).forEach((item:any) => {
            let newUser  = {} as IUser; 
            newUser.id = item.userId;
            newUser.name = item.name;
            newUser.surname = item.surname;
            newUser.email = item.email;
             newUser.password = item.password;
             newUser.role = item.roleId;
         UserDetail.push(newUser);

        })
        return UserDetail;
    }
}