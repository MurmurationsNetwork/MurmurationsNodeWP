/**
 * WordPress dependencies
 */
import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';

const Env = () => {
	// Get the env from the state.
	const env = useSelect( ( select ) =>
		select( STORE_NAME ).getEnv()
	) ?? false;

	// Update the state.
	const { setSetting } = useDispatch( STORE_NAME );

	return (
		<ToggleControl
			checked={ env }
			className="test-api"
			label={ __( 'Use Test API', 'murmurations-node' ) }
			help={ __( 
				"Please only publish genuine profiles to the Live API. For testing use the Test API.", 
				'murmurations-node' 
			) }
			onChange={ ( value ) => setSetting( 'env', value ) }
		/>
	);
};
export default Env;
