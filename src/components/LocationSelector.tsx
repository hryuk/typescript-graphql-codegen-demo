import { graphql } from "../gql";
import { Select } from "@chakra-ui/react";
import { useQuery } from "urql";
import { Loading } from "../Loading";

const LocationsDocument = graphql(/* GraphQL */ `
  query Locations {
    locations {
      results {
        id
        name
      }
    }
  }
`);

export const LocationSelector: React.FC<{}> = () => {
  const [{ data }] = useQuery({ query: LocationsDocument });

  return (
    <Loading loading={!data?.locations}>
      <Select placeholder="Select a location">
        {data?.locations?.results &&
          data?.locations?.results.map((location) => (
            <option key={location?.id} value={location?.name!}>
              {location?.name}
            </option>
          ))}
      </Select>
    </Loading>
  );
};
