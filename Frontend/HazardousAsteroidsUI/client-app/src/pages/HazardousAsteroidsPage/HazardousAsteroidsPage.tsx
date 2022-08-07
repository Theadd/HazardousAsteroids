import React from 'react'
import { AsteroidsTableView } from './AsteroidsTableView'
import { PageFilters } from './PageFilters'
import { AsteroidsApiResponse, AsteroidsApiRequest } from './types'


type HazardousAsteroidsPageState = AsteroidsApiResponse & AsteroidsApiRequest

export class HazardousAsteroidsPage extends React.Component<{} /*, HazardousAsteroidsPageState*/> {

  render() {

    return (
      <article>
        <header className='prose w-[100vw] min-w-full bg-base-300 xl:bg-transparent pt-8 pb-4 md:pt-16 md:pb-8 px-0 sm:px-4 items-center text-[0.5rem] sm:text-xs md:text-base'>
          <h1 className='text-center text-accent whitespace-nowrap w-[100vw]'>HAZARDOUS ASTEROIDS</h1>
        </header>
        <aside className='w-full bg-base-300 xl:bg-transparent py-0 px-0 min-w-full xl:min-w-0 xl:max-w-5xl 2xl:max-w-6xl mx-0 xl:mx-auto items-center bordered border-b-[1px] input-bordered xl:border-b-0'>
          <PageFilters />
        </aside>
        <div role='presentation' className='hidden lg:flex h-6' />
        <section className='w-full py-0 px-0 lg:px-8 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto items-center'>
          <AsteroidsTableView />
        </section>
      </article>
    )
  }
}

export default HazardousAsteroidsPage
