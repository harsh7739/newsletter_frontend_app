import { useState } from "react"

function NewsLetter(){
    const [email,setEmail] = useState("")


   async function handleClick(){
    
             try {
                let res = await fetch("https://newletter-backend-2.onrender.com",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({email})
                })
                res=await res.json()
                alert(res)
                console.log(res)
             } catch (error) {
                console.log(error)
             }
    }
    return (
        <>
        <input type="email" value={email} placeholder="Enter Newsletter" onChange={(e)=>setEmail(e.target.value)} />
        <button onClick={handleClick}>Send Newsletter</button>
        </>
    )
}
export default NewsLetter