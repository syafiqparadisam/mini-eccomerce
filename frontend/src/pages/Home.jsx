import Tables from "../components/Tables";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Grid, GridItem } from "@chakra-ui/react";

const Home = () => {
  console.log(import.meta.env.VITE_APIURL)
  return (
    <>
      <Grid templateColumns={'repeat(5, 20%)'} w={'100%'} templateRows={'repeat(10, 10vh)'}>
        <GridItem colStart={2} colEnd={6} rowStart={0} rowEnd={1}>
          <Topbar />
        </GridItem>
        <GridItem colStart={0} colEnd={2} rowSpan={10}>
          <Sidebar />
        </GridItem>
        <GridItem colStart={2} colEnd={6} rowStart={1} rowEnd={10}>
          <Tables />
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
