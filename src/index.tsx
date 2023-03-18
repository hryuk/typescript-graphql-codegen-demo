import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { CharactersIndexPage } from "./pages/CharactersIndex";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import { createClient, dedupExchange, fetchExchange, Provider } from "urql";
import { devtoolsExchange } from "@urql/devtools";
import { cacheExchange } from "@urql/exchange-graphcache";

const client = createClient({
  url: "https://rickandmortyapi.com/graphql",
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    //cacheExchange({}),
    fetchExchange,
  ],
  suspense: true,
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Suspense fallback={<Spinner />}>
        <Provider value={client}>
          <CharactersIndexPage />
        </Provider>
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
