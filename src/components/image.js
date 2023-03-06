/**
 * WordPress dependencies
 */
import { Button, PanelRow } from '@wordpress/components';
import { MediaUpload } from '@wordpress/media-utils';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

function Image() {
	const media =
		useSelect( ( select ) => select( STORE_NAME ).getImage() ) ?? '';

	const { setSetting } = useDispatch( STORE_NAME );

	const handleMedia = ( newMedia = null ) => {
		if ( newMedia === null ) {
			setSetting( 'image', '' );
		} else {
			setSetting( 'image', newMedia.url );
		}
	};

	return (
		<fieldset>
			<label className="label-fieldset">
				{ __( 'Image', 'murmurations-node' ) }
			</label>
			<PanelRow>
				{ ! media ? (
					<MediaUpload
						onSelect={ ( newMedia ) => handleMedia( newMedia ) }
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						value={ media ?? '' }
						render={ ( { open } ) => (
							<Button variant="primary" onClick={ open }>
								{ __( 'Open Media Library' ) }
							</Button>
						) }
						help={ __(
							'An image that is generally used to refer to the entity, organization, project, etc.',
							'murmurations-node'
						) }
					/>
				) : (
					<PanelRow>
						<img
							src={ media }
							height="250px"
							width="auto"
							className="image-preview"
						/>
						<Button
							className="image-remove"
							icon="no-alt"
							label="Remove image"
							isDestructive
							onClick={ () => handleMedia( null ) }
						/>
					</PanelRow>
				) }
			</PanelRow>
		</fieldset>
	);
}
export default Image;
