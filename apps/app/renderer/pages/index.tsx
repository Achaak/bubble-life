import { GlobalConfig } from '@bubble/configs/global'
import { Modules } from '@bubble/modules/Module'
import { styled } from '@bubble/styles'
import { Bubble } from '@src/components/Bubble'
import { Stats } from '@src/components/Stats'
import { DefaultLayout } from '@src/components/layouts/default'
import React from 'react'
// @ts-expect-error No types available for 'react-fps-stats'
import FPSStats from 'react-fps-stats'

import type { NextPageWithLayout } from './_app'

const Overlay = styled('div', {
  position: 'fixed',
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
        <Bubble />
        <Stats />
      </Overlay>
    </>
  )
}

Home.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
