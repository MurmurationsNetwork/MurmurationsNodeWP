/**
 * WordPress dependencies
 */
import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';

const Rss = () => {
	// Get the name from the state.
	const rss = useSelect( ( select ) => select( STORE_NAME ).getRSS() );

	// Update the state.
	const { setRss, setSetting } = useDispatch( STORE_NAME );

	//change component
	return (
		<TextControl
			label={ __( 'RSS', 'murmurations-node' ) }
			value={ rss ?? '' }
			onChange={ ( value ) => setSetting( 'rss', value ) }
			help={ __(
				"The URL for the entity's RSS feed",
				'murmurations-node'
			) }
		/>
	);
};
export default Rss;
