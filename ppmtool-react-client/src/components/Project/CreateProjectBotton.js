import React, { Fragment } from 'react';
import { Link } from "react-router-dom"

const CreateProjectBotton = () => {
    return (
        <Fragment>
            <Link to="/addProject" className="btn btn-lg btn-info">
                Create a Project
            </Link>
        </Fragment>
    )
}

export default CreateProjectBotton