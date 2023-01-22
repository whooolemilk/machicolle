import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"

export default function Home() {
  const [user, setUser] = useState([])

  useEffect(() => {
    const loadUser = async () => {
      const db = getFirestore()
      const ref = collection(db, 'users')

      const snapshot = await getDocs(ref)

      const list = snapshot.docs.map((doc) => {
        return doc.data()
      })
      console.log(list);
      
      setUser(list)
    }

    loadUser()
  }, [])

  return <p></p>
}
