/**
 * WordPress dependencies
 */
import { TextControl, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';
import { forwardRef } from '@wordpress/element';

const GeoLocationLon = forwardRef(function GeoLocationLon(props, ref) {
	const longitude = useSelect((select) => select(STORE_NAME).getGeoLocationLon());

	// Update the state.
	const { setGeoLocationLon, setSetting } =
		useDispatch(STORE_NAME);

	return (	
        <TextControl
            label={__('Longitude', 'murmurations-node')}
            ref={ref}
            value={longitude ?? ''}
            onChange={(value) => setSetting('longitude', value)}
            help={__('The geo-coordinates (longitude)', 'murmurations-node')}
        />
	);
});
export default GeoLocationLon;
