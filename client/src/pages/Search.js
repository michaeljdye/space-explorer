import React, { useState } from 'react';
import Layout from '../components/Layout';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({});

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(`/api/search/${query}`);
    const data = await res.json();
    setResults(data);
    console.log(data);
  };

  const { collection } = results;

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Explore Space</label>
        <input
          type="search"
          name="search"
          id="search"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <main>
        {collection &&
          collection.items.map(({ data, links }) => (
            <article key={data[0].nasa_id}>
              <h1>{data[0].title}</h1>
              <img src={links[0].href} alt={data[0].title} width="350" />
              <p>{data[0].description}</p>
            </article>
          ))}
      </main>
    </Layout>
  );
};

export default Search;
