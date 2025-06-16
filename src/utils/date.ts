// Возвращает сегодняшнюю дату в формате YYYY-MM-DD
export const getTodayDate = (): string => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };
  
  // Преобразует дату в читаемый формат (например: 16 июня 2025)
  export const formatDateReadable = (dateStr: string): string => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', options);
  };
  