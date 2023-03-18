/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Character($id: ID!) {\n    character(id: $id) {\n      name\n      image\n    }\n  }\n": types.CharacterDocument,
    "\n  query Characters {\n    characters {\n      results {\n        id\n        name\n        image\n      }\n      info {\n        count\n      }\n    }\n  }\n": types.CharactersDocument,
    "\n  query Episode($id: ID!) {\n    episode(id: $id) {\n      id\n      name\n    }\n  }\n": types.EpisodeDocument,
    "\n  query Episodes {\n    episodes {\n      results {\n        id\n      }\n      info {\n        count\n      }\n    }\n  }\n": types.EpisodesDocument,
    "\n  query Locations {\n    locations {\n      results {\n        id\n        name\n      }\n    }\n  }\n": types.LocationsDocument,
    "\n  query CharactersIndex {\n    characters {\n      results {\n        id\n      }\n      info {\n        count\n      }\n    }\n    episodes {\n      results {\n        id\n      }\n      info {\n        count\n      }\n    }\n    locations {\n      results {\n        id\n        name\n      }\n    }\n  }\n": types.CharactersIndexDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Character($id: ID!) {\n    character(id: $id) {\n      name\n      image\n    }\n  }\n"): (typeof documents)["\n  query Character($id: ID!) {\n    character(id: $id) {\n      name\n      image\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Characters {\n    characters {\n      results {\n        id\n        name\n        image\n      }\n      info {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query Characters {\n    characters {\n      results {\n        id\n        name\n        image\n      }\n      info {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Episode($id: ID!) {\n    episode(id: $id) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query Episode($id: ID!) {\n    episode(id: $id) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Episodes {\n    episodes {\n      results {\n        id\n      }\n      info {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query Episodes {\n    episodes {\n      results {\n        id\n      }\n      info {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Locations {\n    locations {\n      results {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Locations {\n    locations {\n      results {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CharactersIndex {\n    characters {\n      results {\n        id\n      }\n      info {\n        count\n      }\n    }\n    episodes {\n      results {\n        id\n      }\n      info {\n        count\n      }\n    }\n    locations {\n      results {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query CharactersIndex {\n    characters {\n      results {\n        id\n      }\n      info {\n        count\n      }\n    }\n    episodes {\n      results {\n        id\n      }\n      info {\n        count\n      }\n    }\n    locations {\n      results {\n        id\n        name\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;