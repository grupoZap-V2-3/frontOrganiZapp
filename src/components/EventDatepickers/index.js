import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './EventDatepickers.scss';


const DatePickers= ()=> {
 //Setters
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');
  const [eventDay, setEventDay] = useState('');

  return (
    <div className="DateWrapper">
      <TextField
        id="date"
        label="Fecha"
        type="date"
        className="DatePicker"
        defaultValue={eventDay}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setEventDay(e.target.value)}
      />
      <TextField
            id="startTime"
            label="Inicia"
            type="time"
            defaultValue={eventStartTime}
            className="timePicker startTime"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(e) => setEventStartTime(e.target.value)}
          />
          <TextField
            id="startTime"
            label="Termina"
            type="time"
            defaultValue={eventEndTime}
            className="timePicker endTime"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            onChange={(e) => {setEventEndTime(e.target.value)
              console.log({eventEndTime})}
            }
          />
    </div>
  );
}

export default DatePickers