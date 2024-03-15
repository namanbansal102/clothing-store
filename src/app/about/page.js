import React from 'react'
import Replicate from "replicate";

const replicate = new Replicate({
  auth: "r8_HlMzJ3Nb4iSxw7VC1wpcsQ4ESn33ylW1vf1CR",
});

const page =async  () => {
  const output = await replicate.run(
    "naklecha/fashion-ai:f203e9b8755a51b23f8ebdd80bb4f8b7177685b8d3fcca949abfbf8606b6d42a",
    {
      input: {
        image: "https://replicate.delivery/pbxt/It7PuJYvxClTLyL3PX8RNMcDsAVdvcYlGZKOPxyeibPgqi3m/Musician-Kanye-West-performs-onstage-at-the-2015-iHeartRadio-Music-Festival-at-MGM-Grand-Garden-Arena.jpg",
        prompt: "a person wearing a shirt with flower patterns on it",
        clothing: "topwear"
      }
    }
  );
  console.log(output);
  console.log("page is Running");
  return (
    <div>page</div>
  )
}

export default page