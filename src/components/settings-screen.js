/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Button, Panel, PanelBody, PanelRow } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data'; // do I need this?
/**
 * Internal dependencies
 */
import '../datastore/index';
import Name from './name';
import PrimaryUrl from './primary-url';
import Urls from './urls';
import Description from './description';
import Mission from './mission';
import Location from './location';
import Locality from './locality';
import Region from './region';
import Country from './country';
import GeoLocation from './geolocation';
import Image from './image';
import Tags from './tags';
import Rss from './rss';

{/* 
	SET_RSS, */}

import { STORE_NAME } from '../datastore/constants';

const SettingsScreen = () => {
	const { saveEntityRecord } = useDispatch('core');

	// Gets all settings from the store.
	const settingsFromState = useSelect((select) =>
		select(STORE_NAME).getSettings()
	);

	// TODO add spinner component
	if (!settingsFromState) {
		return 'LOADING';
	}

	return (
		<div className="wrap">
			<Panel header="Murmurations Node Settings">
				<PanelBody>
					<Name />
					<PrimaryUrl />
					<Urls />
					<Description />
					<Mission />
					<Location />
					<Image />
					<Tags />
					<Rss />
					<Button
						variant="primary"
						onClick={() => {
							new Promise((resolve, reject) => {
								resolve("ok");
								saveEntityRecord('root', 'site', {
									'murmurations-node_data':
										settingsFromState,
								}, true )
							  }).then((result) => {
								apiFetch( { path: '/murmurations/v2/index/nodes_sync' } ).then( ( posts ) => {
									console.log( posts );
								} )
							  }).catch((error) => {
							  	console.error(error)
							  });
							  
								// try {
								// 	saveEntityRecord('root', 'site', {
								// 		'murmurations-node_data':
								// 			settingsFromState,
								// 	}, true )
								// } catch (error) {
								// 	console.error(error);
								// 	// expected output: ReferenceError: nonExistentFunction is not defined
								// 	// Note - error messages will vary depending on browser
								// } finally {
								// 	apiFetch( { path: '/murmurations/v2/index/nodes' } ).then( ( posts ) => {
								// 		console.log( posts );
								// 	} )
								// }
							
							
							// Validate
							// apiFetch( { path: '/murmurations/v2/index/validate' } ).then( ( posts ) => {
							// 	console.log( posts );
							// } );
							
							// Publish to index /nodes-sync
							// apiFetch( { path: '/murmurations/v2/index/nodes_sync' } ).then( ( posts ) => {
							// 	console.log( posts );
							// } );
							
							// Publish to index /nodes
							// apiFetch( { path: '/murmurations/v2/index/nodes' } ).then( ( posts ) => {
							// 	console.log( posts );
							// } );

							// On success, if node_id is returned, change button text from Publish to Update 
						}}
					>
						{__('SAVE', 'murmurations-node')}
					</Button>
				</PanelBody>
			</Panel>
		</div>
	);
};

export default SettingsScreen;
