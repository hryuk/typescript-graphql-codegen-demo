import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useQuery } from "urql";
import { graphql } from "../../gql";
import { Loading } from "../../Loading";
import { CharacterCard } from "./CharacterCard";

const CharactersDocument = graphql(/* GraphQL */ `
  query Characters {
    characters {
      results {
        id
        name
        image
      }
      info {
        count
      }
    }
  }
`);

export const CharacterGrid: React.FC<{}> = () => {
  let [{ data }] = useQuery({ query: CharactersDocument });

  return (
    <Loading loading={!data?.characters?.results}>
      <>
        <Box mb="4">
          {data?.characters?.info?.count ?? 0} characters in total
        </Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {(data?.characters?.results || []).map(
            (character) =>
              character && (
                <GridItem key={character.id}>
                  <CharacterCard id={character.id!} />
                </GridItem>
              )
          )}
        </Grid>
      </>
    </Loading>
  );
};
