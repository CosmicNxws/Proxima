export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","Logo/Proximareportdesktop.png","Logo/Proximareportmobile.png","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.Bpo3iD-O.js",app:"_app/immutable/entry/app.DcQcCU4m.js",imports:["_app/immutable/entry/start.Bpo3iD-O.js","_app/immutable/chunks/CCNsVDTE.js","_app/immutable/chunks/CB1frHmv.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CM3tjGAh.js","_app/immutable/chunks/Cka8Ql-3.js","_app/immutable/chunks/DdAyXo9e.js","_app/immutable/entry/app.DcQcCU4m.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/CB1frHmv.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DNTWRfH6.js","_app/immutable/chunks/CJQgs8yU.js","_app/immutable/chunks/BcAi3mOv.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/C2VGr2dc.js","_app/immutable/chunks/Pgx16m2Y.js","_app/immutable/chunks/DyYHv-5_.js","_app/immutable/chunks/Bv7KadAX.js","_app/immutable/chunks/CM3tjGAh.js","_app/immutable/chunks/DdAyXo9e.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/alerts/Technicalerror",
				pattern: /^\/alerts\/Technicalerror\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/articles/[slug]",
				pattern: /^\/articles\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,2,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/auth/callback",
				pattern: /^\/auth\/callback\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/auth/signup",
				pattern: /^\/auth\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/bookmarks",
				pattern: /^\/bookmarks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/comments",
				pattern: /^\/comments\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/notifications",
				pattern: /^\/notifications\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/pages/about",
				pattern: /^\/pages\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/pages/privacy",
				pattern: /^\/pages\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/pages/topics",
				pattern: /^\/pages\/topics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/pages/tos",
				pattern: /^\/pages\/tos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/profile/[id]",
				pattern: /^\/profile\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,3,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
