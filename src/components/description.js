/**
 * WordPress dependencies
 */
import { TextControl, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';

import { STORE_NAME } from '../datastore/constants';

const Description = () => {
	// Get the name from the state.
	const description = useSelect((select) => select(STORE_NAME).getDescription());

	// Update the state.
	const { setDescription, setSetting } =
		useDispatch(STORE_NAME);

	return (
        <TextControl
            label={__('Description', 'murmurations-node')}
            value={description}
            onChange={(value) => setSetting('description', value)}
        />
	);
};
export default Description;
