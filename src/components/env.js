/**
 * WordPress dependencies
 */
import {
	Button,
	Panel,
	PanelBody,
	PanelRow,
	FormToggle,
	Spinner,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';

const Env = () => {
	// Get the env from the state.
	const { env } = useSelect( ( select ) =>
		select( STORE_NAME ).getEnv()
	);

	// Update the state.
	const { setSetting } = useDispatch( STORE_NAME );

	return (
		<div>
			<ToggleControl
				checked={ env }
				className="test-api"
				label={ __( 'Use Test API', 'murmurations-node' ) }
				help="Please only publish genuine profiles to the Live API. For testing use the Test API."
				onChange={ ( value ) => setSetting( 'env', value ) }
			/>
		</div>
	);
};
export default Env;
