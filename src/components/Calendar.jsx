import { useState, useEffect } from 'react';
import '../styles/components/calendar.scss';

export default function Calendar({ onDateSelect, moodEntries }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    generateCalendarDays();
  }, [currentDate]);

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const daysArray = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      daysArray.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      daysArray.push(date);
    }
    
    setDays(daysArray);
  };

  const getMoodColor = (date) => {
    const entry = moodEntries[date.toISOString().split('T')[0]];
    if (!entry) return 'transparent';
    return entry.moodColor || '#e0e0e0';
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}>
          &lt;
        </button>
        <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}>
          &gt;
        </button>
      </div>

      <div className="calendar-grid">
        <div className="weekday">Sun</div>
        <div className="weekday">Mon</div>
        <div className="weekday">Tue</div>
        <div className="weekday">Wed</div>
        <div className="weekday">Thu</div>
        <div className="weekday">Fri</div>
        <div className="weekday">Sat</div>

        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day ? 'has-date' : 'empty'}`}
            onClick={() => day && onDateSelect(day)}
            style={{
              backgroundColor: day ? getMoodColor(day) : 'transparent'
            }}
          >
            {day && day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
} 