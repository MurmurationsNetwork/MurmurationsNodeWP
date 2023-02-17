/**
 * WordPress dependencies
 */
import { TextControl, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';

const GeoLocation = () => {
	// Get the name from the state.
	//const { lat, lon } = useSelect((select) => select(STORE_NAME).getGeoLocation());
	const latitude = useSelect((select) => select(STORE_NAME).getGeoLocationLat());
	const longitude = useSelect((select) => select(STORE_NAME).getGeoLocationLon());
	//let {lat, lon} = geoLocation

	// Update the state.
	//const { setGeoLocation, setSetting } =
	const { setGeoLocationLat, setGeoLocationLon, setSetting } =
		useDispatch(STORE_NAME);

	return (	
		<PanelRow>
			<TextControl
				label={__('Latitude', 'murmurations-node')}
				value={latitude}
				onChange={(value) => setSetting('latitude', value)}
			/>
			<TextControl
				label={__('Longitude', 'murmurations-node')}
				value={longitude}
				onChange={(value) => setSetting('longitude', value)}
			/>
		</PanelRow>
	);
};
export default GeoLocation;
