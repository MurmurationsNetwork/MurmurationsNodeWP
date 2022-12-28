/**
 * WordPress dependencies
 */
import { Button, Panel, PanelBody, PanelRow, FormToggle, Spinner, ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';
import { useState } from '@wordpress/element';

const Env = () => {
	// Get the env from the state.
	const env = useSelect((select) => select(STORE_NAME).getEnv());
	//const [ env, setEnv ] = useState( false );


	// Update the state.
	const { setEnv, setSetting } =
		useDispatch(STORE_NAME);

	return (
		<div>
			{/* <ToggleControl
				label={'Live'}
				checked={ env }
				onChange={ () => setEnv( ( state ) => ! state ) }
			/> */}
			<ToggleGroupControl 
				label="API Version" 
				value={env}
				onChange={(value) => setSetting('env', value)}
			>
				<ToggleGroupControlOption value="test" label="Test" />
				<ToggleGroupControlOption value="live" label="Live" />
			</ToggleGroupControl>
		</div>
	);
};
export default Env;
