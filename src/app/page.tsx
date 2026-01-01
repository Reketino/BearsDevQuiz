import React from 'react'

export default function Home() {
  return (
    <main className='max-w-xl mx-auto p-6 space-y-6'>
     <h1 className='text-3xl font-bold'>
       Velkommen Bear's Dev Quiz🐻‍❄️
     </h1>
    <p className='text-sm'>
    Velg hva du vil øve på: Quiz eller les forklaringer på
    funksjoner eller syntax.
    </p>


    <nav className='flex flex-col gap-3'>
    <a href="/quiz/python" className='btn'>🐍Python Quiz</a>
    <a href="/quiz/javascript" className='btn'>🟨 Javascript</a>
    <a href="/quiz/typescript" className='btn'>🔵 TypeScript quiz</a>
    <a href="/concepts" className='btn'>📘 Forklaringer</a>
    </nav>
    </main>
  )
}

