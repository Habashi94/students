import React from "react";

export default function Studentinfo({ info }) {
    console.log(info)
  return (
    <div>
      <ol>
        {info.name} : {info.number}
      </ol>
    </div>
  );
}
