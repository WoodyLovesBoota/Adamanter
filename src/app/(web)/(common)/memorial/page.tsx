import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseClient";
import FarewellView from "@/views/Farewell/Farewell.view";

interface MetaDataProps {
  params: {};
}
export async function generateMetadata({ params }: MetaDataProps) {
  return {
    title: "MEMORIAL",
    description: "MEMORIAL",
  };
}

const page = async () => {
  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "reply"));
      const farewellData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      return farewellData;
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
      return [];
    }
  };

  // const data = await getData();

  return <FarewellView />;
};

export default page;
