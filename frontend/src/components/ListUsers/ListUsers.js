import React, {useEffect} from "react";
import {connect} from "react-redux";
import UserCard from "../UserCard/UserCard";
import {fetchUsers} from "../../store/action/usersAction";
import './ListUsers.css';

const ListUsers = (props) => {
    useEffect(() => {
        props.dispatch(fetchUsers())
    }, []);
    return (
        <div className="ListUsers-Container">
            {
                props.users.length > 0 &&
                props.users.map((user, index) => {
                    return <UserCard key={index} user={user}/>
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.userReducer.users
    };
};

export default connect(mapStateToProps)(ListUsers);