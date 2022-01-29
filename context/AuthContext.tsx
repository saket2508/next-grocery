import { createContext, useState, useEffect, FC } from "react";
import axios from 'axios';

interface AuthContextState{
    isAuth: boolean;
    error: boolean;
    authLoading: boolean;
    username : string | null;
    _setError?: (val: boolean) => void;    
    _setAuth? : (val: boolean) => void;
    _setUsername? : (val: string | null) => void;
    signOut?: () => void;
}

const defaultState : AuthContextState = {
    username: null,
    isAuth: false,
    authLoading: true,
    error: false
}

const AuthContext = createContext<AuthContextState>(defaultState)

const AuthProvider: FC = ({ children }) => {
    const [ isAuth, setIsAuth ] = useState<boolean>(defaultState.isAuth)
    const [ authLoading, setAuthLoading ] = useState<boolean>(defaultState.authLoading)
    const [ error, setError ] = useState<boolean>(defaultState.error)
    const [ username, setUsername ] = useState<string | null>(defaultState.username)

    const _setAuth = (val: boolean) => setIsAuth(val)

    const _setUsername = (val: string | null) => setUsername(val)

    const _setError = (val: boolean) => setError(val)


    const getAuth = () => {
        if(!isAuth){
            axios.get('/api/user/auth', { withCredentials: true })
                .then(res => res.data)
                .then(data =>{
                    const { name } = data
                    setIsAuth(true)
                    setUsername(name)
                    setAuthLoading(false)
                }).catch(err => {
                    if(err.response?.status === 501){
                        setError(true)
                        setAuthLoading(false)
                        console.error(err)
                        return
                    }
                    setAuthLoading(false)
            });
        }
    }

    useEffect(() => {
        getAuth()
    }, [])

    return(
        <AuthContext.Provider
            value={{
                isAuth,
                username,
                error,
                authLoading,
                _setError,
                _setUsername,
                _setAuth,
            }}
        >   
            {children}
        </AuthContext.Provider>

    )
}

export { AuthContext, AuthProvider }