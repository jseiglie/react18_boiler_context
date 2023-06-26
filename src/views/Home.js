import React, { useContext } from 'react'
import { Context } from '../state/context'

export const Home = () => {
    const {store, actions} = useContext(Context)
  return (
    <div>Home

    {store.test}

    </div>
  )
}
