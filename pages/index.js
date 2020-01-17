import {Layout} from '../layouts/main'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import data from '../data/page'

const Index = ( props ) => {
    return(
    <Layout>
        <p>pages/index.js</p>
        {data.map( page => (
            <h1>{page.title}</h1>
        ))}
        {Array.isArray(props.shows) && props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </Layout>
    )
}

Index.syncContentfulData 

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      shows: data.map(entry => entry.show)
    }
  }

export default Index