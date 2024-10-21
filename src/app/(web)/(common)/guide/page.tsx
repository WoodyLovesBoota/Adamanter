import React from "react";
import GuideView from "@/views/Guide/Guide.view";
interface MetaDataProps {
  params: {};
}
export async function generateMetadata({ params }: MetaDataProps) {
  return {
    title: "BRAND GUIDELINES",
    description: "BRAND GUIDELINES",
  };
}

const GuidePage = () => {
  return <GuideView />;
};

export default GuidePage;
