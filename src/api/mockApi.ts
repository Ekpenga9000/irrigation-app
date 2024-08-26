import userData from "./mockUserData.json"; 

interface User{
    id: string;
    fullname: string;
    email: string;
    password: string;
    imageLink: string;  
}

export const fetchUser = (email: string, password:string): Promise<User | null> => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            const user = userData.users.find((u) => u.email === email && u.password === password ); 
            resolve(user || null); 
        }, 1000); 
    })

}