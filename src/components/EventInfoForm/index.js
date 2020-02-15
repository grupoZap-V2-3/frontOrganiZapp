import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import EventDatepickers from "./../EventDatepickers";
import './EventInfoForm.scss';


const EventInfoForm = ({ btnText }) => {
//Inputs setters
  const [eventName,setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');

//Handlers
  const handleSubmit = (e, eventName, eventDescription) => {
    e.preventDefault();
    console.log("eventName: " + eventName)
    console.log("eventDescription: " + eventDescription)
    //dateFieldValidation();
    //textFieldValidation();
    //locationFieldValidation();
  }

  return (
    <form 
      className="EventFormWrapper"
      onSubmit={handleSubmit} 
      noValidate autoComplete="off"
    >
      <TextField 
        id="EventName" 
        label="Nombre del Evento"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        size="small"
      />
      <TextField 
        id="EventDescription"
        label="Descripción del Evento"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
        size="small"
      />
      <div>
        <EventDatepickers />
      </div>
      <TextField 
        id="EventLocation" 
        label="Lugar del Evento"
        value={eventLocation}
        onChange={(e) => setEventLocation(e.target.value)}
        size="small"
      />
      <button className="ContinueBtn" type="submit">
        <span className="ContinueBtn-text">{btnText}</span>
      </button>
    </form>
  )
}

export default EventInfoForm;