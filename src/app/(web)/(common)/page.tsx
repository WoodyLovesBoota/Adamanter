import HomeView from "@/views/Home/Home.view";
import React from "react";

interface MetaDataProps {
  params: {};
}

export async function generateMetadata({ params }: MetaDataProps) {
  return {
    title: "ADAMANTER",
    description: "ADAMANTER",
  };
}

const HomePage = async () => {
  return <HomeView />;
};

export default HomePage;
