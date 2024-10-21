import React from "react";
import AboutView from "@/views/About/About.view";
interface MetaDataProps {
  params: {};
}
export async function generateMetadata({ params }: MetaDataProps) {
  return {
    title: "ABOUT ADAMANTER",
    description: "ABOUT ADAMANTER",
  };
}

const AboutPage = () => {
  return <AboutView />;
};

export default AboutPage;
