import { IconButton } from "@mui/material"
import { AddOutlined } from '@mui/icons-material'

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    <>
    <JournalLayout>
      {/*<Typography>Deserunt nisi esse duis nulla in adipisicing tempor Lorem deserunt quis culpa. Ut consectetur nostrud aute dolor. Magna consectetur non ipsum sunt ipsum ex cillum culpa.</Typography>
      */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{fontSize: 30}} />

      </IconButton>
    </JournalLayout>
    </>
  )
}
