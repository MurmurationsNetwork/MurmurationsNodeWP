/**
 * WordPress dependencies
 */
import { TextControl, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';

const GeoLocationLat = () => {
	// Get the name from the state.
	const geoLocationLat = useSelect((select) => select(STORE_NAME).getGeoLocationLat());

	// Update the state.
	const { setGeoLocationLat, setSetting } =
		useDispatch(STORE_NAME);

	return (	
		<TextControl
			label={__('Latitude', 'murmurations-node')}
			value={geoLocationLat}
			onChange={(value) => setSetting('geoLocationLat', value)}
			help={__('The geo-coordinates (latitude)', 'murmurations-node')}
		/>
	);
};
export default GeoLocationLat;
