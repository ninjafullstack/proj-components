export const colorPicker = (text: string): string => {
  switch (text) {
    case 'Активный':
      return 'dark-orange';
    case 'Популярный':
    case 'На утверждении':
      return 'light-orange';
    case 'Недоступен':
      return 'red';
    case 'Новый':
    case 'Новая':
      return 'green';
    case 'Завершено':
      return 'dark-green';
    case 'Позиция конкурента':
      return 'dark-blue';
    case 'Неактивный':
    case 'В процессе':
    case 'Неопубликованная':
      return 'blue';
    case 'Рекомендуемая':
      return 'light-blue';
    case 'Деактивированный':
      return 'dark-gray';
    default:
      return 'white';
  }
};
