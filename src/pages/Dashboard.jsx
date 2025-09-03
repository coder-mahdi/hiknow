import { useState, useEffect } from 'react';
import Layout from '../layouts/Layout';
import Calendar from '../components/Calendar';
import MoodEntry from '../components/MoodEntry';
import '../styles/pages/dashboard.scss';

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [moodEntries, setMoodEntries] = useState({});
  const [showMoodEntry, setShowMoodEntry] = useState(true);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowMoodEntry(true);
  };

  const handleMoodSubmit = (entry) => {
    setMoodEntries(prev => ({
      ...prev,
      [selectedDate.toISOString().split('T')[0]]: entry
    }));
    setShowMoodEntry(false);
  };

  return (
    <Layout>
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Your Wellness Journey</h1>
          <p>Track your daily mood and well-being</p>
        </div>

        <div className="dashboard-content">
          <div className="calendar-section">
            <Calendar 
              onDateSelect={handleDateSelect}
              moodEntries={moodEntries}
            />
          </div>

          {showMoodEntry && (
            <div className="mood-entry-section">
              <MoodEntry 
                date={selectedDate}
                onSubmit={handleMoodSubmit}
                initialData={moodEntries[selectedDate.toISOString().split('T')[0]]}
              />
            </div>
          )}

          <div className="monthly-summary">
            <h2>Monthly Summary</h2>
            <div className="summary-content">
              {/* Monthly summary content will go here */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 