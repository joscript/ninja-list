import React from "react";
import axios from "axios";

import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export default function ninjas({ ninjas }) {
  // console.log("NINJAS:", ninjas);
  return (
    <div>
      <h1>Ninja Listahan</h1>
      {ninjas.map((ninja) => (
        <Link href={`ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

const delay = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, 3000);
  });
};

export const getStaticProps = async () => {
  // await delay();

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    props: {
      ninjas: data,
    },
  };
};
