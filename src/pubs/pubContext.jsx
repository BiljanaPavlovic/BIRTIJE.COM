import React, { useState, createContext } from "react";

export const PubContext = createContext();

export const PubProvider = (props) => {
  const [pub, pubList] = useState([
    {
      id: "pub1",
      name: "Mornar",
      adress: "Dečanska 2 Beograd",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "pub2",
      name: "Sunce",
      adress: "Dečanska 1 Beograd",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "pub3",
      name: "Zora",
      adress: "Makedonska 7 Beograd",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "pub4",
      name: "Kod Ane",
      adress: "Sarajevska 26 Beograd",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
  ]);
  return (
    <PubContext.Provider value={[pub, pubList]}>
      {props.children}
    </PubContext.Provider>
  );
};
