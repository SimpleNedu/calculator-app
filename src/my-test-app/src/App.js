import {useState} from 'react';
import FilterSelect from './filterSelect';
import InputForm from './inputForm';
import ReminderList from './reminderList';
import './App.css'


function App() {
  const [reminders,setReminders] = useState();
  const [userInput, setUserInput] = useState();
  const [selectedFilter,setSelectedFilter] = useState("all");
  const addNewReminder =(itemToAdd)=>{
    if (reminders===undefined) {
      setReminders([itemToAdd])
    } else{
      setReminders([...reminders, itemToAdd])
    }
  }
  const filteredList = filterList(reminders,selectedFilter);

  function filterList(reminders,selectedFilter) {
    if (selectedFilter === "all") {
      return reminders;
    } else {
      let numberOfDays;

      switch (selectedFilter) {
        case "2day":
          numberOfDays = 2;
          break;

        case "1week":
          numberOfDays = 7;
          break;

        case "30days":
          numberOfDays = 30;
          break;

        case "6months":
          numberOfDays = 180;
          break;
      
        default:
          numberOfDays = 0;
          break;
      }

      const result = reminders.filter(reminder=>{
        const todayDate = new Date().toISOString().substr(0,10);
        const todayTime = new Date(todayDate).getTime();
        const dueTime = new Date(reminder.dueDate).getTime();
        return dueTime < (todayTime +(numberOfDays*86400000));
      });
      return result;
    }
  }
  function setIsComplete(isComplete, index) {
    const newReminders = [...reminders.slice(0, index),
                          {...reminders[index],isComplete},
                          ...reminders.slice(index+1)];
      setReminders(newReminders);
  }

  return (
    <div className="App">
        <InputForm userInput={userInput}
                    className="form1"
                    setUserInput={setUserInput}
                    addNewReminder={addNewReminder} />
        <FilterSelect selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter} />
        <ReminderList reminders={filteredList}  setIsComplete={setIsComplete}/>
     
    </div>
  );
}

export default App;

// import WelcomeTitle from './welcomeTitle';
// import Farms from './farms';
// import Techs from './techProps';
// import NewsHandler from './gender2';

 /* <WelcomeTitle/>
       <Farms/>
       <Techs/>
       <NewsHandler/> */
