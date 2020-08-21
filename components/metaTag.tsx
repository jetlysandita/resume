import Head from 'next/head'
interface MetaTag {
  title: string
}
export default function MetaTag({ title }: MetaTag) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Example landing page' />
        <link rel="icon" href="/js.svg"></link>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"></link>
      </Head>
    </>
  )
}