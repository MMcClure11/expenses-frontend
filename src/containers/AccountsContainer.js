import React from 'react'
import {connect} from 'react-redux'
import {fetchAccounts} from '../actions/fetchAccounts'


class AccountsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts()
  }

  render() {
      return (
          <div>
            Accounts Container
          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)
