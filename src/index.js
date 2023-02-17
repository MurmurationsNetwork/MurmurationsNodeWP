/**
 * WordPress dependencies
 */
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import SettingsScreen from './components/settings-screen';
import './admin.scss';

// Render the app to the screen.
render(
	<SettingsScreen />,
	document.getElementById('murmurations-node')
);
