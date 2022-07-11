import React, { useEffect } from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function Layout({ children }) {
  return (
    <main>
      <header>
        <ul>
          <li><Link href="/helloworld">Hello World page</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </header>
      
      <article style={{backgroundColor: 'grey', padding: 20}}>{children}</article>
    </main>
  )
}