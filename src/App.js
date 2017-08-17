import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  getProjects(){
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Design',
        firstname: 'Obi-Wan',
        lastname: 'Kenobi'
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development',
        firstname: 'Luke',
        lastname: 'Skywalker'
      },
      {
        id:uuid.v4(),
        title: 'Ecomerce Shopping Cart',
        category: 'Web Development',
        firstname: 'Darth',
        lastname: 'Vader'
      }
    ]});
  }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){

  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <div className="md-grid">
          <div className="md-cell md-cell--1 md-cell--0-tablet md-cell--0-phone" />
          <div className="md-cell md-cell--4 md-cell--3-tablet md-cell--5-phone">
            <AddProject addProject={this.handleAddProject.bind(this)} />
          </div>
          <div className="md-cell md-cell--2 md-cell--2-tablet md-cell--0-phone" />
          <div className="md-cell md-cell--4 md-cell--3-tablet md-cell--5-phone">
            <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
          </div>
          <div className="md-cell md-cell--1 md-cell--0-tablet md-cell--0-phone" />
        </div>
      </div>
    );
  }
}

export default App;
