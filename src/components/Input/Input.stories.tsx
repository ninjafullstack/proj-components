import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '.';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['text', 'password', 'email', 'date', 'currency'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['m', 'l'],
    },
    label: {
      control: {
        type: 'text',
      },
      options: [''],
    },
    placeholder: {
      control: {
        type: 'text',
      },
      options: [''],
    },
    errorMessage: {
      control: {
        type: 'text',
      },
      options: ['Type...'],
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const password = Template.bind({});
password.args = {
  type: 'password',
  size: 'l',
  label: 'Введите пароль',
  errorMessage: '',
  placeholder: 'Введите пароль',
};

export const currency = Template.bind({});
currency.args = {
  type: 'currency',
  size: 'm',
  label: '',
  errorMessage: '',
  placeholder: 'Type...',
};

export const date = Template.bind({});
date.args = {
  type: 'date',
  size: 'm',
  label: '',
  errorMessage: '',
  placeholder: 'Type...',
};
