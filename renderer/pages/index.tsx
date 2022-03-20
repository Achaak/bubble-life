import { NextPageWithLayout } from './_app'
import { GlobalConfig } from '@configs/global'
import { Bubble } from '@src/components/Bubble'
import { Modules } from '@src/components/Modules'
import { Stats } from '@src/components/Stats'
import { DefaultLayout } from '@src/components/layouts/default'
import { styled } from '@src/styles'
import React from 'react'
import FPSStats from 'react-fps-stats'

const Overlay = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
})

const Home: NextPageWithLayout = () => {
  return (
    <>
      {GlobalConfig.development.showFPS ? <FPSStats /> : null}

      <Overlay>
        <Modules />
        <Stats />
      </Overlay>
      <Bubble />
    </>
  )
}

Home.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
