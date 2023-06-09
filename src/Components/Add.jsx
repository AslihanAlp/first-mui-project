import { styled, Fab, Modal, Tooltip, Typography, TextField, Avatar, Stack, ButtonGroup, Button} from "@mui/material"
import { Add as AddIcon, EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange} from "@mui/icons-material"
import {useState} from "react"
import {Box} from "@mui/system"
import img1 from "../assets/img1.jpg"


const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    
})

const Add = () => {

    const[open,setOpen] = useState(false)

  return (
    <>
    <Tooltip 
        onClick={(e)=>setOpen(true)}
        title="Delete" 
        sx={{position:"fixed", bottom:20, left: {
          xs: "calc(50% - 25px)", 
          md: 30, 
        }}}>
      <Fab color="primary">
        <AddIcon />
      </Fab>
    </Tooltip>
    <StyledModal
      open={open}
      onClose={(e)=>setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
    <Typography variant="h6" color="gray" textAlign="center">
        Create post
    </Typography>
    <UserBox>
        <Avatar 
          src={img1}
          sx={{width:30, height:30}}/>
        <Typography fontWeight={500} variant="span">Tylor Ben</Typography>
    </UserBox>
    <TextField 
      id="standard-multiline-static"
      multiline
      rows={3}
      sx={{width:"100%"}}
      placeholder="What's on your mind?"
      variant="standard"
      />
      <Stack direction="row" gap={1} mt={2} mb={3}>
        <EmojiEmotions color="primary" />
        <Image color="secondary" />
        <VideoCameraBack color="success" />
        <PersonAdd color="error" />
      </Stack>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        fullWidth>
        <Button sx={{width:"100px"}}>Post</Button>
        <Button>
          <DateRange />
        </Button>
      </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add