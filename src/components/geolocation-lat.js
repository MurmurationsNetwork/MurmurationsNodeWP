/**
 * WordPress dependencies
 */
import { TextControl, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';
import { forwardRef } from '@wordpress/element';

const GeoLocationLat = forwardRef(function GeoLocationLat(props, ref) {
	// Get the name from the state.
	const latitude = useSelect((select) => select(STORE_NAME).getGeoLocationLat());

	// Update the state.
	const { setGeoLocationLat, setSetting } =
		useDispatch(STORE_NAME);

	return (	
		<TextControl
			label={__('Latitude', 'murmurations-node')}
			ref={ref}
			value={latitude ?? ''}
			onChange={(value) => setSetting('latitude', value)}
			help={__('The geo-coordinates (latitude)', 'murmurations-node')}
		/>
	);
});
export default GeoLocationLat;
