import { LayoutDefault } from '@/components/layouts/default'
import { ModuleContainer } from '@/components/pages/module'
import React from 'react'

import type { NextPageWithLayout } from './_app'

const Module: NextPageWithLayout = () => {
  return <ModuleContainer />
}

Module.getLayout = (page: React.ReactElement): React.ReactElement => {
  return <LayoutDefault>{page}</LayoutDefault>
}

export default Module
