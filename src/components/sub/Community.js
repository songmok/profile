import React, { useEffect } from "react";
import Layout from "../common/Layout";
// jascript 코드 자리
const Community = (props) => {
  // jascri
  useEffect(() => {
    console.log("mount: 컴포넌트 생성");
    return () => {
      console.log("unmount: 컴포넌트 제거");
    };
  }, []);
  
  // jsx 코드 자리
  // : 주의 사항 return () O
  // : 주의 사항 return {} X
  return <Layout title={"Community"}>Community</Layout>;
};

// jascript 코드 자리
export default Community;
