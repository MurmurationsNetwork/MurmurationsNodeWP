/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { Button, TextControl, ButtonGroup, ToggleControl, Panel, PanelBody, PanelRow, FormToggle, Spinner, useBaseField } from '@wordpress/components';
import { store as noticesStore } from '@wordpress/notices';
import { useDispatch, useSelect, coreDataStore } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data'; // do I need this?
import { STORE_NAME } from '../datastore/constants';
import { useState } from '@wordpress/element';
/**
 * Internal dependencies
 */
import '../datastore/index';
import Urls from './urls';
import Image from './image';
import Location from './location';
import Env from './env';
import Notifications, { createSuccessNotice, createErrorNotice } from './notifications';

const SettingsScreen = () => {
	const { saveEntityRecord, getLastEntitySaveError, hasFinishedResolution, isSavingEntityRecord } = useDispatch('core');
	const [ isRequesting, setIsRequesting ] = useState( false );
	const [ isSaving, setIsSaving ] = useState( false );
	const [ isDeleting, setIsDeleting ] = useState( false );
	const { createSuccessNotice, createErrorNotice } = useDispatch( noticesStore );
	const { setSetting } = useDispatch( STORE_NAME );
	// const env = useSelect((select) => select(STORE_NAME).getEnv());

	// Gets all settings from the store.
	const { settingsFromState, hasResolved } = useSelect(
		( select ) => {
			return {
				settingsFromState: select(STORE_NAME).getSettings(),
				hasResolved: select(STORE_NAME).hasFinishedResolution(
					'getSettings'
				),
				// lastError: select(STORE_NAME).getLastEntitySaveError(
				// 	'getSettings'
				// ),
			}
	});
	console.log( 'settingsFromState: ', settingsFromState );
	
	const {
		name,
		primary_url,
		description,
		mission,
		tags,
		rss,
		urls,
		test_last_updated,
		prod_last_updated,
		env,
	} = settingsFromState;

	if ( ! hasResolved ) {
		return <Spinner />;
	}
	
	const liveIndexExplorer = 'https://tools.murmurations.network/index-explorer?schema=organizations_schema-v1.0.0&primary_url='
	const testIndexExplorer = 'https://test-tools.murmurations.network/index-explorer?schema=organizations_schema-v1.0.0&primary_url='
	let indexable_url = primary_url;
	let index_url = indexable_url.replace(/^http(s?):\/\//i, "");
	let murmurations_index = env ? testIndexExplorer + index_url : liveIndexExplorer + index_url;

	// if ( last_updated ) {
	// 	const liveIndexExplorer = 'https://tools.murmurations.network/index-explorer?schema=organizations_schema-v1.0.0&primary_url='
	// 	const testIndexExplorer = 'https://test-tools.murmurations.network/index-explorer?schema=organizations_schema-v1.0.0&primary_url='
	// 	const index_url = primary_url.replace(/^http(s?):\/\//i, "");
	// 	let murmurations_index = env ? testIndexExplorer + index_url : liveIndexExplorer + index_url;
	// }

	let envi = env ? 'test' : 'prod';
	let last_updated = env ? test_last_updated : prod_last_updated;

	const handleField = async ( name, value ) => {
		setSetting( name, value )
		if ( 'env' === name ) {
			handleFormSave()
		}
	}

	// TODO handle DataSanitization
	// URLS, input fields, etc 
	const handleFormValidate = () => {
		if ( urls ) {
			let sanitizedUrls = urls.filter( item => item.name !== "" && item.url !== "" )
			setSetting( 'urls', sanitizedUrls )
		}
	}
	
	const handleFormSave = async ( quiet = false ) => {
		setIsRequesting(true);
		const success = await saveEntityRecord('root', 'site', {
							'murmurations-node_data':
								settingsFromState,
						} )
		if ( success ) {
			if ( ! quiet ) {
				createSuccessNotice( __("The settings were saved!", 'murmurations-node'), {
					type: 'snackbar',
				} );
			}
			console.log( success );
			setIsRequesting(false);
		} else {
			// const lastError = await getLastEntitySaveError( 'root', 'site', {
			// 						'murmurations-node_data':
			// 							settingsFromState,
			// 					} );
			const refresh = __('Please refresh the page and try again.', 'murmurations-node')
			const genericError = __('There was an error. ', 'murmurations-node')
			const message = ( lastError?.message || genericError ) + refresh
			createErrorNotice( message, {
				type: 'snackbar',
			} );
			setIsRequesting(false);
		}
	};
	
	const handleAPIValidate = async () => {
		setIsRequesting(true);
		const status = await apiFetch( { path: '/murmurations/v2/index/validate' } ).then( ( posts ) => {
			console.log( posts );
			return posts;
			} )
		if ( ! status.errors && env ) {
			createSuccessNotice( status.meta.message, {
				type: 'snackbar',
			} );
		} else {
			console.log( status.errors );
			status.errors.forEach( error => {
				createErrorNotice( error.detail, {
					type: 'snackbar',
				} );
			});
		}
		setIsRequesting(false);
	};
	
	const handleAPIPublish = async () => {
		setIsRequesting(true);
		const status = await apiFetch( { path: '/murmurations/v2/index/nodes_sync' } ).then( ( posts ) => {
			console.log( posts );
			return posts;
			} )
		if ( ! status.errors ) {
			// console.log( status.data );
			let responseMessage;// = `${status.data.status}`
			console.log( 'env: ', env );
			if ( env ) {
				responseMessage = `
					status: ${status.data.status} \n
					node_id: ${status.data.node_id} \n
					profile_url: ${status.data.profile_url} \n
					profile_hash: ${status.data.profile_hash} \n
					last_updated: ${status.data.last_updated}
					`
				// let responseMessage = `${status.data.status}`
			} else {
				console.log( 'else: ', status.data );
				responseMessage = `${status.data.status}`
			}
			await handleField( `${envi}_last_updated`, status.data.last_updated )
			// handleField( `${envi}_node_id`, status.data.node_id )
			handleFormSave()
			// handleFormSave( true )
			createSuccessNotice( responseMessage, {
				type: 'snackbar',
			} );
			setIsRequesting(false);
		} else {
			if ( env ) {
				console.log( status.errors );
			}
			status.errors.forEach( error => {
				let prefix = __('Server response: ', 'mumurations-node')
				let errorMessage = `${prefix} ${error.detail}`
				createErrorNotice( errorMessage, {
					type: 'snackbar',
				} );
			});
			setIsRequesting(false);
		}
	};

	const handleAPIStatus = async () => {
		setIsRequesting(true);
		const status = await apiFetch( { path: '/murmurations/v2/index/node_status' } ).then( ( posts ) => {
			console.log( posts );
			return posts;
			} )
		if ( status.data ) {
			let responseMessage = `
				status: ${status.data.status} \n
				node_id: ${status.data.node_id} \n
				profile_url: ${status.data.profile_url} \n
				last_updated: ${status.data.last_updated}`;
			createSuccessNotice( responseMessage, {
				type: 'snackbar',
			} );
			// handleField( 'index_dates', status.data )
		} else {
			console.log( status );
			createErrorNotice( status, {
				type: 'snackbar',
			} );
		}
		setIsRequesting( false );
	};

	const handleSaveAndPublish = async () => {
		setIsRequesting(true)
		await handleFormValidate()
		await handleFormSave()
		handleAPIValidate()
		handleAPIPublish()
		if ( env ) {
			// handleAPIStatus()
		}
		setIsRequesting(false)
	};
	
	const handleDelete = async () => {
		setIsDeleting(true)
		const status = await apiFetch( { path: '/murmurations/v2/index/node_delete' } ).then( ( posts ) => {
			return posts;
			} )
		if ( ! status.errors && status instanceof Object ) {
			let responseMessage = `${status.meta.message}`
			createSuccessNotice( responseMessage, {
				type: 'snackbar',
			} )
			if ( env ) {
				console.log( status.meta.message );
			};
			await setSetting( `${envi}_last_updated`, 0 )
			handleFormSave()
		} else {
			if ( status instanceof Object ) {
				status.errors.forEach( error => {
					console.log( error );
					let prefix = __('Server response: ', 'mumurations-node')
					let errorMessage = `${prefix} ${error.detail}`
					createErrorNotice( errorMessage, {
						type: 'snackbar',
					} );
				});
			}
			console.log( status );
			setSetting( `${envi}_last_updated`, 0 )
			handleFormSave()
		}
		setIsDeleting(false)
	};

	return (
		<div className="wrap">
			<Panel header="Murmurations settings">
				<PanelBody>
					<TextControl
						label={ __( 'Name', 'murmurations-node' ) }
						value={ name ?? '' }
						onChange={ ( value ) => handleField( 'name', value ) }
						help={ __(
							'The name of the entity, organization, project, item, etc.',
							'murmurations-node'
						) }
					/>
					<TextControl
						label={ __( 'Primary URL', 'murmurations-node' ) }
						value={ primary_url ?? '' }
						onChange={ ( value ) => handleField( 'primary_url', value ) }
						help={ __(
							'The primary URL of the entity or item (i.e., its unique website address)',
							'murmurations-node'
						) }
					/>
					<TextControl
						label={ __( 'Description', 'murmurations-node' ) }
						value={ description ?? '' }
						onChange={ ( value ) => handleField( 'description', value ) }
						help={ __(
							'A description of the item, entity, organization, project, etc.',
							'murmurations-node'
						) }
					/>
					<TextControl
						label={ __( 'Mission', 'murmurations-node' ) }
						value={ mission ?? '' }
						onChange={ ( value ) => handleField( 'mission', value ) }
						help={ __(
							'A short statement of why the entity exists and its goals.',
							'murmurations-node'
						) }
					/>
					<TextControl
						label={ __( 'Tags', 'murmurations-node' ) }
						value={ tags ?? '' }
						onChange={ ( value ) => handleField( 'tags', value ) }
						help={ __(
							'Keywords relevant to this entity and its activities or attributes.',
							'murmurations-node'
						) }
					/>
					<TextControl
						label={ __( 'RSS', 'murmurations-node' ) }
						value={ rss ?? '' }
						onChange={ ( value ) => handleField( 'rss', value ) }
						help={ __(
							"The URL for the entity's RSS feed",
							'murmurations-node'
						) }
					/>
					<Image />
					<Urls />
					<Location />
					<Env 
						onChange={ ( value ) => handleField( 'env', value ) }
					/>
					<PanelRow className='align-left'>
						<Button variant="primary" onClick={ handleSaveAndPublish } disabled={ isRequesting } >
							{ isRequesting ? (
								<>
									{ __( 'Saving & Publishing...', 'murmurations-node') }
									<Spinner/>
								</>
							) : __( 'Save & Publish', 'murmurations-node') }
						</Button>
						{/* <Button variant="primary" onClick={ handleFormSave } disabled={ isSaving } >
							{ isSaving ? (
								<>
									{ __( 'Saving...', 'murmurations-node') }
									<Spinner/>
								</>
							) : __( 'Save', 'murmurations-node') }
						</Button> */}
						{ last_updated ? 
							<>
								<Button 
									variant="secondary" 
									href={ murmurations_index } 
									icon='location-alt'
									target='_blank' 
									rel='noopener' >
										{ __( 'View site in index', 'murmurations-node') }
								</Button>
								<Button 
									isDestructive
									disabled={ isDeleting }
									icon='no'
									onClick={ handleDelete } 
									>
										{ isDeleting ? (
											<>
												{ __( 'Deleting...', 'murmurations-node') }
												<Spinner/>
											</>
										) : __( 'Remove from Index ', 'murmurations-node') }
								</Button>
							</>
							: '' }
						<Notifications></Notifications>
					</PanelRow>
				</PanelBody>
			</Panel>
		</div>
	);
};

export default SettingsScreen;
