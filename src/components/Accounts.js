import React from 'react'
import Account from './Account'

const Accounts = props => {

  // let accountFirst = props.accounts.map(account => account.name)
  // console.log(accountFirst)

  return (
    <div>
      <h1>Accounts</h1>
      {props.accounts.map(account => 
      <div key={account.id}><Account accountProp={account} /></div>)}
    </div>
  )
}

export default Accounts