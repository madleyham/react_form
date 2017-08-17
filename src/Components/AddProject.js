import React, { Component } from 'react';
import uuid from 'uuid';
import TextField from 'react-md/lib/TextFields';
import SelectField from 'react-md/lib/SelectFields';
import Button from 'react-md/lib/Buttons/Button';

const categories = ['Web Design', 'Web Development', 'Mobile Development'];

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{},
      title:'',
      category: '',
      firstname: '',
      lastname: ''
    }
  }

  handleSubmit(e){
    if(this.state.title === ''){
      alert('Title is required');
    } else if(this.state.firstname === '' || this.state.lastname === ''){
      alert('Name is required');
    } else if(this.state.category === ''){
      alert('Category is required');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.state.title,
        category: this.state.category,
        firstname: this.state.firstname,
        lastname: this.state.lastname
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  handleChangeTitle = (value, index, event) => {
    this.setState({ title: value });
  };
  handleChangeCategory = (value, index, event) => {
    this.setState({ category: value });
  };
  handleChangeFirstname = (value, index, event) => {
    this.setState({ firstname: value });
  };
  handleChangeLastname = (value, index, event) => {
    this.setState({ lastname: value });
  };

  render() {
    return (
      <div>
        <h3 className="md-display-1">Add Project</h3> <hr />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <TextField type="text" label="Title" ref="title"
            onChange={this.handleChangeTitle}
            required
            errorText="Required" />
          </div>
          <div>
            <TextField type="text" label="FirstName" ref="fname"
            onChange={this.handleChangeFirstname}
            required
            errorText="Required" />
          </div>
          <div>
            <TextField type="text" label="LastName" ref="lname"
            onChange={this.handleChangeLastname}
            required
            errorText="Required" />
          </div>
          <div>
            <br />
            <SelectField
            ref="category"
            placeholder="Category"
            menuItems={categories}
            itemLabel="abbreviation"
            itemValue="abbreviation"
            onChange={this.handleChangeCategory}
            position={SelectField.Positions.BELOW}

            />
          </div>
          <br />
          <Button raised primary label="Submit" type="Submit"/>
          <br />
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddProject;
