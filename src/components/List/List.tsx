import { useEffect, useState } from 'react'
import style from './List.module.css'
import ListItem from './ListItem'
import Details from '../Details/Details'

type User = { id: number; name: string }

const List = () => {
  const [users, setUsers] = useState<User[] | null>(null)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
      )
      const data: User[] = await response.json()
      setUsers(data)
    }
    fetchUsers()
  }, [])

  if (!users) return null

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {users.map((user) => (
          <ListItem
            key={user.id}
            user={user}
            isSelected={user.id === selectedId}
            onSelect={() => setSelectedId(user.id)}
          />
        ))}
      </ul>
      {selectedId && <Details userId={selectedId} />}
    </div>
  )
}

export default List
