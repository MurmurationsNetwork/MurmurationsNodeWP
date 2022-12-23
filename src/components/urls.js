/**
 * WordPress dependencies
 */
import { TextControl, PanelRow, Button, IconButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';

import { STORE_NAME } from '../datastore/constants';

const Urls = () => {
	// Get the name from the state.
	//const urls = useSelect((select) => select(STORE_NAME).getUrls());
	
	//TEMP
	const urlSingleLabel = useSelect((select) => select(STORE_NAME).getUrlSingleLabel());
	const urlSingleUrl = useSelect((select) => select(STORE_NAME).getUrlSingleURL());

	// Update the state.
	const { setUrlSingleLabel, setUrlSingleURL, setToggleState, setSetting } =
		useDispatch(STORE_NAME);

		// urls.map( ( url, index ) => {
		// 	return <Fragment key={ index }>
		// 		<TextControl
		// 			label={__('Name', 'murmurations-node')}
		// 			value={ urls[ index ].name }
		// 			onChange={ ( address ) => {} }
		// 		/>
		// 		<TextControl
		// 			label={__('URL', 'murmurations-node')}
		// 			className="grf__location-address"
		// 			placeholder="350 Fifth Avenue New York NY"
		// 			value={ urls[ index ].url }
		// 			onChange={ ( address ) => {} }
		// 		/>
		// 		<IconButton
		// 			className="grf__remove-location-address"
		// 			icon="no-alt"
		// 			label="Delete location"
		// 			onClick={ () => {} }
		// 		/>
		// 	</Fragment>;
		// } );
	return (
		<PanelRow>
			<fieldset>
				<legend>URLS</legend>
				<PanelRow>
					<TextControl
						label={__('Link Label', 'murmurations-node')}
						value={urlSingleLabel}
						onChange={(value) => setSetting('urlSingleLabel', value)}
					/>
					<TextControl
						label={__('Link Url', 'murmurations-node')}
						placeholder={'https://example.com'}
						value={urlSingleUrl}
						onChange={(value) => setSetting('urlSingleUrl', value)}
					/>
				</PanelRow>
				{/* <Button
					isDefault
					onClick={ () => {} }
				>
					{ __( 'Add URL' ) }
				</Button> */}
			</fieldset>
		</PanelRow>
	);
};
export default Urls;
