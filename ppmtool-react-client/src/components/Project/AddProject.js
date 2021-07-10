import React, { Component } from 'react'

class AddProject extends Component {
    constructor(){
        super();

        this.state = {
            projectName: "", 
            projectIdentifier: "",
            description: "",
            start_date: "",
            end_date: ""
         };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newProject = {
            projectName: this.state.name,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            start_date: this.state.start_date,
            end_date: this.state.end_date
        };

        console.log(newProject);
    }

    render() {
        return (
            <div>
              <div class="project">
                  <div class="container">
                      <div class="row">
                          <div class="col-md-8 m-auto">
                              <h5 class="display-4 text-center">Create Project form</h5>
                                <hr />
                                <form onSubmit={this.onSubmit}>
                                  <div class="form-group">
                                    <input 
                                        type="text" 
                                        class="form-control form-control-lg " 
                                        placeholder="Project Name" 
                                        name="projectName"
                                        value={this.state.projectName}
                                        onChange={this.onChange}
                                    />
                                  </div>
                                  <div class="form-group">
                                    <input 
                                        type="text" 
                                        class="form-control form-control-lg" 
                                        placeholder="Unique Project ID"
                                        name="projectIdentifier"
                                        value={this.state.projectIdentifier}
                                        onChange={this.onChange}
                                    />
                                  </div>
                                  <div class="form-group">
                                     <textarea 
                                        class="form-control form-control-lg" 
                                        placeholder="Project Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    />
                                  </div>
                                  <h6>Start Date</h6>
                                  <div class="form-group">
                                    <input 
                                        type="date" 
                                        class="form-control form-control-lg" 
                                        name="start_date"
                                        value={this.state.start_date}
                                        onChange={this.onChange}
                                    />
                                  </div>
                                  <h6>Estimated End Date</h6>
                                  <div class="form-group">
                                    <input 
                                        type="date" 
                                        class="form-control form-control-lg" 
                                        name="end_date" 
                                        value={this.state.end_date}
                                        onChange={this.onChange} 
                                    />
                                  </div>
                                    <input 
                                        type="submit" 
                                        class="btn btn-primary btn-block mt-4" 
                                    />
                                </form>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        );
    }
}

export default AddProject