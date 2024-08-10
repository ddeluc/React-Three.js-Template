import React, { useState, useEffect } from "react";

import { styles } from "../styles";

const Card = ({ active }) => {

  if (active == "Contact") {
    return (
      <div className={`absolute inset-0 top-[120px] max-w-full mx-auto border-white border-2 flex flex-row items-start gap-7 py-7 ${styles.paddingX}`}>
        <div className={`flex w-2/3 mr-0 h-full flex-col mx-auto justify-center items-center border-2 border-white `}>
          Card1
        </div>
      </div>
      
    )
  } else if (active == "About") {
    return (
      <div className={`absolute inset-0 top-[120px] max-w-full mx-auto border-white border-2 flex flex-row items-start gap-7 py-7 ${styles.paddingX}`}>
        <div className={`flex w-2/3 ml-0 h-full flex-col mx-auto justify-center items-center border-2 border-white `}>
          Card1
        </div>
      </div>
    )
  }else if (active == "Work") {
    return (
      <div className={`absolute inset-0 top-[120px] max-w-full mx-auto border-white border-2 flex flex-col items-start gap-7 py-7 ${styles.paddingX}`}>
        <div className={`flex h-2/3 w-full  flex-col mx-auto justify-center items-center border-2 border-white `}>
          Card1
        </div>
      </div>
    )
  } else {
    return (
      <>
      </>
    )
  }  
}

export default Card;