import { Button, ButtonGroup, Show } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
const App = () => {
  return (
    <Grid
  templateAreas={{
    base:`"nav" "main"`,
    lg:`"nav nav" "aside main"`}}>

  <GridItem pl='2' bg='orange.300' area={'nav'}>
    Nav
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