import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container } from 'react-bootstrap';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const events = {
    '2025-04-20': 'Beach Music Bash',
    '2025-04-22': 'Kudla Food Fest',
    '2025-04-24': 'Full Moon Beach Night',
    '2025-04-25': 'Sunset DJ Party',
    '2025-04-26': 'Mangalore Food Carnival',
    '2025-04-28': 'Cultural Folk Night',
    '2025-04-29': 'Seashell Art Fair',
    '2025-04-30': 'Seaside Yoga Retreat',
    '2025-05-01': 'Beach Volleyball League',
    '2025-05-03': 'Kite Flying Carnival',
    '2025-05-04': 'Sand Sculpture Showcase',
    '2025-05-05': 'Beachside Fashion Show',
    '2025-05-06': 'Open Air Cinema Night',
    '2025-05-07': 'Mangalore Marathon'
  };

  const formatDateKey = (date) => date.toISOString().split('T')[0];

  const tileContent = ({ date }) => {
    const key = formatDateKey(date);
    return events[key] ? (
      <div className="event-indicator text-primary small text-center">
        🎉 {events[key]}
      </div>
    ) : null;
  };

  return (
    <Container className="py-5 text-white">
      <h2 className="mb-4">Festival Calendar</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={tileContent}
      />
      <div className="mt-4">
        <strong>Selected Date:</strong> {selectedDate.toDateString()}
        {events[formatDateKey(selectedDate)] && (
          <div>
            <strong>Event:</strong> {events[formatDateKey(selectedDate)]}
          </div>
        )}
      </div>
    </Container>
  );
};

export default CalendarPage;
