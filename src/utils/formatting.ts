// Форматирует число калорий (например: 450 -> "450 ккал")
export const formatCalories = (calories: number): string => {
    return `${calories} ккал`;
  };
  
  // Ограничивает длину строки
  export const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };
  