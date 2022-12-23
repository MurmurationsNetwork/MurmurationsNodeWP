/**
 * WordPress dependencies
 */
//import { addFilter } from '@wordpress/hooks'
import { TextControl, Button, ResponsiveWrapper } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/media-utils'
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';
// const replaceMediaUpload = () => MediaUpload;

// addFilter(
// 	'editor.MediaUpload',
// 	'core/edit-post/components/media-upload/replace-media-upload',
// 	replaceMediaUpload
// );

const Image = () => {
	// Get the name from the state.
	const image = useSelect((select) => select(STORE_NAME).getImage());
	//const id = useSelect((select) => select(STORE_NAME).getImageID()) ? useSelect((select) => select(STORE_NAME).getImageID()) : 12;
	
	// Update the state.
	const { setImage, setImageID, setSetting } =
		useDispatch(STORE_NAME);

	// const media = useSelect(
	// 	(select) => {
	// 		//console.log( 'useSelect' )
	// 		// let meida = select('core').getMedia(id);
	// 		// console.table( meida )
	// 		console.table( id )
	// 		return id;// ? select('core').getMedia(id) : 12;
	// 	},
	// 	//[id]
	// );
	// const onSelectMedia = (media) => {
	// 	props.setAttributes({
	// 		mediaId: media.id,
	// 		mediaUrl: media.url
	// 	});
	// }

	// const onSelectMedia = (selectedMedia) => {
	// 	console.log('onSelectMedia: ' + selectedMedia)
	// 	console.table( selectedMedia )
	// 	//onSelect(selectedMedia.id);
	// 	// setSetting('image', {
	// 	// 			mediaId: selectedMedia.id,
	// 	// 			mediaUrl: selectedMedia.url
	// 	// 		});
	// 	setSetting('image', selectedMedia.url)
	// 	//setSetting('image_id', selectedMedia.id)
	// };
	

    //change component
	return (
        <TextControl
            label={__('Image', 'murmurations-node')}
            value={image}
            onChange={(value) => setSetting('image', value)}
        />
		//<MediaUploadCheck>
			// <MediaUpload
			// 	onSelect={onSelectMedia}
			// 	// onSelect={ ( media ) =>
			// 	// 	console.log( 'selected ' + media.length )
			// 	// }
			// 	allowedTypes={['image']}
			// 	value={id}
			// 	render={({ open }) => (
			// 		<Button onClick={open} variant="secondary">
			// 			{id == 0 && __('Choose an image', 'murmurations-node')}
			// 			{media != undefined && (
			// 				<ResponsiveWrapper 
			// 					naturalWidth={media.media_details.width} 
			// 					naturalHeight={media.media_details.height}
			// 				>
			// 					<img src={media.source_url} alt={media.alt} />
			// 				</ResponsiveWrapper>
			// 			)}
			// 		</Button>
			// 	)}
			//>
		//</MediaUploadCheck>
	);
};
export default Image;
