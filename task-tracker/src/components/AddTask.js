import {useState} from 'react';

const AddTask = ({onCreate}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        onCreate({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                    type='text' 
                    placeholder='Create new task....' 
                    value={text} 
                    onChange={(e) => {setText(e.target.value)}} 
                    required
                />
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input 
                    type='text' 
                    placeholder='Add day....' 
                    value={day} 
                    onChange={(e) => {setDay(e.target.value)}} 
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                    type='checkbox' 
                    value={reminder} 
                    onChange={(e) => {setReminder(e.currentTarget.checked)}} 
                    checked={reminder}
                />
            </div>

            <input className='btn btn-block' type='submit' value='Save'/>
        </form>
    )
}

export default AddTask
