import Head from 'next/head'
import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
  color?: string
}

function Title(props: IProps): JSX.Element {
  const { children, color } = props

  return (
    <>
      <Head>
        <title>Intrasense - Show posts from jsonplaceholder</title>
      </Head>
      <h1 style={{ color: color ?? 'black' }}>{children}</h1>
    </>
  )
}

export default Title
