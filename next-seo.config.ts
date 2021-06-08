import { NextSeoProps } from 'next-seo'

const seo: NextSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    site_name: 'Hello World',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  title: '',
  description: '',
}

export default seo
