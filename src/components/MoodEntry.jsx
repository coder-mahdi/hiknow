import { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import '../styles/components/moodEntry.scss';

const moodOptions = [
  { value: 'great', label: 'Great', color: '#4CAF50' },
  { value: 'good', label: 'Good', color: '#8BC34A' },
  { value: 'neutral', label: 'Neutral', color: '#FFC107' },
  { value: 'bad', label: 'Bad', color: '#FF9800' },
  { value: 'terrible', label: 'Terrible', color: '#F44336' }
];

export default function MoodEntry({ date, onSubmit, initialData }) {
  const [mood, setMood] = useState(initialData?.mood || '');
  const [physicalState, setPhysicalState] = useState(initialData?.physicalState || '');
  const [notes, setNotes] = useState(initialData?.notes || '');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialData?.imageUrl || '');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = initialData?.imageUrl || '';
      
      if (image) {
        const storageRef = ref(storage, `mood-images/${date.toISOString().split('T')[0]}`);
        const snapshot = await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      const selectedMood = moodOptions.find(option => option.value === mood);
      
      onSubmit({
        mood,
        moodColor: selectedMood?.color,
        physicalState,
        notes,
        imageUrl,
        date: date.toISOString().split('T')[0]
      });
    } catch (error) {
      console.error('Error saving mood entry:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mood-entry">
      <h3>{date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mood-selector">
          <label>How are you feeling today?</label>
          <div className="mood-options">
            {moodOptions.map(option => (
              <button
                key={option.value}
                type="button"
                className={`mood-option ${mood === option.value ? 'selected' : ''}`}
                style={{ backgroundColor: option.color }}
                onClick={() => setMood(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Physical State</label>
          <textarea
            value={physicalState}
            onChange={(e) => setPhysicalState(e.target.value)}
            placeholder="How's your physical condition today?"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label>Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any additional thoughts or notes?"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label>Add Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Saving...' : 'Save Entry'}
        </button>
      </form>
    </div>
  );
} 