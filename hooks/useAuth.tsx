import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
  } from 'firebase/auth'
import {auth} from '../firebase';
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

interface AuthProviderProps {
    children: React.ReactNode;
}

interface IAuth {
    user: User | null
    signUp: (email: string, password: string) => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    error?: string | null
    loading?: boolean
}

const AuthContext = createContext<IAuth>({
    user:null,
    signUp: async () => {},
    signIn: async () => {},
    logout: async () => {},
    error: null,
    loading: false
})

export const AuthProvider = ({children}:AuthProviderProps) => {
    const [loading, setLoading] = useState(false)
    const [initialLoading, setInitialLoading] = useState(true)
    // firebase user
    const [user, setUser] = useState<User|null>(null)
    const [error, setError] = useState(null)
    const router = useRouter()
    
    // if not login, push user to login page
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
                setLoading(false)
            } else {
                setUser(null)
                setLoading(true)
                router.push('/login')
            }
            setInitialLoading(false)
        })
    }, [auth])
    
    const signUp = async (email: string, password: string) => {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user)
            router.push('/')
            setLoading(false)
        })
        .catch((error) => alert(error.message))
        .finally(()=> setLoading(false));
    }
    
    const signIn = async (email: string, password: string) => {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user)
            router.push('/')
            setLoading(false)
        })
        .catch((error) => alert(error.message))
        .finally(()=> setLoading(false));
    }

    const logout = async() => {
        setLoading(true)
        // signout from firebase
        await signOut(auth).then(()=> {
            setUser(null)
        })
        .catch((error) => alert(error.message))
        .finally(()=> setLoading(false))
    }
    
    // more performant
    // similar to useEffect but only re-compute if one of the dependencies changes
    const memoedValue = useMemo(() => ({
        user, 
        signUp, 
        signIn, 
        loading, 
        logout,
        error
    }), [user, loading, error])

    return (
        <AuthContext.Provider value={memoedValue}>
            {!initialLoading && children}
        </AuthContext.Provider>
        
    );
}

export default function useAuth() {
    return useContext(AuthContext);
};