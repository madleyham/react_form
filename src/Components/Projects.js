import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import Divider from 'react-md/lib/Dividers';
import Subheader from 'react-md/lib/Subheaders';

const InfoIcon = () => <FontIcon>info</FontIcon>;
const StarIcon = () => <FontIcon>star</FontIcon>;

class Projects extends Component {
  deleteProject(id){
  	this.props.onDelete(id);
  }

  render() {
  	let projectItems;
  	if(this.props.projects){
  		projectItems = this.props.projects.map(project => {
  			return(
  				<ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
  			);
  		});
  	}
    return (
      <div className="Projects">
        <h3 className="md-display-1">Latest Projects</h3><hr />
        <List className="md-paper md-paper--1">
          <Subheader primaryText="List of projects" primary />
          {projectItems}
        </List>
      </div>
    );
  }
}

Projects.propTypes = {
	projects: React.PropTypes.array,
	onDelete: React.PropTypes.func
}

export default Projects;
