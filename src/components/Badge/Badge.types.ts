export type BadgeProps = {
  text: badgeVariantsEnum;
  className?: string;
};

export enum badgeVariantsEnum {
  active = 'Активный',
  notActive = 'Неактивный',
  popular = 'Популярный',
  onApproval = 'На утверждении',
  notAvailable = 'Недоступен',
  new = 'Новый',
  newPM = 'Новая',
  completed = 'Завершено',
  positionCompetitor = 'Позиция конкурента',
  inProgress = 'В процессе',
  unpublished = 'Неопубликованная',
  recommended = 'Рекомендуемая',
  deactivated = 'Деактивированный',
}
