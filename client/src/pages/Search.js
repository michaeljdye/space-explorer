import React, { useState } from 'react';
import Layout from '../components/Layout';

const Search = () => {
  const currentYear = new Date().getFullYear();
  const [query, setQuery] = useState('');
  const [start, setStart] = useState(currentYear);
  const [results, setResults] = useState({});

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSelectChange = e => {
    setStart(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(`/api/search/${query}/${start}`);
    const data = await res.json();
    setResults(data);
    console.log(data);
  };

  const { collection } = results;

  return (
    <Layout>
      <form className="pv4 black-80" onSubmit={handleSubmit}>
        <div className="measure">
          <label className="f6 b db mb2" htmlFor="search">
            Explore Space
          </label>
          <input
            class="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="search"
            name="search"
            id="search"
            value={query}
            onChange={handleInputChange}
          />
          <small id="name-desc" className="f6 black-60 db mb2">
            Search the NASA database.
          </small>
          <select
            class="mv2 bg-white"
            name="years"
            onChange={handleSelectChange}
          >
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </select>
          <div class="">
            <input
              class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </form>
      <section className="mw8">
        {collection &&
          collection.items.map(({ data, links }) => (
            <article
              className="pv4 bt bb b--black-10 ph3 ph0-l"
              key={data[0].nasa_id}
            >
              <div className="flex flex-column flex-row-ns">
                <div className="w-100 w-60s pr3-ns order-2 order-1-ns">
                  <h1 className="f3 athelas mt0 lh-title">{data[0].title}</h1>
                  <p className="f5 f4-l lh-copy athelas">
                    {data[0].description}
                  </p>
                </div>
                <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                  {links && (
                    <img src={links[0].href} alt={data[0].title} width="350" />
                  )}
                </div>
              </div>
              <p className="f6 lh-copy gray mv0">
                By <span className="ttu">Robin Darnell</span>
              </p>
              <time className="f6 db gray">Nov. 21, 2016</time>
            </article>
          ))}
      </section>
    </Layout>
  );
};

export default Search;
