import { PropTypes } from 'prop-types';
import ToolbarItem from '../ToolbarItem/ToolbarItem.jsx';

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;

  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <ToolbarItem
          key={`tbi_${filter}`}
          value={filter}
          isSelected={filter === selected}
          onChange={onSelectFilter}
        />
      ))}
    </div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func.isRequired,
};

Toolbar.defaultProps = {
  selected: '',
};
