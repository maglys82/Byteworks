import { useState } from 'react'

const useData = () => {
  const [user, setUser] = useState(null)

  const setData = (data) => setUser(data)

  return { getData: user, setData }
}

export default useData