import React, { useEffect } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

interface ComponentProps {
  handleSelectDate: (data: string) => void;
}

export default function MyDatePicker({ handleSelectDate } : ComponentProps) {
  const [ selected, setSelected ] = React.useState<Date>();

  useEffect( () => {
    if(selected){
      handleSelectDate(format(selected, 'PP'));
    }
  }, [selected])

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      modifiersStyles={{
        selected: { 
          backgroundColor: '#358AC3',
          color: "white"
        },
      }}
      styles={{
        head_cell: {
          width: "60px",
        },
        table: {
          maxWidth: "none"
        },
        day: {
          margin: "auto",
          color: "#358AC3"
        },
        caption: { color: '#358AC3' },
      }}
    />
  );
}