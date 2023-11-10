import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TagsVariantsEnum, Text } from '.';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        description: 'Variants of text',
      },
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'subtitle_m',
        'subtitle_s',
        'body_l',
        'body_m',
        'caption',
      ],
    },
    color: {
      control: {
        type: 'select',
      },
      options: [
        'black',
        'white',
        'gray',
        'light_gray',
        'dark-gray',
        'profile-block',
        'main',
        'red',
        'green',
        'orange',
        'bg',
      ],
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  text: 'new text',
  variant: TagsVariantsEnum.h1,
  color: 'red',
};
