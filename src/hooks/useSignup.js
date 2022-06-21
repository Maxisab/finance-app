import { useState } from "react"
import { projectAuth } from '../firebase/config'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(null)

  const signup = async (email, password, name) => {
    setError(null)
    setIsPending(true)

    try {
      // signup user
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      console.log(res.user)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // add dsiplay name to user
      await res.user.updateProfile({ displayName: name })

      setIsPending(false)
      setError(null)
      
    }
    catch (err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { error, isPending, signup }
}