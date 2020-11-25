import React from 'react'

const Account = (props) => {

  let account = props.accounts[props.match.params.id - 1]

  return (
    <div>
      <h2>
        {account ? account.name : null} - {account ? account.balance : null}
      </h2>
    </div>
  )
}

export default Account