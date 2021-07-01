import { HiOutlineSparkles as icon } from 'react-icons/hi';

export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  icon,
  fields: [
    {
      name: 'person',
      title: 'Person',
      type: 'string',
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
    },
    {
      name: 'forPage',
      title: 'Choose Page',
      type: 'string',
      options: {
        list: ['Home', 'About', 'Services', 'Education', 'Contact'],
      },
    },
  ],
  preview: {
    select: {
      title: 'person',
    },
  },
};
