import './index.css'

const UserProfile = props => {
    const {userDetails, onDeleteUser} = props
    const {imageUrl, name, role, uniqueNo} = userDetails

    const onDelete = () => {
        onDeleteUser(uniqueNo)
    }

    return(
        <li className="container">
            <img src={imageUrl} alt="avatar" className="profile"/>
            <div className="user-details">
                <h1 className="name">{name}</h1>
                <p className='role'>{role}</p>
            </div>
            <button type='button' className='delete-btn' onClick={onDelete}>
                <img src="https://assets.ccbp.in/frontend/react-js/cross-img.png" className='delete-img' alt="cross" />
            </button>
        </li>
    )
}

export default UserProfile