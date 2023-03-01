/**
 * WordPress dependencies
 */
import { TextControl, PanelRow, Button, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';

const Urls = () => {
	// Get the name from the state.
	const urls = useSelect( ( select ) => select( STORE_NAME ).getUrls() );

	const { setUrlSingleLabel, setUrlSingleURL, setUrl, setToggleState, setSetting } =
		useDispatch(STORE_NAME);

	const handleAddRow = ( index, row = { name: '', url: '' } ) => {
		const newUrls = [ ...urls ]
		newUrls.push( row )
		setSetting( 'urls', newUrls )
	}

	const handleRemoveRow = ( index ) => {
		const newUrls = [ ...urls ]
		newUrls.splice( index, 1 );
		setSetting( 'urls', newUrls )
	}

	const handleChange = ( key, value, index ) => {
		const newUrls = [ ...urls ]
		newUrls[ index ][ key ] = value;
		setSetting( 'urls', newUrls )
	}

	const RepeaterRow = urls.map( ( url, index ) => {
		return(
			<PanelRow key={ index } className='gap-5'>
				<TextControl
					label={ __( 'Name', 'murmurations-node' ) }
					value={ url.name ?? '' }
					onChange={ ( value ) => handleChange( 'name', value, index ) }
					help={ __( 'The name of what this URL is for (e.g., the name of the social media provider, website, etc.)', 'murmurations-node' ) }
				/>
				<TextControl
					label={ __( 'URL', 'murmurations-node' ) }
					value={ url.url ?? '' }
					onChange={ ( value ) => handleChange( 'url', value, index ) }
					help={ __( 'The URL (starting with http:// or https://) that links to the entity or further describes the item', 'murmurations-node' ) }
				/>
				<Button
					className="url-remove mt-20 self-start"
					icon="no-alt"
					label="Remove url"
					isDestructive
					onClick={ () => handleRemoveRow( index ) }
				/>
			</PanelRow>
		);
	} );

	return (
		<PanelRow>
			<fieldset>
				<legend>URLS</legend>
				<PanelBody>
					{ RepeaterRow }
					<Button
						className="url-add"
						icon="plus-alt2"
						label="Add url"
						variant='primary'
						onClick={ () => handleAddRow( urls.length ) }
					/>
				</PanelBody>
			</fieldset>
		</PanelRow>
	)
};
export default Urls;
