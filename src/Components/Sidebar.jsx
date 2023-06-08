import { Home, Article, Group, Storefront, Person, Settings, AccountBox, ModeNight } from "@mui/icons-material"
import { Box , List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material"



const Sidebar = ({mode, setMode}) => {
  return (
   <Box  flex={1} p={2} sx={{ display:{xs:"none", sm:"block"}}}>
    <Box position="fixed">
    <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={(e) => setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
   </Box>
  )
}

export default Sidebar