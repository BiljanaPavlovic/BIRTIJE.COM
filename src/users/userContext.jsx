import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, userList] = useState([
    {
      id: "user1",
      name: "Jovke",
      slika1: "/img/smajli1.jpg",
      slika2: "/img/smajli.jpg",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "user2",
      name: "Mirko",
      slika1: "/img/smajli1.jpg",
      slika2: "/img/smajli.jpg",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "user3",
      name: "Dzoni",
      slika1: "/img/smajli1.jpg",
      slika2: "/img/smajli.jpg",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "user4",
      name: "Glomi",
      slika1: "/img/smajli1.jpg",
      slika2: "/img/smajli.jpg",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "user5",
      name: "Boki",
      slika1: "/img/smajli1.jpg",
      slika2: "/img/smajli.jpg",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "user6",
      name: "Djeka",
      slika1: "/img/smajli1.jpg",
      slika2: "/img/smajli.jpg",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "user7",
      name: "Mina",
      slika1: "/img/smajli1.jpg",
      slika2: "/img/smajli.jpg",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "user8",
      name: "Sava",
      slika1: "/img/smajli1.jpg",
      slika2: "/img/smajli.jpg",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "user9",
      name: "JovanaP",
      slika1: "/img/smajli1.jpg",
      slika2: "/img/smajli.jpg",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "user10",
      name: "Bilja",
      slika1: "/img/smajli1.jpg",
      slika2: "/img/smajli.jpg",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "user11",
      name: "Marina",
      slika1: "/img/smajli1.jpg",
      slika2: "/img/smajli.jpg",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
    {
      id: "user12",
      name: "Aleksandra",
      slika1: "/img/smajli1.jpg",
      slika2: "/img/smajli.jpg",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto esse veniam ",
    },
  ]);
  return (
    <UserContext.Provider value={[user, userList]}>
      {props.children}
    </UserContext.Provider>
  );
};
