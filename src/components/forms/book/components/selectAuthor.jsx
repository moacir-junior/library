import React, {useState} from 'react'
import { InputLabel } from '@material-ui/core'
import { Select } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'

export default function SelectAuthor({ authors, selectedAuthor, onChange }) {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <InputLabel>Autor</InputLabel>
      <Select fullWidth
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={onChange}
        value={selectedAuthor?.name}
      >
        {authors?.map(author =>
          <MenuItem key={author.id} value={author.name}>{author.name}</MenuItem>
        )}
      </Select>
    </>
  )
}