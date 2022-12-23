/**
 * WordPress dependencies
 */
import { TextControl, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';

const Tags = () => {
	// Get the name from the state.
	const tags = useSelect((select) => select(STORE_NAME).getTags());

	// Update the state.
	const { setTags, setSetting } =
		useDispatch(STORE_NAME);

    //change component
	return (
        <TextControl
            label={__('Tags', 'murmurations-node')}
            value={tags}
            onChange={(value) => setSetting('tags', value)}
        />
	);
};
export default Tags;
