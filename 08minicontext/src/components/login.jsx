import React,{useState,useContext} from "react";
function login(){
const [username, setusername] = useState('')
const {setuser}=uercontext(useContext)
const [password,setpassword]=useState('')
const handlesubmit=(e)=>{ e.preventdefault()
    setuser({username,password })
}
return(
    <div>
    <h1>login</h1>
< input 
type='text'
value={username}
onchange={(e)=>setusername(e.targe.value)}
placeholder={username}/>
< input 
type='text'
value={password}
onchange={(e)=>setpassword(e.targe.value)}
placeholder={password} />
<button onClick={handlesubmit}>submit</button>
    </div> 
) }
export default login