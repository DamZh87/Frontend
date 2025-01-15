import {createContext, useEffect, useState} from "react";
import axios from "axios";
export const UserContext = createContext(undefined);

const UserProvider = ({children}) => {
    const [user, setUser] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const logout = () => {
        setUser(undefined)
        
    }

    const instance = axios.create({  
            baseURL: 'https://jsonplaceholder.org/',
             });
        useEffect(() => {
            instance.get('/users/')
            .then((response) => {
                    setUser(response.data);
                     console.log(response.data);
                    })
                    .catch((err)=>{console.log(err);
                      })
    
                .finally(()=>{
                        setIsLoading(false)
                    });
                }, []);

    const values = {
        user,
        setUser,
        isLoading,
        logout,
    }
    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;