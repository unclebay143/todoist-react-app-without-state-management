import React from "react";
import { Dna } from "react-loader-spinner";

export const DNASpinner = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Dna
        visible={true}
        height='80'
        width='80'
        ariaLabel='dna-loading'
        wrapperStyle={{}}
        wrapperClass='dna-wrapper'
      />
    </div>
  );
};
