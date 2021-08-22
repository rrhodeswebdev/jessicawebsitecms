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
			validation: Rule =>
				Rule.required().error('A category must be choosen'),
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: Rule =>
				Rule.required().error('Service must have a title'),
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
			validation: Rule =>
				Rule.required().error('Service must have a description'),
		},
		{
			name: 'costType',
			title: 'Cost Type',
			type: 'string',
			options: {
				list: [
					{ title: 'Fixed', value: 'Fixed' },
					{ title: 'Dynamic', value: 'Dynamic' },
					{ title: 'Ranged', value: 'Ranged' },
				],
				layout: 'radio',
				direction: 'horizontal',
			},
		},
		{
			name: 'fixedCost',
			title: 'Fixed Cost',
			type: 'number',
			hidden: ({ document }) => {
				return document.costType !== 'Fixed';
			},
		},
		{
			name: 'dynamicCost',
			title: 'Dynamic Cost',
			type: 'number',
			hidden: ({ document }) => {
				return document.costType !== 'Dynamic';
			},
		},
		{
			name: 'rangedCost',
			title: 'Ranged Cost',
			type: 'object',
			hidden: ({ document }) => {
				return document.costType !== 'Ranged';
			},
			fields: [
				{
					name: 'minCost',
					title: 'Min Cost',
					type: 'number',
				},
				{
					name: 'maxCost',
					title: 'Max Cost',
					type: 'number',
				},
			],
		},
		{
			name: 'time',
			title: 'Time',
			type: 'number',
			description: 'Estimated time in minutes',
		},
	],
	preview: {
		select: {
			title: 'title',
			category: 'category',
		},
		prepare({ title, cost, category }) {
			return {
				title: title ? title : 'New Service',
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
