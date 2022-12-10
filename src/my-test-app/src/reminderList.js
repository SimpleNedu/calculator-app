import Reminder from "./reminder";
import PropTypes from "prop-types";

export default function ReminderList(props) {
   const reminders = props.reminders.map((reminder,index)=>{ return(
    <Reminder 
    reminderText={reminder.reminderText} 
        dueDate={reminder.dueDate} 
        isComplete={reminder.isComplete}
        setIsComplete={props.setIsComplete}
        id={index}
        key={index} 
         />);
});
return(
    <div className="remind">{reminders}</div>
);
}
ReminderList.propTypes ={
    reminders: PropTypes.array 
}

const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

ReminderList.defaultProps = {
    reminders: [{
        reminderText: "No reminders yet",
        dueDate: formattedDate,
        isComplete: false
    }]
}