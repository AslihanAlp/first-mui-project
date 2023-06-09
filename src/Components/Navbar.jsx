import { AppBar,  Toolbar, Typography, styled, Box, Badge, InputBase, Avatar, Menu, MenuItem} from "@mui/material"
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import {  Mail, Notifications } from "@mui/icons-material";
import {useState} from "react"
import img1 from "../assets/img1.jpg"



const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"40%"
}))

const Icons = styled(Box)(({theme}) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  },
  cursor:"pointer"
}))

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  },
  cursor: "pointer"
}))

const Navbar = () => {
  const [open, setOpen]= useState(false)
  return (
    
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
          
          Fakebook
        </Typography>
        <SupervisorAccountIcon />
        <Search><InputBase placeholder="search.."/></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
        <Mail  />
        </Badge>
        <Badge badgeContent={4} color="error">
        <Notifications  />
        </Badge>
        <Avatar 
            src={img1}
            sx={{width:30, height:30}}
            onClick={(e) => setOpen(true)}/>
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
        <Avatar src={img1}
                sx={{width:30, height:30}}/>
        <Typography variant="span">Taylor</Typography>        
        </UserBox>
        
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </AppBar>
     
    
    
    
  )
}

export default Navbar