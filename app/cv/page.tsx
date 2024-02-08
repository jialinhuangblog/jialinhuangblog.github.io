import { css } from "@emotion/react";
import { NextPage } from "next";
import Layout from "@/components/Layout";

import JobCardList from "./JobCardList";

const CV: NextPage = () => {
  return (
    <Layout>
      <JobCardList />
    </Layout>
  );
};

export default CV;
