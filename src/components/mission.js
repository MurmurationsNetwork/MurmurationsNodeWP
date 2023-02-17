/**
 * WordPress dependencies
 */
import { TextControl, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';

const Mission = () => {
	// Get the name from the state.
	const mission = useSelect((select) => select(STORE_NAME).getMission());

	// Update the state.
	const { setMission, setSetting } =
		useDispatch(STORE_NAME);

	return (
        <TextControl
            label={__('Mission', 'murmurations-node')}
            value={mission ?? ''}
            onChange={(value) => setSetting('mission', value)}
			help={__('A short statement of why the entity exists and its goals.', 'murmurations-node' )}
        />
	);
};
export default Mission;
