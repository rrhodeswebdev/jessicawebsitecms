import { FaUserGraduate as icon } from 'react-icons/fa';
import dayjs from 'dayjs';
import { states } from '../../utils/states';

export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  icon,
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Laced'],
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'lacedUrl',
      title: 'Laced URL',
      type: 'url',
    },
    {
      name: 'datetime',
      title: 'Class Date & Start Time',
      type: 'datetime',
      options: {
        timeStep: 15,
        timeFormat: 'h:mm a',
        dateFormat: 'MMMM D, YYYY',
      },
    },
    {
      name: 'duration',
      title: 'Duration of Class',
      type: 'number',
      description: 'in hours',
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'state',
          title: 'State',
          type: 'string',
          options: {
            list: states,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'datetime',
    },
    prepare({ title, date }) {
      return {
        title,
        subtitle: dayjs(date).format('MMMM D, YYYY - h:mm a'),
      };
    },
  },
};
