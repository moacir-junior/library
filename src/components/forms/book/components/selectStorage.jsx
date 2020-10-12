import React, {useState} from 'react'
import { InputLabel } from '@material-ui/core'
import { Select } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'

export default function SelectStorage({ storages, selectedStorage, onChange }) {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <InputLabel>Prateleira</InputLabel>
      <Select fullWidth
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={onChange}
        value={selectedStorage}
      >
        {storages?.map(storage =>
          <MenuItem key={storage.id} value={storage.name}>{storage.name}</MenuItem>
        )}
      </Select>
    </>
  )
}