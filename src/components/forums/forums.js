import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../navbar/Navbar";

const Forums = () => {
// const q = query(collection(db, "post_comments"), where("post_id", "==", 0));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());

  return (
    <div className="forums">
        <Navbar />
        <h1>Welcome to Our Forums</h1>
        {/* <div>{doc.data}</div>  */}
    </div>
);
// });


};
export default Forums;