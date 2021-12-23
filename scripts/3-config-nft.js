import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xDa92d76F84505e7953B7269439f7da5Ad91493db",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Ancient India",
        description: "This NFT will give you access to IndiaDAO!",
        image: readFileSync("scripts/assets/history.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()