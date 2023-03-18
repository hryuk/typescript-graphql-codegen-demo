import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "urql";
import { CharacterGrid } from "../components/Characters/CharacterGrid";
import { EpisodeGrid } from "../components/Episodes/EpisodeGrid";
import { graphql } from "../gql";
import { PageLayout } from "../PageLayout";

const pageIndexDocument = graphql(/* GraphQL */ `
  query CharactersIndex {
    characters {
      results {
        id
      }
      info {
        count
      }
    }
    episodes {
      results {
        id
      }
      info {
        count
      }
    }
    locations {
      results {
        id
        name
      }
    }
  }
`);

export function CharactersIndexPage() {
  let [{ fetching, error }] = useQuery({
    query: pageIndexDocument,
  });

  const [, setTabIndex] = useState(0);

  return (
    <PageLayout fetching={fetching} error={error}>
      <Tabs isLazy onChange={setTabIndex}>
        <TabList>
          <Tab>Characters</Tab>
          <Tab>Episodes</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CharacterGrid />
          </TabPanel>
          <TabPanel>
            <EpisodeGrid />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </PageLayout>
  );
}
