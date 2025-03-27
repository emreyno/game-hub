import { Show } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './component/NavBar'
const App = () => {
  return (
    <Grid
  templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "aside main"`}}>

  <GridItem pl='2' area={'nav'}>
    <NavBar></NavBar>
  </GridItem>
  <Show above='lg'>
    <GridItem pl='2' bg='pink.300' area={'aside'}>
    Aside
  </GridItem>
  </Show>
  
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
</Grid>
  )
}

export default App