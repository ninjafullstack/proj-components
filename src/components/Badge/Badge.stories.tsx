import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Badge, badgeVariantsEnum } from '.';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    text: {
      control: {
        type: 'select',
      },
      options: [
        'Активный',
        'Неактивный',
        'Популярный',
        'На утверждении',
        'Недоступен',
        'Новый',
        'Новая',
        'Завершено',
        'Позиция конкурента',
        'В процессе',
        'Неопубликованная',
        'Рекомендуемая',
        'Деактивированный',
      ],
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Active = Template.bind({});
Active.args = {
  text: badgeVariantsEnum.active,
};
