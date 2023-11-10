import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '.';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['l', 'm', 's'],
    },
    bgColor: {
      control: {
        type: 'select',
      },
      options: ['red', 'orange', 'yellow', 'green', 'blue'],
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Large = Template.bind({});
Large.args = {
  firstname: 'DiCaprio',
  lastname: 'Leonardo',
  size: 'l',
  bgColor: 'yellow',
};

export const Medium = Template.bind({});
Medium.args = {
  firstname: 'Depp',
  lastname: 'Johnny',
  size: 'm',
  bgColor: 'orange',
};

export const Small = Template.bind({});
Small.args = {
  firstname: 'Cruise',
  lastname: 'Tom',
  size: 's',
  bgColor: 'blue',
};
