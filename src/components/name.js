/**
 * WordPress dependencies
 */
import { TextControl, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';

import { STORE_NAME } from '../datastore/constants';

const Name = () => {
	// Get the name from the state.
	const name = useSelect((select) => select(STORE_NAME).getName());

	// Update the state.
	const { setName, setToggleState, setSetting } =
		useDispatch(STORE_NAME);

	return (
		<TextControl
			label={__('Name', 'murmurations-node')}
			value={name}
			onChange={(value) => setSetting('name', value)}
			help={__('The name of the entity, organization, project, item, etc.', 'murmurations-node' )}
		/>
	);
};
export default Name;
