import React, { useEffect, useState } from "react";
import Portfolio from "../src/components/portfolio";
import Layout from "../src/layout/layout";

import { useRouter } from "next/router";
import { projects } from "../data/projects";

export default function Project() {
  const router = useRouter();
  const [data, setData] = useState(0);

  useEffect(() => {
    setData(projects()[router?.query?.id]);
  }, [router.query]);

  return (
    <Layout style={"light"}>
      <Portfolio data={data} />
    </Layout>
  );
}
