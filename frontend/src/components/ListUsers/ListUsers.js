import React, {Fragment, useEffect} from "react";
import {connect} from "react-redux";
import UserCard from "../UserCard/UserCard";
import {fetchUsers} from "../../store/action/usersAction";

const ListUsers = (props) => {
    useEffect(() => {
        props.dispatch(fetchUsers())
    }, []);
    return (
        <Fragment>
            {
                props.users.length > 0 &&
                props.users.map((user, index) => {
                    return <UserCard key={index} user={user}/>
                })
            }
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        users: state.userReducer.users
    };
};

export default connect(mapStateToProps)(ListUsers);