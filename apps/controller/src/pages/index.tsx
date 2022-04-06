import { LayoutDefault } from '@/components/layouts/default'
import { IndexContainer } from '@/components/pages/index'
import React from 'react'

import type { NextPageWithLayout } from './_app'

const Index: NextPageWithLayout = () => {
  return <IndexContainer />
}

Index.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <LayoutDefault>{page}</LayoutDefault>
}

export default Index
