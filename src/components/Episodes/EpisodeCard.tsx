import { graphql } from "../../gql";
import { Card, CardBody } from "@chakra-ui/react";
import { useQuery } from "urql";
import { Loading } from "../../Loading";

const EpisodeDocument = graphql(/* GraphQL */ `
  query Episode($id: ID!) {
    episode(id: $id) {
      id
      name
    }
  }
`);

export const EpisodeCard: React.FC<{
  id: string;
}> = ({ id }) => {
  let [{ data }] = useQuery({
    query: EpisodeDocument,
    variables: { id },
  });

  return (
    <Loading loading={!data?.episode}>
      <Card>
        <CardBody>{data?.episode?.name}</CardBody>
      </Card>
    </Loading>
  );
};
