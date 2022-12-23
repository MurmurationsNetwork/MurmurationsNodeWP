/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { createReduxStore, register } from '@wordpress/data';

import {
	DEFAULT_STATE,
	STATE_FROM_DATABASE,
	FETCH_SETTINGS,
	SET_SETTING,
	STORE_NAME,
	SET_USER_PREFERENCES,
	// Murmurations
	SET_NAME,
	SET_PRIMARY_URL,
	SET_URLS,
	SET_URLSINGLE_LABEL, //TEMP
	SET_URLSINGLE_URL, //TEMP
	SET_DESCRIPTION,
	SET_MISSION,
	SET_LOCATION, //User convenience
	SET_LOCALITY,
	SET_REGION,
	SET_COUNTRY_NAME,
	SET_GEOLOCATION,
	SET_GEOLOCATIONLAT,
	SET_GEOLOCATIONLON,
	SET_IMAGE,
	SET_IMAGE_ID,
	SET_TAGS,
	SET_RSS,
	//
} from './constants';

// Define our actions
const actions = {
	initSettings(settings) {
		return {
			type: STATE_FROM_DATABASE,
			payload: {
				...settings,
			},
		};
	},
	fetchSettings() {
		return {
			type: FETCH_SETTINGS,
			payload: {},
		};
	},

	setName(name) {
		return {
			type: SET_NAME,
			payload: {
				name,
			},
		};
	},
	setPrimaryUrl(primary_url) {
		return {
			type: SET_PRIMARY_URL,
			payload: {
				primary_url,
			},
		};
	},
	setUrls(urls) {
		return {
			type: SET_URLS,
			payload: {
				urls,
			},
		};
	},
	setUrlSingleLabel(name) {
		return {
			type: SET_URLSINGLE_LABEL,
			payload: {
				name,
			},
		};
	},
	setUrlSingleURL(url) {
		return {
			type: SET_URLSINGLE_URL,
			payload: {
				url,
			},
		};
	},
	setDescription(description) {
		return {
			type: SET_DESCRIPTION,
			payload: {
				description,
			},
		};
	},
	setMission(mission) {
		return {
			type: SET_MISSION,
			payload: {
				mission,
			},
		};
	},
	setLocation(location) {
		return {
			type: SET_LOCATION,
			payload: {
				location,
			},
		};
	},
	setLocality(locality) {
		return {
			type: SET_LOCALITY,
			payload: {
				locality,
			},
		};
	},
	setRegion(region) {
		return {
			type: SET_REGION,
			payload: {
				region,
			},
		};
	},
	setCountryName(country_name) {
		return {
			type: SET_COUNTRY_NAME,
			payload: {
				country_name,
			},
		};
	},
	setGeoLocation(lat, lon) {//how to set object
		return {
			type: SET_GEOLOCATION,
			payload: {
				geolocation: {
					lat,
					lon
				},
			},
		};
	},
	setGeoLocationLat(lat) {
		return {
			type: SET_GEOLOCATIONLAT,
			payload: {
				lat,
			},
		};
	},
	setGeoLocationLon(lon) {
		return {
			type: SET_GEOLOCATIONLON,
			payload: {
				lon,
			},
		};
	},
	setImage(image) {
		return {
			type: SET_IMAGE,
			payload: {
				image,
			},
		};
	},
	setImageID(image_id) {
		return {
			type: SET_IMAGE,
			payload: {
				image_id,
			},
		};
	},
	setTags(tags) {
		return {
			type: SET_TAGS,
			payload: {
				tags,
			},
		};
	},
	setRSS(rss) {
		return {
			type: SET_RSS,
			payload: {
				rss,
			},
		};
	},

	
	setUserPreferences(userPreferences) {
		return {
			type: SET_USER_PREFERENCES,
			payload: {
				userPreferences,
			},
		};
	},
	setSetting(setting, value) {
		return {
			type: SET_SETTING,
			payload: {
				setting,
				value,
			},
		};
	},
	// setToggleState(section) {
	// 	return function ({ select, dispatch }) {
	// 		const currentValues = select.getUserPreferences();
	// 		const sectionValue = currentValues[section];
	// 		dispatch.setUserPreferences({
	// 			...currentValues,
	// 			[section]: !sectionValue,
	// 		});
	// 	};
	// },
};

// Define the reducer
function reducer(state = DEFAULT_STATE, { type, payload }) {
	switch (type) {
		case STATE_FROM_DATABASE:
			return {
				...state,
				...payload,
			};
		case SET_SETTING:
			const { setting, value } = payload;
			return {
				...state,
				[setting]: value,
			};
		case SET_NAME:
			const { name } = payload;
			return {
				...state,
				name,
			};
		case SET_PRIMARY_URL:
			const { primary_url } = payload;
			return {
				...state,
				primary_url,
			};
		case SET_URLS:
			const { urls } = payload;
			return {
				...state,
				urls,
			};
		case SET_URLSINGLE_LABEL:
			const { urlSingleLabel } = payload;
			return {
				...state,
				urlSingleLabel,
			};
		case SET_URLSINGLE_URL:
			const { urlSingleURL } = payload;
			return {
				...state,
				urlSingleURL,
			};
		case SET_DESCRIPTION:
			const { description } = payload;
			return {
				...state,
				description,
			};
		case SET_MISSION:
			const { mission } = payload;
			return {
				...state,
				mission,
			};
		case SET_LOCATION:
			const { location } = payload;
			return {
				...state,
				location,
			};
		case SET_LOCALITY:
			const { locality } = payload;
			return {
				...state,
				locality,
			};
		case SET_REGION:
			const { region } = payload;
			return {
				...state,
				region,
			};
		case SET_COUNTRY_NAME:
			const { country_name } = payload;
			return {
				...state,
				country_name,
			};
		// case SET_GEOLOCATION:
		// 	const { lat, lon } = payload; // { geolocation }
		// 	return {
		// 		...state,
		// 		geolocation: {
		// 			lat,
		// 			lon
		// 		},
		// 	};
		case SET_GEOLOCATIONLAT:
			const { lat } = payload;
			return {
				...state,
				lat,
			};
		case SET_GEOLOCATIONLON:
			const { lon } = payload;
			return {
				...state,
				lon,
			};
		case SET_IMAGE:
			const { image } = payload;
			return {
				...state,
				image,
			};
		case SET_IMAGE_ID:
			const { image_id } = payload;
			return {
				...state,
				image_id,
			};
		case SET_TAGS:
			const { tags } = payload;
			return {
				...state,
				tags,
			};
		case SET_RSS:
			const { rss } = payload;
			return {
				...state,
				rss,
			};
		
		case SET_USER_PREFERENCES:
			const { userPreferences } = payload;
			if (userPreferences) {
				window.localStorage.setItem(
					'murmurations-node-user-preferences',
					JSON.stringify(userPreferences)
				);
			}
			return {
				...state,
				userPreferences,
			};
	}
	return state;
}

// Define some selectors
const selectors = {
	getName(state) {
		return state.name;
	},
	getPrimaryUrl(state) {
		return state.primary_url;
	},
	getUrls(state) {
		return state.urls;
	},
	getUrlSingleLabel(state) {
		return state.urlSingleLabel;
	},
	getUrlSingleURL(state) {
		return state.urlSingleUrl;
	},
	getDescription(state) {
		return state.description;
	},
	getMission(state) {
		return state.mission;
	},
	getLocation(state) {
		return state.location;
	},
	getLocality(state) {
		return state.locality;
	},
	getRegion(state) {
		return state.region;
	},
	getCountryName(state) {
		return state.country_name;
	},
	getGeoLocation(state) {
		return state.geolocation;
	},
	getGeoLocationLat(state) {
		return state.lat;
	},
	getGeoLocationLon(state) {
		return state.lon;
	},
	getImage(state) {
		return state.image;
	},
	getImageID(state) {
		return state.image_id;
	},
	getTags(state) {
		return state.tags;
	},
	getRSS(state) {
		return state.rss;
	},
	getSettings(state) {
		const { ...settings } = state;
		return settings;
	},
	getUserPreferences(state) {
		return state.userPreferences;
	},
};

const resolvers = {
	getSettings() {
		return async ({ dispatch }) => {
			const settings = await apiFetch({ path: '/wp/v2/settings' });
			dispatch.initSettings(settings['murmurations-node_data']);
		};
	},
	getUserPreferences() {
		return ({ dispatch }) => {
			const userPreferences =
				window.localStorage.getItem(
					'murmurations-node-user-preferences'
				) || DEFAULT_STATE.userPreferences;
			dispatch.setUserPreferences(JSON.parse(userPreferences));
		};
	},
};

// Define and register the store.
const store = createReduxStore(STORE_NAME, {
	reducer,
	actions,
	selectors,
	resolvers,
	// __experimentalUseThunks: true,
});

register(store);
