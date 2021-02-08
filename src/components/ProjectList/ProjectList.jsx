import { PropTypes } from 'prop-types';

export default function ProjectList(props) {
  return (
    <div className="portfolio-projects">
      {props.projects.map((project, index) => (
        <img key={`pr_${index}`} src={project.img} />
      ))}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    category: PropTypes.string,
  }))
}
