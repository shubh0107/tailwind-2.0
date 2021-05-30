import React from 'react'
import PageTitle from '../components/PageTitle'

export default function Portfolio() {
  return (
    <div className="h-screen bg-black">
      <div className="h-screen w-screen flex pages-container">
        <section className="h-full w-full flex flex-shrink-0">
          <PageTitle>Page One</PageTitle>
        </section>
        <section className="h-full w-screen flex flex-shrink-0">
          <PageTitle>Page Two</PageTitle>
        </section>
        <section className="h-full w-screen flex flex-shrink-0">
          <PageTitle>Page Three</PageTitle>
        </section>
      </div>
    </div>
  )
}
