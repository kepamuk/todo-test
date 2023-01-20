import React, {memo} from 'react'
import AccordionItem from "./AccordionItem";

const Accordion = memo(function Accordion({todos}) {
  return (
    <div className="accordion hide-scrollbar">
      {todos.map(item => <AccordionItem key={item.id} {...item} />)}
    </div>
  )
})

export default Accordion;
