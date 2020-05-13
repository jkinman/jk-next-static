import { ThemeProvider, createTheme, Arwes } from 'arwes'


const myTheme = {
  color: {
    primary: {
      // base: '#be26fc',
      base: 'white',
      dark: '#8e1bbd',
      light: '#c95bf6'
    },
    header: {
      base: '#c2ffa9',
      dark: '#a818a7',
      light: '#f458f2'
    }
  }
}

function MyApp({ Component, pageProps }) {
  return (
	<div>
		<ThemeProvider theme={createTheme(myTheme)}>
      <Arwes>
			<Component {...pageProps} />
			<style jsx global>{`
			      @font-face {
			        font-family: 'Titillium Web';
			        src: url(''https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap'); 
			        font-weight: bold;
			        font-style: normal;
			        font-display: swap;
			      }
				`}</style>
    </Arwes>
	</ThemeProvider>
	</div>
	)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp