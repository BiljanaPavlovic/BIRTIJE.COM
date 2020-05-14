import React, { useState, createContext } from "react";

export const PubContext = createContext();

export const PubProvider = (props) => {
  const [pub, pubList] = useState([
    {
      id: "pub1",
      name: "Mornar",
      adress: "Adresa",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "pub2",
      name: "Sunce",
      adress: "Adresa",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "pub3",
      name: "Zora",
      adress: "Adresa",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "pub4",
      name: "Ana",
      adress: "Adresa",
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
