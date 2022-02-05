import { useState } from 'react'

import { Navbar, Footer, Loader, Transactions, Welcome, Services  } from './components'

const App = () => {

  return (
    <>
    <div className="min-h-scr">
    {/* <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> */}
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
        <Services />
        <Transactions />
        <Footer />
    </div>
    </>
  )
}

export default App
