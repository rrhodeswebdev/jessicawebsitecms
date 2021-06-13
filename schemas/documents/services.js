import React from 'react';
import { ImScissors } from 'react-icons/im';
import { GiLargePaintBrush, GiFoxTail } from 'react-icons/gi';
import { FaRegClipboard as icon } from 'react-icons/fa';

export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  icon,
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Styling', 'Color', 'Extensions'],
      },
      validation: Rule => Rule.required().error('A category must be choosen'),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().error('Service must have a title'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule =>
        Rule.required().error('Service must have a description'),
    },
    {
      name: 'cost',
      title: 'Cost',
      type: 'number',
      validation: Rule =>
        Rule.required()
          .positive()
          .integer()
          .error('Service must have a valid cost'),
    },
    {
      name: 'time',
      title: 'Time',
      type: 'number',
      description: 'Estimated time in minutes',
      validation: Rule =>
        Rule.required()
          .positive()
          .integer()
          .error('Service must have a valid time'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      cost: 'cost',
      category: 'category',
    },
    prepare({ title, cost, category }) {
      return {
        title: title ? title : 'New Service',
        subtitle: cost ? `$${cost}` : '',
        media: (
          <>
            {category === 'Styling' && <ImScissors />}
            {category === 'Color' && <GiLargePaintBrush />}
            {category === 'Extensions' && <GiFoxTail />}
          </>
        ),
      };
    },
  },
};
