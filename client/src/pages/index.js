import React from 'react';
import Layout from '../components/Layout';

const Index = ({ planet }) => {
  return (
    <Layout>
      <article data-name="article-full-bleed-background">
        <div>
          <div class="aspect-ratio aspect-ratio--4x3 w-50 dib mb4">
            <div
              class="aspect-ratio--object cover h-75"
              style={{ background: `url(${planet.url}) center` }}
            />
          </div>
          <div className="fl pa3 pa-ns bg-white black-70 w-50 f3 times">
            <header className="bb b--black-70">
              <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">
                {planet.title}
              </h3>
              <h4 className="f3 fw4 i lh-title mt0">
                Image Credits:{' '}
                {planet.copyright ? planet.copyright : 'Public Domain'}
              </h4>
            </header>
            <section className="pt5 pb4">
              <p className="times lh-copy measure f4 mt0">
                {planet.explanation}
              </p>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
