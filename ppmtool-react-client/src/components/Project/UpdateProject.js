import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { getProject } from '../../actions/projectAction'

class UpdateProject extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getProject(id, this.props.history);
    }

    render() {
        return (
            <div class="project">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 m-auto">
                            <h5 class="display-4 text-center">Update Project form</h5>
                            <hr />
                            <form>
                                <div class="form-group">
                                    <input 
                                        type="text" 
                                        class="form-control form-control-lg " 
                                        placeholder="Project Name" 
                                        name="projectName"
                                        value={this.props.project.projectName}
                                        />
                                </div>
                                <div class="form-group">
                                    <input 
                                        type="text" 
                                        class="form-control form-control-lg" 
                                        placeholder="Unique Project ID"
                                        name="projectIdentifier"
                                        disabled />
                                </div>
                                <div class="form-group">
                                    <textarea 
                                        class="form-control form-control-lg" 
                                        placeholder="Project Description"
                                        name="description"
                                    />  
                                </div>
                                <h6>Start Date</h6>
                                <div class="form-group">
                                    <input 
                                        type="date" 
                                        class="form-control form-control-lg" 
                                        name="start_date" />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div class="form-group">
                                    <input 
                                        type="date" 
                                        class="form-control form-control-lg" 
                                        name="end_date" />
                                </div>
        
                                <input 
                                    type="submit" 
                                    class="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

UpdateProject.propTypes = {
    getProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    project: state.projects.project
})

export default connect(
    mapStateToProps,
    { getProject }
)(UpdateProject)