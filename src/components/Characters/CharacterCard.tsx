import { graphql } from "../../gql";
import { Card, CardBody, Image } from "@chakra-ui/react";
import { useQuery } from "urql";
import { Loading } from "../../Loading";

const CharacterDocument = graphql(/* GraphQL */ `
  query Character($id: ID!) {
    character(id: $id) {
      name
      image
    }
  }
`);

export const CharacterCard: React.FC<{ id: string }> = ({ id }) => {
  let [{ data }] = useQuery({
    query: CharacterDocument,
    variables: { id },
  });

  return (
    <Loading loading={!data?.character}>
      <Card>
        <CardBody>
          {data?.character?.name}
          {data?.character?.image && <Image src={data.character.image} />}
        </CardBody>
      </Card>
    </Loading>
  );
};
