import React, {useState} from 'react'

const Connexion = () => {

    useConnexionUser()

    const handleChange = (e) => {
      console.log(e.target.value)
    }
    
    const handleChangeMdp = (e) => {
      console.log(e.target.value)
    }

    return (
        <>
          <input placeholder='Id' onChange={handleChange} />
          <input placeholder='**********' onChange={handleChangeMdp} />
        </>
    )
}

export default Connexion

const useConnexionUser = () => {
    const [id, setId] = useState("GWP")
    const [mdp, setMdp] = useState("")

    return ({id})
}