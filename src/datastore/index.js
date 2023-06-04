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
	// Murmurations
	SET_NAME,
	SET_PRIMARY_URL,
	SET_URLS,
	SET_DESCRIPTION,
	SET_MISSION,
	SET_LOCATION,
	SET_LOCALITY,
	SET_REGION,
	SET_COUNTRY_NAME,
	SET_GEOLOCATION,
	SET_IMAGE,
	SET_TAGS,
	SET_RSS,
	SET_ENV,
	SET_TEST_LAST_UPDATED,
	SET_PROD_LAST_UPDATED,
	//
} from './constants';

// Define our actions
const actions = {
	initSettings( settings ) {
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

	setName( name ) {
		return {
			type: SET_NAME,
			payload: {
				name,
			},
		};
	},
	setPrimaryUrl( primary_url ) {
		return {
			type: SET_PRIMARY_URL,
			payload: {
				primary_url,
			},
		};
	},
	setUrls( urls ) {
		return {
			type: SET_URLS,
			payload: {
				urls,
			},
		};
	},
	setDescription( description ) {
		return {
			type: SET_DESCRIPTION,
			payload: {
				description,
			},
		};
	},
	setMission( mission ) {
		return {
			type: SET_MISSION,
			payload: {
				mission,
			},
		};
	},
	setLocation( location ) {
		return {
			type: SET_LOCATION,
			payload: {
				location,
			},
		};
	},
	setLocality( locality ) {
		return {
			type: SET_LOCALITY,
			payload: {
				locality,
			},
		};
	},
	setRegion( region ) {
		return {
			type: SET_REGION,
			payload: {
				region,
			},
		};
	},
	setCountryName( country_name ) {
		return {
			type: SET_COUNTRY_NAME,
			payload: {
				country_name,
			},
		};
	},
	setGeoLocation( geolocation ) {
		return {
			type: SET_GEOLOCATION,
			payload: {
				geolocation,
			},
		};
	},
	setImage( image ) {
		return {
			type: SET_IMAGE,
			payload: {
				image,
			},
		};
	},
	setImageID( image_id ) {
		return {
			type: SET_IMAGE,
			payload: {
				image_id,
			},
		};
	},
	setTags( tags ) {
		return {
			type: SET_TAGS,
			payload: {
				tags,
			},
		};
	},
	setRSS( rss ) {
		return {
			type: SET_RSS,
			payload: {
				rss,
			},
		};
	},
	setEnv( env ) {
		return {
			type: SET_ENV,
			payload: {
				env,
			},
		};
	},
	setProdLastUpdated( prod_last_updated ) {
		return {
			type: SET_PROD_LAST_UPDATED,
			payload: {
				prod_last_updated,
			},
		};
	},
	setTestLastUpdated( test_last_updated ) {
		return {
			type: SET_TEST_LAST_UPDATED,
			payload: {
				test_last_updated,
			},
		};
	},

	setUserPreferences( userPreferences ) {
		return {
			type: SET_USER_PREFERENCES,
			payload: {
				userPreferences,
			},
		};
	},
	setSetting( setting, value ) {
		return {
			type: SET_SETTING,
			payload: {
				setting,
				value,
			},
		};
	},
};

// Define the reducer
function reducer( state = DEFAULT_STATE, { type, payload } ) {
	switch ( type ) {
		case STATE_FROM_DATABASE:
			return {
				...state,
				...payload,
			};
		case SET_SETTING:
			const { setting, value } = payload;
			return {
				...state,
				[ setting ]: value,
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
			const { urls, index } = payload;
			return {
				...state,
				urls: [
					{
						name: urls[ index ].name,
						url: urls[ index ].url,
					},
				],
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
		case SET_GEOLOCATION:
			const { geolocation } = payload;
			return {
				...state,
				geolocation: {
					lat: geolocation.latitude,
					lon: geolocation.longitude,
				},
			};
		case SET_IMAGE:
			const { image } = payload;
			return {
				...state,
				image,
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
		case SET_ENV:
			const { env } = payload;
			return {
				...state,
				env,
			};
		case SET_TEST_LAST_UPDATED:
			const { test_last_updated } = payload;
			return {
				...state,
				test_last_updated,
			};
		case SET_PROD_LAST_UPDATED:
			const { prod_last_updated } = payload;
			return {
				...state,
				prod_last_updated,
			};
	}
	return state;
}

// Define some selectors
const selectors = {
	getName( state ) {
		return state.name;
	},
	getPrimaryUrl( state ) {
		return state.primary_url;
	},
	getUrls( state ) {
		return state.urls;
	},
	getDescription( state ) {
		return state.description;
	},
	getMission( state ) {
		return state.mission;
	},
	getLocation( state ) {
		return state.location;
	},
	getLocality( state ) {
		return state.locality;
	},
	getRegion( state ) {
		return state.region;
	},
	getCountryName( state ) {
		return state.country_name;
	},
	getGeoLocation( state ) {
		return state.geolocation;
	},
	getImage( state ) {
		return state.image;
	},
	getTags( state ) {
		return state.tags;
	},
	getRSS( state ) {
		return state.rss;
	},
	getEnv( state ) {
		return state.env;
	},
	getTestLastUpdated( state ) {
		return state.test_last_updated;
	},
	getProdLastUpdated( state ) {
		return state.prod_last_updated;
	},
	getSettings( state ) {
		const { ...settings } = state;
		return settings;
	},
};

const resolvers = {
	getSettings() {
		return async ( { dispatch } ) => {
			const settings = await apiFetch( { path: '/wp/v2/settings' } );
			dispatch.initSettings( settings[ 'murmurations-node_data' ] );
		};
	},
};

// Define and register the store.
const store = createReduxStore( STORE_NAME, {
	reducer,
	actions,
	selectors,
	resolvers,
} );

register( store );
