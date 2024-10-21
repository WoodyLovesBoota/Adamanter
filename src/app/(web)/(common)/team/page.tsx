import React from "react";
import TeamView from "@/views/Team/Team.view";

interface MetaDataProps {
  params: {};
}
export async function generateMetadata({ params }: MetaDataProps) {
  return {
    title: "TEAM",
    description: "TEAM",
  };
}

const page = async () => {
  return <TeamView />;
};

export default page;
