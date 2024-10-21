import ShopView from "@/views/Shop/Shop.view";
import React from "react";

interface MetaDataProps {
  params: {};
}
export async function generateMetadata({ params }: MetaDataProps) {
  return {
    title: "SHOP",
    description: "SHOP",
  };
}

const page = async () => {
  return <ShopView />;
};

export default page;
