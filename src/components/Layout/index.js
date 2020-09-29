import React, { useState, useEffect } from "react";

import Layout from "./Layout";

export default function LayoutIndex({ words }) {
  const [batch, setBatch] = useState(0);
  const [currentWords, setCurrentWords] = useState([]);

  useEffect(() => {
    const newWords = words.slice(batch, batch + 20);
    setCurrentWords(newWords);
  }, [batch]);

  return (
    <div>
      <Layout words={currentWords} batch={batch} setBatch={setBatch} />
    </div>
  );
}
