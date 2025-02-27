import {Component} from 'react'

import './App.css'
import UserProfile from './components/UserProfile'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Frontend Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Backend Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Data Analyst',
  },
]

class App extends Component{
  state = {
    searchInput : "",
    userDetailsList : initialUserDetailsList
  }

  onChangeSearchInput = (event) => {
    this.setState({searchInput:event.target.value})
  }

  onDeleteUser = (uniqueNo) => {
    const {userDetailsList} = this.state 
    const filteredUsersDetails = userDetailsList.filter(eachUser => 
      eachUser.uniqueNo !== uniqueNo
    )
    this.setState({userDetailsList:filteredUsersDetails})
  }

  render(){
    const {searchInput, userDetailsList} = this.state
    const userSearchResults = userDetailsList.filter(eachUser => 
      eachUser.name.includes(searchInput)
    )

    return(
      <div className='app-container'>
        <h1 className='title'>Users List</h1>
        <input type='search' onChange={this.onChangeSearchInput}/>
        <ul className='list-container'>
          {
            userSearchResults.map(eachUser => (
              <UserProfile userDetails={eachUser} onDeleteUser={this.onDeleteUser} key={eachUser.uniqueNo}/>
            ))
          }
        </ul>
      </div>
    )
  }
}
export default App