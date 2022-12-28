/**
 * WordPress dependencies
 */
import { TextControl, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';

const Region = () => {
	// Get the name from the state.
	const region = useSelect((select) => select(STORE_NAME).getRegion());

	// Update the state.
	const { setRegion, setSetting } =
		useDispatch(STORE_NAME);

	return (
        <TextControl
            label={__('Region', 'murmurations-node')}
            value={region}
            onChange={(value) => setSetting('region', value)}
            help={__('The region (state, county, province, etc.) where the entity is located', 'murmurations-node')}
        />
	);
};
export default Region;
