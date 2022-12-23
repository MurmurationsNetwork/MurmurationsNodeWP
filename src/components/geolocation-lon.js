/**
 * WordPress dependencies
 */
import { TextControl, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';

const GeoLocationLon = () => {
	const geoLocationLon = useSelect((select) => select(STORE_NAME).getGeoLocationLon());

	// Update the state.
	const { setGeoLocationLon, setSetting } =
		useDispatch(STORE_NAME);

	return (	
        <TextControl
            label={__('Longitude', 'murmurations-node')}
            value={geoLocationLon}
            onChange={(value) => setSetting('geoLocationLon', value)}
        />
	);
};
export default GeoLocationLon;
