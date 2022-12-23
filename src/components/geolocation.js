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
	const geoLocationLat = useSelect((select) => select(STORE_NAME).getGeoLocationLat());
	const geoLocationLon = useSelect((select) => select(STORE_NAME).getGeoLocationLon());
	//let {lat, lon} = geoLocation

	// Update the state.
	//const { setGeoLocation, setSetting } =
	const { setGeoLocationLat, setGeoLocationLon, setSetting } =
		useDispatch(STORE_NAME);

	return (	
		<PanelRow>
			<TextControl
				label={__('Latitude', 'murmurations-node')}
				value={lat}
				onChange={(value) => setSetting('geoLocation', value)}
			/>
			<TextControl
				label={__('Longitude', 'murmurations-node')}
				value={lon}
				onChange={(value) => setSetting('geoLocation', value)}
			/>
		</PanelRow>
	);
};
export default GeoLocation;
