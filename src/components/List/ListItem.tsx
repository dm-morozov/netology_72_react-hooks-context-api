import type { FC } from 'react'
import style from './ListItem.module.css'

interface ListItemProps {
  user: { id: number; name: string }
  isSelected: boolean
  onSelect: () => void
}

const ListItem: FC<ListItemProps> = (props) => {
  const { user, isSelected, onSelect } = props

  return (
    <li
      className={`${style.item} ${isSelected ? style.selected : ''}`}
      onClick={onSelect}
    >
      {user.name}
    </li>
  )
}

export default ListItem
