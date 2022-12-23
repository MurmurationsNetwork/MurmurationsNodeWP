/**
 * WordPress dependencies
 */
import { TextControl, PanelRow, Button, PanelBody, SelectControl, RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../datastore/constants';
import apiFetch from '@wordpress/api-fetch';
import { useRef } from '@wordpress/element';

import Locality from './locality';
import Region from './region';
import Country from './country';
//import GeoLocation from './geolocation';
import GeoLocationLat from './geolocation-lat';
import GeoLocationLon from './geolocation-lon';

const Location = () => {
	// Get data from the db.
	const location = useSelect((select) => select(STORE_NAME).getLocation());
	const locality = useSelect((select) => select(STORE_NAME).getLocality());
	const region = useSelect((select) => select(STORE_NAME).getRegion());
	const country_name = useSelect((select) => select(STORE_NAME).getCountryName());
    const lat = useSelect((select) => select(STORE_NAME).getGeoLocationLat());
	const lon = useSelect((select) => select(STORE_NAME).getGeoLocationLon());
	//const { lat, lon } = useSelect((select) => select(STORE_NAME).getGeoLocation());

    const locationInputRef = useRef(null);
    const localityInputRef = useRef(null);
    const regionInputRef = useRef(null);
    const countryInputRef = useRef(null);
    // const geoLocationLatInputRef = useRef(null);
    const latInputRef = useRef(null);
    const lonInputRef = useRef(null);

	// Update the state.
	const { setLocation, setLocality, setRegion, setCountry, setGeoLocationLat, setGeoLocationLon, setSetting } =
		useDispatch(STORE_NAME);

	return (
        <PanelRow>
            <fieldset>
                <legend>Search</legend>
                <TextControl
                    label={__('Location', 'murmurations-node')}
                    ref={locationInputRef}
                    value={location}
                    onChange={(value) => setSetting('location', value)}
                />
                <Button
                    variant='secondary'
                    //isSmall={true}
                    //style={{marginTop: '1rem'}}
                    onClick={() => {
                        // Search OpenMaps API
                        apiFetch( { 
                            path: 'murmurations/v2/find/location',
                            method: 'POST',
                            data: { location }
                        } )
                            .then((response) => JSON.parse(response.body))
                            .then((body) => {
                                // TODO add some kind of select list
                                // Use first result
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
                                //setSetting('geoLocationLat', geoLocationLatInputRef.current)
                                setSetting('lat', latInputRef.current)
                                setSetting('lon', lonInputRef.current)
                                
                                locationInputRef.current.focus();
                            });
                    }}
                >
                    {__('Search', 'murmurations-node')}
                </Button>
            </fieldset>
            <fieldset>
                <legend>(Hidden?)</legend>
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
                        value={lat}
                        onChange={(value) => setSetting('lat', value)}
                    />
                    <GeoLocationLon
                        ref={lonInputRef}
                        value={lon}
                        onChange={(value) => setSetting('lon', value)}
                    />
                </PanelRow>
            </fieldset>
        </PanelRow>
	);
};
export default Location;
