import { GetServerSideProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import Card from "../components/Card";

interface Props {
  // ParsedUrlQuery is a type from Next.js, which exposes the query parameters in the URL
  query: ParsedUrlQuery;
}

export default function Index(props: Props) {
  return (
    <div id="dashboard">
      <Card>
      </Card>

      <Card>
      </Card>
      
      <Card>
      </Card>
    </div>
  )
}