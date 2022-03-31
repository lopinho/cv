import React from 'react';
import Head from 'next/head';
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=optional" rel="stylesheet"></link>
      </Head>
      <div>
        {props.children}
      </div>
</div>
  )
}
export default Layout;