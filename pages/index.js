import { 
  ThemeProvider, 
  createTheme, 
  Arwes, 
  Header, 
  Heading,
  Frame, Content } from 'arwes'
import {Layout} from '../layouts/main'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import data from '../data/page'

const Index = ( props ) => {
    return(
      <Arwes>

      <Layout>
          <Content>
        {data.map( page => (
            <Heading node='h1'>{page.title}</Heading>
          ))}

          {Array.isArray(props.shows) && props.shows.map(show => (
            <li key={show.id}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
        </Content>
        <Frame animate level={1} corners={3}>
          <p>frame example</p>
        </Frame>
      </Layout>
      </Arwes>
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