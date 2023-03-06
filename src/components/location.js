/**
 * WordPress dependencies
 */
import {
	TextControl,
	PanelRow,
	Button,
	PanelBody,
	SelectControl,
	RadioControl,
	SearchControl,
	Dashicon,
	Spinner,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';
import apiFetch from '@wordpress/api-fetch';
import { useRef, forwardRef, useState } from '@wordpress/element';

const Location = () => {
	// Get data from the db.
	const location = useSelect( ( select ) =>
		select( STORE_NAME ).getLocation()
	);
	const locality = useSelect( ( select ) =>
		select( STORE_NAME ).getLocality()
	);
	const region = useSelect( ( select ) => select( STORE_NAME ).getRegion() );
	const country_name = useSelect( ( select ) =>
		select( STORE_NAME ).getCountryName()
	);
	const geolocation =
		useSelect( ( select ) => select( STORE_NAME ).getGeoLocation() ) ?? {};

	const [ isSearching, setIsSearching ] = useState( false );
	const locationInputRef = useRef( '' );
	const localityInputRef = useRef( '' );
	const regionInputRef = useRef( '' );
	const countryInputRef = useRef( '' );
	const latInputRef = useRef( '' );
	const lonInputRef = useRef( '' );

	// Search OpenMaps API
	const handleSearch = () => {
		setIsSearching( true );
		apiFetch( {
			path: 'murmurations/v2/find/location',
			method: 'POST',
			data: { location },
		} )
			.then( ( response ) => JSON.parse( response.body ) )
			.then( ( body ) => {
				setIsSearching( false );
				// TODO add some kind of select list
				// Use first result
				if ( ! body.length > 0 ) {
					console.log( 'no results found' );
				}
				let first = body[ 0 ];
				let locationArr = first.display_name.split( ', ' );

				// Populate fields
				locationInputRef.current = first.display_name;
				countryInputRef.current = locationArr.pop();
				regionInputRef.current = locationArr.pop();
				localityInputRef.current = locationArr.join( ', ' ).toString();
				latInputRef.current = first.lat;
				lonInputRef.current = first.lon;

				setSetting( 'location', locationInputRef.current );
				setSetting( 'locality', localityInputRef.current );
				setSetting( 'region', regionInputRef.current );
				setSetting( 'country_name', countryInputRef.current );
				handleChange( 'lat', latInputRef.current );
				handleChange( 'lon', lonInputRef.current );

				locationInputRef.current.focus();
			} );
	};

	// Update the state.
	const { setSetting } = useDispatch( STORE_NAME );

	const handleChange = ( key, value ) => {
		const newGeolocation = geolocation;
		newGeolocation[ key ] = value;
		setSetting( 'geolocation', newGeolocation );
	};

	return (
		<PanelBody className={ 'p-0' }>
			<PanelRow className="justify-inherit mt-10">
				<SearchControl
					label={ __( 'Location', 'murmurations-node' ) }
					hideLabelFromVision={ false }
					ref={ locationInputRef }
					value={ location }
					onChange={ ( value ) => setSetting( 'location', value ) }
					onKeyPress={ ( event ) => {
						if ( event.key === 'Enter' ) {
							handleSearch();
						}
					} }
					help={ __(
						'Lookup your location to fill in the values below.',
						'murmurations-node'
					) }
					className={ 'murmurations-search-field' }
				/>
				<Button
					variant="primary"
					icon={ 'search' }
					onClick={ handleSearch }
					className={ 'location-search' }
					disabled={ isSearching }
				>
					{ isSearching ? (
						<>
							{ __( 'Searching...', 'murmurations-node' ) }
							<Spinner />
						</>
					) : (
						__( 'Search', 'murmurations-node' )
					) }
				</Button>
			</PanelRow>
			<PanelRow className="align-start gap-5">
				<TextControl
					label={ __( 'Locality', 'murmurations-node' ) }
					ref={ localityInputRef }
					value={ locality ?? '' }
					onChange={ ( value ) => setSetting( 'locality', value ) }
					help={ __(
						'The locality (city, town, village, etc.) where the entity is located',
						'murmurations-node'
					) }
				/>
				<TextControl
					label={ __( 'Region', 'murmurations-node' ) }
					ref={ regionInputRef }
					value={ region ?? '' }
					onChange={ ( value ) => setSetting( 'region', value ) }
					help={ __(
						'The region (state, county, province, etc.) where the entity is located',
						'murmurations-node'
					) }
				/>
				<TextControl
					label={ __( 'Country', 'murmurations-node' ) }
					ref={ countryInputRef }
					value={ country_name ?? '' }
					onChange={ ( value ) =>
						setSetting( 'country_name', value )
					}
					help={ __(
						'The name of country where the entity is based',
						'murmurations-node'
					) }
				/>
				<TextControl
					ref={ latInputRef }
					label={ __( 'Latitude', 'murmurations-node' ) }
					value={ geolocation.lat ?? '' }
					onChange={ ( value ) => handleChange( 'lat', value ) }
					help={ __(
						'The geo-coordinates (latitude)',
						'murmurations-node'
					) }
				/>
				<TextControl
					ref={ lonInputRef }
					label={ __( 'Longitude', 'murmurations-node' ) }
					value={ geolocation.lon ?? '' }
					onChange={ ( value ) => handleChange( 'lon', value ) }
					help={ __(
						'The geo-coordinates (longitude)',
						'murmurations-node'
					) }
				/>
			</PanelRow>
		</PanelBody>
	);
};
export default Location;
