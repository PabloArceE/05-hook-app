import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

  const user = {
    id: 123,
    name: 'Pablo',
    data: 'Data content example'
  }

  return (
    <div>
        <UserContext.Provider value={user}>
          <AppRouter />        
        </UserContext.Provider>       

    </div>
  )
}


