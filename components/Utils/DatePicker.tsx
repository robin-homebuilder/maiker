import React, { useEffect } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

interface ComponentProps {
  handleSelectDate: (data: string) => void;
  selectedDate: Date;
}

export default function MyDatePicker({ handleSelectDate, selectedDate } : ComponentProps) {
  const [ selected, setSelected ] = React.useState<Date | undefined>(selectedDate ? new Date(selectedDate) : undefined);
  
  useEffect( () => {
    if(selected){
      handleSelectDate(format(selected, 'PP'));
    }
  }, [selected])

  const handleDateSelect = async (day: Date) => {
    setSelected(day);
  };

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onDayClick={handleDateSelect}
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