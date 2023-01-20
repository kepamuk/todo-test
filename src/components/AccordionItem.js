import {memo, useContext} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Switch} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Moment from 'react-moment';

import {Context} from "../context";

const AccordionItem = memo(function AccordionItem({date, id, open, tasks}) {
  const {toggleTodo, toggleTask} = useContext(Context)

  const calendarStrings = {
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    lastWeek: '[last] dddd [at] LT',
    nextWeek: 'dddd [at] LT',
    sameElse: 'L'
  };

  return (
    <Accordion className="accordion__item" expanded={open} onChange={() => toggleTodo(id)} disabled={!tasks.length}>
      <AccordionSummary
        expandIcon={<KeyboardArrowDownIcon/>}
        className="accordionTitle"
      >
        <div className="accordionTitle__line"/>
        <div>
          <Moment calendar={calendarStrings}>{date}</Moment>
          <span> Tasks</span>
        </div>

      </AccordionSummary>
      <AccordionDetails>
        <ul className="settings">
          {tasks.map(task => {
            return <li key={task.id} className="settings__block">
              <div className="settings__block-line" style={{backgroundColor: task.color}}/>
              <div className="settings__block-text">
                <h3 style={{textDecoration: task.checked ? 'line-through' : 'none'}}>{task.title}</h3>
                <p>{task.descr}</p>
              </div>
              <Switch
                checked={task.checked}
                className="settings__block-switch"
                onChange={() => toggleTask(id, task.id)}
              />
            </li>
          })}
        </ul>
      </AccordionDetails>
    </Accordion>
  )
})

export default AccordionItem