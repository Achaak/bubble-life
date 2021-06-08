import { globalTranslateFiles } from '@/config/translate'
import { GetStaticProps } from 'next'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'next-i18next'

const Home: React.FC = () => {
  const { t } = useTranslation(['common'])

  return (
    <>
      <NextSeo
        description={t('common:seo.description')}
        defaultTitle={t('home:seo.defaultTitle')}
        title={t('home:seo.defaultTitle')}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [...globalTranslateFiles])),
  },
})

export default Home
