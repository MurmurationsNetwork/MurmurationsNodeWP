/**
 * WordPress dependencies
 */
import { TextControl, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';

const Locality = () => {
	// Get the name from the state.
	const locality = useSelect((select) => select(STORE_NAME).getLocality());

	// Update the state.
	const { setLocality, setSetting } =
		useDispatch(STORE_NAME);

	return (
        <TextControl
            label={__('Locality', 'murmurations-node')}
            value={locality}
            onChange={(value) => setSetting('locality', value)}
        />
	);
};
export default Locality;
