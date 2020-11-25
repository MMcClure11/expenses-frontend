import React from 'react'

const Account = (props) => {

  let account = props.accounts[props.match.params.id - 1]
  
  return (
    <div>
      <li>
        {account ? account.name : null} - {account ? account.balance : null}
      </li>
    </div>
  )
}

export default Account