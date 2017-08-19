import Head from 'next/head';

const Header = () => (
  <Head>
    <title>One Heart Source</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400" rel="stylesheet" />

    <style>{`
      body { 
        margin: 0px;
        font-family: 'Lato', sans-serif;
      }
    `}</style>
  </Head>
);

export default Header;
