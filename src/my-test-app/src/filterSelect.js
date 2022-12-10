import PropTypes from "prop-types";

export default function FilterSelect(props) {
    function handleChange(e) {
      props.setSelectedFilter(e.target.value)
    }

    return(
        <label className="select" htmlFor="filterReminders">show tasks due:
          <select id="filterReminders" value={props.selectedFilter} onChange={handleChange}>
          <option value="2days">within 2 days</option>
            <option value="1weeek">within 1 week</option>
            <option value="30days">within 30 days</option>
            <option value="6months">within 6 months</option>
            <option value="all">all time</option>
          </select>
        </label>
    );
}
FilterSelect.propTypes = {
  selectedFilter: PropTypes.string,
  setSelectedFilter: PropTypes.func
}
FilterSelect.defaultProps = {
  selectedFilter: 'all'
}