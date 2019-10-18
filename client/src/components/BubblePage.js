import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  console.log('CL',colorList)

  useEffect(() => {
    axiosWithAuth()
    .get('/api/colors')
    .then(response => {
      console.log('GET RES:', response.data)
      setColorList(response.data)
    })
    .catch(error => console.log('GET ERROR: ', error))
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
