import React, { useState } from 'react';

type EditFoodDialogProps = {
  initialTitle?: string;
  initialCalories?: number;
  onSave: (title: string, calories: number) => void;
  onClose: () => void;
};

const EditFoodDialog: React.FC<EditFoodDialogProps> = ({ initialTitle = '', initialCalories = 0, onSave, onClose }) => {
  const [title, setTitle] = useState(initialTitle);
  const [calories, setCalories] = useState(initialCalories);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(title, calories);
  };

  return (
    <div style={{ background: '#fff', padding: 20, borderRadius: 8, maxWidth: 400 }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Название еды:</label>
          <input value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Калорийность:</label>
          <input
            type="number"
            value={calories}
            onChange={e => setCalories(Number(e.target.value))}
            min={0}
            required
          />
        </div>
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onClose} style={{ marginLeft: 10 }}>Отмена</button>
      </form>
    </div>
  );
};

export default EditFoodDialog;
