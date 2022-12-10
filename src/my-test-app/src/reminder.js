import PropTypes from 'prop-types';

export default function Reminder(props) {
    function handleChange() {
        props.setIsComplete(!props.isComplete,props.id);
    }

    return(
        <div className='item'>
            <span className='reminder'>item: {props.reminderText}</span>
            <span className='dueDate'>due date: {props.dueDate}</span>
            <span className='is-complete'>
                <label htmlFor='checkbox'>
                Completed: <input type="checkbox"
                id='checkbox'
                checked={props.isComplete}
                onChange={handleChange} /></label>
                </span>
        </div>
    )
}
Reminder.propTypes = {
    reminderText: PropTypes.string,
    dueDate: PropTypes.string,
    isComplete: PropTypes.bool
}

const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

Reminder.defaultProps = {
    reminderText: 'no reminder set',
    dueDate: formattedDate,
    isComplete: false
}