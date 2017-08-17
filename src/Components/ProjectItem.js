import React, { Component } from 'react';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import Divider from 'react-md/lib/Dividers';
import Subheader from 'react-md/lib/Subheaders';

const InfoIcon = () => <FontIcon>info</FontIcon>;
const StarIcon = () => <FontIcon>clear</FontIcon>;

class ProjectItem extends Component {
  deleteProject(id){
  	this.props.onDelete(id);
  }


  render() {
  	return (
      <ListItem
        rightIcon={<StarIcon />}
        primaryText={this.props.project.title}
        secondaryText={this.props.project.category +'\nBy '+ this.props.project.firstname +' '+ this.props.project.lastname}
        leftAvatar={<Avatar suffix="blue">{this.props.project.category.charAt(0).toUpperCase()}</Avatar>}
        onClick={this.deleteProject.bind(this, this.props.project.id)}
        threeLines
      />
    );
  }
}

ProjectItem.propTypes = {
	project: React.PropTypes.object,
	onDelete: React.PropTypes.func
}

export default ProjectItem;
