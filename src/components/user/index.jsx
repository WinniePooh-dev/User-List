import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Api from '../../api';

const User = (props) => {

    useEffect(() => {
        const { match } = props;
        Api.loadUserInfo(match.params.id)
    }, [])
    
    return <div>User</div>
}

export default withRouter(User);