import { PropTypes } from 'prop-types';

export default function ToolbarItem(props) {
  const onItemSelect = () => {
    props.onChange(props.value);
  }

  return (
    <label className="toolbar-item">
      <input
        type="radio"
        value={props.value}
        name="toolbalfilter"
        checked={props.isSelected}
        onChange={onItemSelect}
      />
      <span className="toolbar-item__title">{props.value}</span>
    </label>
  )
}

ToolbarItem.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

ToolbarItem.defaultProps = {
  isSelected: false,
};
