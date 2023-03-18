import { Box, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { useQuery } from "urql";
import { graphql } from "../../gql";
import { Loading } from "../../Loading";
import { LocationSelector } from "../LocationSelector";
import { EpisodeCard } from "./EpisodeCard";

const EpisodesDocument = graphql(/* GraphQL */ `
  query Episodes {
    episodes {
      results {
        id
      }
      info {
        count
      }
    }
  }
`);

export const EpisodeGrid: React.FC<{}> = () => {
  let [{ data }] = useQuery({ query: EpisodesDocument });

  return (
    <Loading loading={!data?.episodes?.results}>
      <>
        <Box mb="4">{data?.episodes?.info?.count} episodes in total</Box>
        <LocationSelector />
        <Grid paddingTop="20px" templateColumns="repeat(5, 1fr)" gap={6}>
          {(data?.episodes?.results || []).map(
            (episode) =>
              episode && (
                <GridItem key={episode.id}>
                  <EpisodeCard id={episode.id!} />
                </GridItem>
              )
          )}
        </Grid>
      </>
    </Loading>
  );
};
