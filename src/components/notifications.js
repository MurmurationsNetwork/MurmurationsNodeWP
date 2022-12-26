import { store as noticesStore } from '@wordpress/notices';
import { Button, Panel, PanelBody, PanelRow, SearchControl, Spinner, SnackbarList } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';

const Notifications = () => {
	const notices = useSelect(
		( select ) => select( noticesStore ).getNotices(),
		[]
	);
	const { removeNotice } = useDispatch( noticesStore );
	const snackbarNotices = notices.filter( ({ type }) => type === 'snackbar' );
	
	return (
		<SnackbarList
			notices={ snackbarNotices }
			className="components-editor-notices__snackbar"
			onRemove={ removeNotice }
		/>
	);
}

export default Notifications;
