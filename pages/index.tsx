import { GetServerSideProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
  req,
}) => {
  console.log(
    "[example.tsx] getServerSideProps this is a server side function call"
  );
  return {
    props: {
      query,
    },
  };
};

interface Props {
  // ParsedUrlQuery is a type from Next.js, which exposes the query parameters in the URL
  query: ParsedUrlQuery;
}

// Add ?id=test to the URL to see the query parameter in action
const ExamplePage = (props: Props) => {
  const [exampleJson, setExampleJson] = useState<any>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    // Fetch some data from the API, defined at /pages/api/example.ts
    fetch("/api/example?id=test")
      .then((response) => response.json())
      .then((data) => setExampleJson(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Example page</h1>
      <h3>Getting URL Params</h3>
      <p>URL parameters server received:</p>
      <code>{JSON.stringify(props.query)}</code>
      <p>
        Hint: Add <code>?id=test</code> to the URL to see the query parameter in
        action.
      </p>
      <h3>Making requests</h3>
      <p>Request to API</p>
      <code>/api/example?id=test</code>
      <p>Response from API Request:</p>
      {error && <code>Received Error: {JSON.stringify(error)}</code>}
      <code>{JSON.stringify(exampleJson)}</code>
    </div>
  );
};

export default ExamplePage;
