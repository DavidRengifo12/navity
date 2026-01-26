
import { useState } from "react";
import supabase from "../../Supabase"
import { useEffect } from "react";
import { use } from "react";
import { useContext } from "react";

const Authcontext = () => {
    user: null;
    isAuthenticated: false;
    logout: async () => {}
}

export default function Authcontext({children}) {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const [loading, setLoading] = useState(true)

    const loadPerfilUser =async(authUser) =>{
        if(!authUser){
            setUser(null)
            setIsAuthenticated(false)
            return
        }

        const {data: perfil} = await supabase
        .from("usuarios") //Esta parte es como lo llamamos en supabase a la tabla no olvidase wey
        .select("*")
        .eq("id", authUser.id)
        .single()

        if(perfil){
            perfil.email = authUser.email
            setUser(perfil)
            setIsAuthenticated(true)
        }
    }

    useEffect(() => {
        supabase.auth.getUser().then(({data})=> {
            if(data.user){
                loadPerfilUser(data.user)
            }
            setLoading(false)
        })

        const {data: subscription} = supabase.auth.onAuthStateChange(
            (_event, session) => {
                if(session?.user) return loadPerfilUser(session.user)
                else {
                    setUser(null)
                    setIsAuthenticated(false)
                }
            }
        )
        return () => {
            subscription.subscription.unsubscribe()
        }
    }, [])

    const logout = async () => {
        await supabase.auth.signOut()
        setUser(null)
        setIsAuthenticated(false)
    }

  return (
    <Authcontext.Provider value={{user, isAuthenticated, logout}} >
        {loading ? <div>Cargando ...</div> : children}
    </Authcontext.Provider>
      
  )
}

export const useAuth = ()=> useContext(Authcontext)