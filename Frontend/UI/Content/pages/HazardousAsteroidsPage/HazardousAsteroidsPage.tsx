import React from 'react'
import { AsteroidsTableView } from './AsteroidsTableView'
import { PageFilters } from './PageFilters'
import { PageHeader } from './PageHeader'


const HazardousAsteroidsPage = () => (
  <article>
    <PageHeader />
    <aside className='w-full bg-base-300 xl:bg-transparent py-0 px-0 min-w-full xl:min-w-0 xl:max-w-5xl 2xl:max-w-6xl mx-0 xl:mx-auto items-center bordered border-b-[1px] input-bordered xl:border-b-0'>
      <PageFilters />
    </aside>
    <div role='presentation' className='hidden lg:flex h-6' />
    <section className='w-full py-0 px-0 lg:px-8 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto items-center'>
      <AsteroidsTableView />
    </section>
  </article>
)

export default HazardousAsteroidsPage
