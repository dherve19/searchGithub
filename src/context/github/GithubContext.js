import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducer"


const GithubContext = createContext()
/* const GITHUB_URl = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN */

export const GithubProvider = ({children}) => {
    const initialState = {
        users:[],
        user:{},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

   /*  const SearchUser = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q: text
        })
        console.log(`${GITHUB_URl}/search/users?${params}`)
        const response = await fetch(`${GITHUB_URl}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const {items} = await response.json()
        console.log(items)
        dispatch({
            type:'GET_USERS',
            payload: items,
        })

    } */





    // method to get users
   /*  const fetchUsers = async () => {
        setLoading()
        const response = await fetch(`${GITHUB_URl}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()
        console.log(data)
        dispatch({
            type:'GET_USERS',
            payload: data,
        })

    } */

    // set loading
 /*    const setLoading = () => dispatch({
        type: 'LOADING'
    }) */

    // clear users from the state
    const clearUsers = () => dispatch({
        type: 'CLEAR_USERS'
    })

    return <GithubContext.Provider value={{
                ...state,
                dispatch,

            }}>
                {children}
           </GithubContext.Provider>

}

export default GithubContext