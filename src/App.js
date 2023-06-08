import Feed from './Components/Feed';
import Righbar from './Components/Righbar';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Add from './Components/Add';
import {Box, Stack, createTheme, ThemeProvider} from "@mui/material";
import {useState} from "react"

function App() {
  const [mode,setMode] = useState("light")

  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
     <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2}>
        <Sidebar setMode={setMode} mode={mode}/>
         <Feed />
         <Righbar />
      </Stack>
      <Add />
    </Box>
  </ThemeProvider>
         
  );
}

export default App;
