export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22')
];

export const server_loads = [];

export const dictionary = {
		"/": [4],
		"/alerts/Technicalerror": [5],
		"/articles/[slug]": [~6,[],[2]],
		"/auth/callback": [7],
		"/auth/login": [8],
		"/auth/signup": [9],
		"/bookmarks": [10],
		"/comments": [11],
		"/notifications": [12],
		"/pages/about": [13],
		"/pages/careers": [14],
		"/pages/contact": [15],
		"/pages/launches": [16],
		"/pages/privacy": [17],
		"/pages/topics": [18],
		"/pages/tos": [19],
		"/profile/[id]": [~20,[],[3]],
		"/search": [21],
		"/settings": [22]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';