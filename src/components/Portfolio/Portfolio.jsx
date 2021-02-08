import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar/Toolbar.jsx';
import ProjectList from '../ProjectList/ProjectList.jsx';

export default class Portfolio extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string,
    }))
  }

  constructor(...props) {
    super(...props);

    const availCategories = this.getAvailableCategories(this.props.projects);

    this.state = {
      selectedFilter: 'All',
      filters: ['All'].concat(availCategories),
    };
  }

  /* Obtains categories from list of projects, sort in descending order and returns result */
  getAvailableCategories(projects) {
    const result = projects.reduce((categories, project) => {
      if (!categories.includes(project.category)) {
        return categories.concat(project.category);
      }

      return categories;
    }, []);

    const collator = new Intl.Collator();
    return result.sort((a, b) => collator.compare(b, a));
  }

  filterProjects(projects) {
    if (this.state.selectedFilter === 'All') {
      return projects;
    }

    return projects.filter((project) =>
      project.category === this.state.selectedFilter
    );
  }

  onFilter = (filter) => {
    this.setState((prev) => {
      return { ...prev, selectedFilter: filter };
    });
  }

  render() {
    const currentProjects = this.filterProjects(this.props.projects);

    return (
      <div className="portfolio">
        <Toolbar
          filters={this.state.filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.onFilter} />
        <ProjectList projects={currentProjects} />
      </div>
    )
  }
}
