/**
 * WordPress dependencies
 */
import { TextControl, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';

import { STORE_NAME } from '../datastore/constants';

const PrimaryUrl = () => {
	// Get the name from the state.
	const primaryUrl = useSelect((select) => select(STORE_NAME).getPrimaryUrl());

	// Update the state.
	const { setPrimaryUrl, setToggleState, setSetting } =
		useDispatch(STORE_NAME);

	return (
		<TextControl
			label={__('Primary URL', 'murmurations-node')}
			value={primaryUrl}
			onChange={(value) => setSetting('primary_url', value)}
			help={__('The primary URL of the entity or item (i.e., its unique website address)', 'murmurations-node')}
		/>
	);
};
export default PrimaryUrl;
