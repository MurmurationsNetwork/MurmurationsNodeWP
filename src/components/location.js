/**
 * WordPress dependencies
 */
import { TextControl, PanelRow, Button, PanelBody, SelectControl, RadioControl, SearchControl, Dashicon, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';
import apiFetch from '@wordpress/api-fetch';
import { useRef, forwardRef, useState } from '@wordpress/element';

import Locality from './locality';
import Region from './region';
import Country from './country';
import GeoLocationLat from './geolocation-lat';
import GeoLocationLon from './geolocation-lon';

const Location = () => {
	// Get data from the db.
	const location = useSelect((select) => select(STORE_NAME).getLocation());
	const locality = useSelect((select) => select(STORE_NAME).getLocality());
	const region = useSelect((select) => select(STORE_NAME).getRegion());
	const country_name = useSelect((select) => select(STORE_NAME).getCountryName());
    const latitude = useSelect((select) => select(STORE_NAME).getGeoLocationLat());
	const longitude = useSelect((select) => select(STORE_NAME).getGeoLocationLon());
	//const { lat, lon } = useSelect((select) => select(STORE_NAME).getGeoLocation());
    const [ isSearching, setIsSearching ] = useState( false );

    const locationInputRef = useRef('');
    const localityInputRef = useRef('');
    const regionInputRef = useRef('');
    const countryInputRef = useRef('');
    // const geoLocationLatInputRef = useRef(null);
    const latInputRef = useRef('');
    const lonInputRef = useRef('');

    // Search OpenMaps API
    const handleSearch = () => {
        setIsSearching(true)
        apiFetch( { 
            path: 'murmurations/v2/find/location',
            method: 'POST',
            data: { location }
        } )
            .then((response) => JSON.parse(response.body))
            .then((body) => {
                setIsSearching(false)
                // TODO add some kind of select list
                // Use first result
                if ( !body.length > 0 ) {
                    console.log('no results found')
                }
                let first = body[0];
                let locationArr = first.display_name.split(', ');

                // Populate fields
                locationInputRef.current = first.display_name; 
                countryInputRef.current = locationArr.pop();
                regionInputRef.current = locationArr.pop();
                localityInputRef.current = locationArr.join(", ").toString();
                latInputRef.current = first.lat;
                lonInputRef.current = first.lon;
                
                setSetting('location', locationInputRef.current)
                setSetting('locality', localityInputRef.current)
                setSetting('region', regionInputRef.current)
                setSetting('country_name', countryInputRef.current)
                setSetting('latitude', latInputRef.current)
                setSetting('longitude', lonInputRef.current)
                
                //locationInputRef.current.focus();
            });
    }

	// Update the state.
	const { 
        setLocation, 
        setLocality, 
        setRegion, 
        setCountry, 
        setGeoLocationLat, 
        setGeoLocationLon, 
        setSetting 
    } = useDispatch(STORE_NAME);
	return (
        <PanelBody>
            <PanelRow>
                <SearchControl
                    label={__('Location', 'murmurations-node')}
                    hideLabelFromVision={false}
                    ref={locationInputRef}
                    value={location}
                    onChange={(value) => setSetting('location', value)}
                    onKeyPress={ (event) => { 
                        if (event.key === 'Enter' ) {
                            handleSearch()
                        } }  
                    }
                    help={ __('Lookup your location to fill in the values below.', 'murmurations-node')}
                    className={'murmurations-search-field'}
                />
                <Button 
                    variant="primary"
                    icon={'search'}
                    onClick={ handleSearch } 
                    disabled={ isSearching }
                    >
                    { isSearching ? (
                        <>
                            { __( 'Searching...', 'murmurations-node') }
                            <Spinner/>
                        </>
                    ) : __( 'Search', 'murmurations-node') }
                </Button>
            </PanelRow>
            <PanelRow>
                <Locality 
                    ref={localityInputRef}
                    value={locality}
                    onChange={(value) => setSetting('locality', value)}
                />
                <Region 
                    ref={regionInputRef}
                    value={region}
                    onChange={(value) => setSetting('region', value)}
                />
                <Country 
                    ref={countryInputRef}
                    value={country_name}
                    onChange={(value) => setSetting('country_name', value)}
                />
                <GeoLocationLat
                    ref={latInputRef}
                    value={latitude}
                    onChange={(value) => setSetting('latitude', value)}
                />
                <GeoLocationLon
                    ref={lonInputRef}
                    value={longitude}
                    onChange={(value) => setSetting('longitude', value)}
                />
            </PanelRow>
        </PanelBody>
	);
};
export default Location;
