import {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import {SearchUsers} from '../../context/github/GithubActions'

function Usersearch() {
    const [text, setText] = useState('')
    const {users, clearUsers, dispatch} = useContext(GithubContext)
    const {alert, setAlert} = useContext(AlertContext)
    const handleChange = (e) =>{
        setText(e.target.value)

    }
    const handleSubmit = async(e) => {
        console.log('in submit')
        e.preventDefault()
        if (text === '') {
            setAlert('please enter something!', 'error')
        } else {
            dispatch({
                type: 'SET_LOADING'
            })
            console.log('in ok');
           const users = await SearchUsers(text)
           dispatch({
               type: 'GET_USERS',
               payload: users
           })
           setText('')
        }
    }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-ols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="relative">
                    <input
                        type='text'
                        className='w-full pr-40 bg-gray-200 input input-lg text-black'
                        placeholder="search"
                        value={text}
                        onChange= {handleChange}

                    />
                    <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                        type="submit"
                    >
                        Go
                    </button>
                </div>
            </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
            <button className="btn btn-ghost btn-lg" onClick={()=> dispatch({type:'CLEAR_USERS'})}>Effacer</button>
        </div>
      )}

    </div>
  )
}

export default Usersearch
