import PropTypes from 'prop-types';

export default function InputForm(props) {
const handleTextChange =(e) =>{
    const newUserInput = {...props.userInput, reminderText:e.target.value}
    props.setUserInput(newUserInput);
}
const handleDateChange = (e)=>{
    const date = new Date(e.target.value);
    const formattedDate = date.toISOString().substr(0,10);
    const newUserInput = {...props.userInput, dueDate: formattedDate};
    props.setUserInput(newUserInput)
}
const handleClick =(e) =>{
    e.preventDefault();
    const itemToAdd = {...props.userInput, iscomplete: false}
    props.addNewReminder(itemToAdd);
}


    return(
        <form>
            <input value={props.userInput.reminderText}
                maxLength="30"
                className='text'
                id="reminderText" 
                type='text' 
                placeholder="WHat do you want to do?"
                onChange={handleTextChange} />
            <input value={props.userInput.dueDate}
                id="dueDate" 
                type='date'
                onChange={handleDateChange} />
            <button onClick={handleClick}>Add items</button>
        </form>
    )
} 
InputForm.propTypes={
    userInput: PropTypes.shape({
        reminderText: PropTypes.string,
        dueDate: PropTypes.string
    }),
    setUserInput: PropTypes.func,
    addNewReminder: PropTypes.func
}

const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

InputForm.defaultProps = {
    userInput:{
        reminderText: '',
        dueDate: formattedDate
    }
}