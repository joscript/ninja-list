import React from "react";
import axios from "axios";

function Details({ ninja }) {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
}

export default Details;

export const getStaticPaths = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    paths: data.map((d) => ({ params: { id: d.id.toString() } })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users/" + id
  );

  return {
    props: { ninja: data },
  };
};
