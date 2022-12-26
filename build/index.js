/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/country.js":
/*!***********************************!*\
  !*** ./src/components/country.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");

/**
 * WordPress dependencies
 */




const Country = () => {
  // Get the name from the state.
  const country_name = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getCountryName());

  // Update the state.
  const {
    setCountry,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Country', 'murmurations-node'),
    value: country_name,
    onChange: value => setSetting('country_name', value)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Country);

/***/ }),

/***/ "./src/components/description.js":
/*!***************************************!*\
  !*** ./src/components/description.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");

/**
 * WordPress dependencies
 */




const Description = () => {
  // Get the name from the state.
  const description = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getDescription());

  // Update the state.
  const {
    setDescription,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Description', 'murmurations-node'),
    value: description,
    onChange: value => setSetting('description', value)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Description);

/***/ }),

/***/ "./src/components/geolocation-lat.js":
/*!*******************************************!*\
  !*** ./src/components/geolocation-lat.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");

/**
 * WordPress dependencies
 */




const GeoLocationLat = () => {
  // Get the name from the state.
  const geoLocationLat = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getGeoLocationLat());

  // Update the state.
  const {
    setGeoLocationLat,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Latitude', 'murmurations-node'),
    value: geoLocationLat,
    onChange: value => setSetting('geoLocationLat', value)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeoLocationLat);

/***/ }),

/***/ "./src/components/geolocation-lon.js":
/*!*******************************************!*\
  !*** ./src/components/geolocation-lon.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");

/**
 * WordPress dependencies
 */




const GeoLocationLon = () => {
  const geoLocationLon = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getGeoLocationLon());

  // Update the state.
  const {
    setGeoLocationLon,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Longitude', 'murmurations-node'),
    value: geoLocationLon,
    onChange: value => setSetting('geoLocationLon', value)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeoLocationLon);

/***/ }),

/***/ "./src/components/geolocation.js":
/*!***************************************!*\
  !*** ./src/components/geolocation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");

/**
 * WordPress dependencies
 */




const GeoLocation = () => {
  // Get the name from the state.
  //const { lat, lon } = useSelect((select) => select(STORE_NAME).getGeoLocation());
  const geoLocationLat = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getGeoLocationLat());
  const geoLocationLon = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getGeoLocationLon());
  //let {lat, lon} = geoLocation

  // Update the state.
  //const { setGeoLocation, setSetting } =
  const {
    setGeoLocationLat,
    setGeoLocationLon,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Latitude', 'murmurations-node'),
    value: lat,
    onChange: value => setSetting('geoLocation', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Longitude', 'murmurations-node'),
    value: lon,
    onChange: value => setSetting('geoLocation', value)
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeoLocation);

/***/ }),

/***/ "./src/components/image.js":
/*!*********************************!*\
  !*** ./src/components/image.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");

/**
 * WordPress dependencies
 */
//import { addFilter } from '@wordpress/hooks'





// const replaceMediaUpload = () => MediaUpload;

// addFilter(
// 	'editor.MediaUpload',
// 	'core/edit-post/components/media-upload/replace-media-upload',
// 	replaceMediaUpload
// );

const Image = () => {
  // Get the name from the state.
  const image = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME).getImage());
  //const id = useSelect((select) => select(STORE_NAME).getImageID()) ? useSelect((select) => select(STORE_NAME).getImageID()) : 12;

  // Update the state.
  const {
    setImage,
    setImageID,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME);

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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image', 'murmurations-node'),
    value: image,
    onChange: value => setSetting('image', value)
  })
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
  ;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ }),

/***/ "./src/components/locality.js":
/*!************************************!*\
  !*** ./src/components/locality.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");

/**
 * WordPress dependencies
 */




const Locality = () => {
  // Get the name from the state.
  const locality = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getLocality());

  // Update the state.
  const {
    setLocality,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Locality', 'murmurations-node'),
    value: locality,
    onChange: value => setSetting('locality', value)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Locality);

/***/ }),

/***/ "./src/components/location.js":
/*!************************************!*\
  !*** ./src/components/location.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _locality__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locality */ "./src/components/locality.js");
/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./region */ "./src/components/region.js");
/* harmony import */ var _country__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./country */ "./src/components/country.js");
/* harmony import */ var _geolocation_lat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./geolocation-lat */ "./src/components/geolocation-lat.js");
/* harmony import */ var _geolocation_lon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./geolocation-lon */ "./src/components/geolocation-lon.js");

/**
 * WordPress dependencies
 */









//import GeoLocation from './geolocation';


const Location = () => {
  // Get data from the db.
  const location = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getLocation());
  const locality = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getLocality());
  const region = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getRegion());
  const country_name = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getCountryName());
  const lat = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getGeoLocationLat());
  const lon = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getGeoLocationLon());
  //const { lat, lon } = useSelect((select) => select(STORE_NAME).getGeoLocation());

  const locationInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const localityInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const regionInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const countryInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // const geoLocationLatInputRef = useRef(null);
  const latInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const lonInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Update the state.
  const {
    setLocation,
    setLocality,
    setRegion,
    setCountry,
    setGeoLocationLat,
    setGeoLocationLon,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, "Search"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location', 'murmurations-node'),
    ref: locationInputRef,
    value: location,
    onChange: value => setSetting('location', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary"
    //isSmall={true}
    //style={{marginTop: '1rem'}}
    ,
    onClick: () => {
      // Search OpenMaps API
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
        path: 'murmurations/v2/find/location',
        method: 'POST',
        data: {
          location
        }
      }).then(response => JSON.parse(response.body)).then(body => {
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
        setSetting('location', locationInputRef.current);
        setSetting('locality', localityInputRef.current);
        setSetting('region', regionInputRef.current);
        setSetting('country_name', countryInputRef.current);
        //setSetting('geoLocationLat', geoLocationLatInputRef.current)
        setSetting('lat', latInputRef.current);
        setSetting('lon', lonInputRef.current);
        locationInputRef.current.focus();
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Search', 'murmurations-node'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, "(Hidden?)"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_locality__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: localityInputRef,
    value: locality,
    onChange: value => setSetting('locality', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_region__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: regionInputRef,
    value: region,
    onChange: value => setSetting('region', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_country__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: countryInputRef,
    value: country_name,
    onChange: value => setSetting('country_name', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_geolocation_lat__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ref: latInputRef,
    value: lat,
    onChange: value => setSetting('lat', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_geolocation_lon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    ref: lonInputRef,
    value: lon,
    onChange: value => setSetting('lon', value)
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Location);

/***/ }),

/***/ "./src/components/mission.js":
/*!***********************************!*\
  !*** ./src/components/mission.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");

/**
 * WordPress dependencies
 */




const Mission = () => {
  // Get the name from the state.
  const mission = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getMission());

  // Update the state.
  const {
    setMission,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mission', 'murmurations-node'),
    value: mission,
    onChange: value => setSetting('mission', value)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mission);

/***/ }),

/***/ "./src/components/name.js":
/*!********************************!*\
  !*** ./src/components/name.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");

/**
 * WordPress dependencies
 */




const Name = () => {
  // Get the name from the state.
  const name = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getName());

  // Update the state.
  const {
    setName,
    setToggleState,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'murmurations-node'),
    value: name,
    onChange: value => setSetting('name', value)
    //onChange={(value) => setName(value)}
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Name);

/***/ }),

/***/ "./src/components/notifications.js":
/*!*****************************************!*\
  !*** ./src/components/notifications.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);




const Notifications = () => {
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__.store).getNotices(), []);
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_1__.store);
  const snackbarNotices = notices.filter(_ref => {
    let {
      type
    } = _ref;
    return type === 'snackbar';
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SnackbarList, {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: removeNotice
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notifications);

/***/ }),

/***/ "./src/components/primary-url.js":
/*!***************************************!*\
  !*** ./src/components/primary-url.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");

/**
 * WordPress dependencies
 */




const PrimaryUrl = () => {
  // Get the name from the state.
  const primaryUrl = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getPrimaryUrl());

  // Update the state.
  const {
    setPrimaryUrl,
    setToggleState,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Primary URL', 'murmurations-node'),
    value: primaryUrl,
    onChange: value => setSetting('primary_url', value)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrimaryUrl);

/***/ }),

/***/ "./src/components/region.js":
/*!**********************************!*\
  !*** ./src/components/region.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");

/**
 * WordPress dependencies
 */




const Region = () => {
  // Get the name from the state.
  const region = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getRegion());

  // Update the state.
  const {
    setRegion,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Region', 'murmurations-node'),
    value: region,
    onChange: value => setSetting('region', value)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Region);

/***/ }),

/***/ "./src/components/rss.js":
/*!*******************************!*\
  !*** ./src/components/rss.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");

/**
 * WordPress dependencies
 */




const Rss = () => {
  // Get the name from the state.
  const rss = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getRSS());

  // Update the state.
  const {
    setRss,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);

  //change component
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('RSS', 'murmurations-node'),
    value: rss,
    onChange: value => setSetting('rss', value)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rss);

/***/ }),

/***/ "./src/components/settings-screen.js":
/*!*******************************************!*\
  !*** ./src/components/settings-screen.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");
/* harmony import */ var _datastore_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../datastore/index */ "./src/datastore/index.js");
/* harmony import */ var _name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./name */ "./src/components/name.js");
/* harmony import */ var _primary_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./primary-url */ "./src/components/primary-url.js");
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./urls */ "./src/components/urls.js");
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./description */ "./src/components/description.js");
/* harmony import */ var _mission__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mission */ "./src/components/mission.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./location */ "./src/components/location.js");
/* harmony import */ var _locality__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./locality */ "./src/components/locality.js");
/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./region */ "./src/components/region.js");
/* harmony import */ var _country__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./country */ "./src/components/country.js");
/* harmony import */ var _geolocation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./geolocation */ "./src/components/geolocation.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./image */ "./src/components/image.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tags */ "./src/components/tags.js");
/* harmony import */ var _rss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rss */ "./src/components/rss.js");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notifications */ "./src/components/notifications.js");

/**
 * WordPress dependencies
 */





 // do I need this?


/**
 * Internal dependencies
 */















{/* 
 SET_RSS, */}
const SettingsScreen = () => {
  const {
    saveEntityRecord,
    getLastEntitySaveError,
    hasFinishedResolution,
    isSavingEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)('core');
  const [isRequesting, setIsRequesting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isTesting, setIsTesting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isValidating, setIsValidating] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isGettingStatus, setIsGettingStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store);

  // Gets all settings from the store.
  const {
    settingsFromState,
    hasResolved
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    return {
      settingsFromState: select(_datastore_constants__WEBPACK_IMPORTED_MODULE_7__.STORE_NAME).getSettings(),
      hasResolved: select(_datastore_constants__WEBPACK_IMPORTED_MODULE_7__.STORE_NAME).hasFinishedResolution('getSettings')
    };
  });
  const handleSave = async () => {
    setIsRequesting(true);
    const success = await saveEntityRecord('root', 'site', {
      'murmurations-node_data': settingsFromState
    });
    if (success) {
      createSuccessNotice("The settings were saved!", {
        type: 'snackbar'
      });
      setIsRequesting(false);
    } else {
      const lastError = getLastEntitySaveError('root', 'site', {
        'murmurations-node_data': settingsFromState
      });
      const message = (lastError?.message || 'There was an error.') + ' Please refresh the page and try again.';
      createErrorNotice(message, {
        type: 'snackbar'
      });
      setIsRequesting(false);
    }
  };
  const handleValidate = async () => {
    setIsValidating(true);
    const status = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: '/murmurations/v2/index/validate'
    }).then(posts => {
      console.log(posts);
      return posts;
    });
    if (!status.errors) {
      createSuccessNotice(status.meta.message, {
        type: 'snackbar'
      });
    } else {
      console.log(status.errors);
      status.errors.forEach(error => {
        createErrorNotice(error.detail, {
          type: 'snackbar'
        });
      });
    }
    setIsValidating(false);
  };
  const handlePublish = async () => {
    setIsTesting(true);
    const status = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: '/murmurations/v2/index/nodes_sync'
    }).then(posts => {
      console.log(posts);
      return posts;
    });
    if (!status.errors) {
      let responseMessage = `status: ${status.data.status} \n node_id: ${status.data.node_id} \n profile_url: ${status.data.profile_url} \n last_updated: ${status.data.last_updated}`;
      createSuccessNotice(responseMessage, {
        type: 'snackbar'
      });
      setIsTesting(false);
    } else {
      console.log(status.errors);
      status.errors.forEach(error => {
        let errorMessage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, error.status), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, error.status)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, error.detail));
        createErrorNotice(error.detail, {
          type: 'snackbar'
        });
      });
      setIsTesting(false);
    }
  };
  const handleStatus = async () => {
    setIsGettingStatus(true);
    const status = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: '/murmurations/v2/index/node_status'
    }).then(posts => {
      console.log(posts);
      return posts;
    });
    if (status.data) {
      let responseMessage = `status: ${status.data.status} \n node_id: ${status.data.node_id} \n profile_url: ${status.data.profile_url} \n last_updated: ${status.data.last_updated}`;
      createSuccessNotice(responseMessage, {
        type: 'snackbar'
      });
    } else {
      console.log(status);
      createErrorNotice(status, {
        type: 'snackbar'
      });
    }
    setIsGettingStatus(false);
  };
  if (!hasResolved) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
    header: "Murmurations Node Settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_name__WEBPACK_IMPORTED_MODULE_9__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_primary_url__WEBPACK_IMPORTED_MODULE_10__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_urls__WEBPACK_IMPORTED_MODULE_11__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_description__WEBPACK_IMPORTED_MODULE_12__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_mission__WEBPACK_IMPORTED_MODULE_13__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_location__WEBPACK_IMPORTED_MODULE_14__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_19__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tags__WEBPACK_IMPORTED_MODULE_20__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_rss__WEBPACK_IMPORTED_MODULE_21__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    onClick: handleSave,
    disabled: isRequesting
  }, isRequesting ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saving...', 'murmurations-node'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null)) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save', 'murmurations-node')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "secondary",
    onClick: handleValidate,
    disabled: isValidating
  }, isValidating ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Validating...', 'murmurations-node'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null)) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Validate', 'murmurations-node')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    onClick: handlePublish,
    disabled: isTesting
  }, isTesting ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Publishing...', 'murmurations-node'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null)) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Publish', 'murmurations-node')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "secondary",
    onClick: handleStatus,
    disabled: isGettingStatus
  }, isGettingStatus ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Getting status...', 'murmurations-node'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null)) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Get status', 'murmurations-node')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_notifications__WEBPACK_IMPORTED_MODULE_22__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsScreen);

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

/***/ }),

/***/ "./src/components/tags.js":
/*!********************************!*\
  !*** ./src/components/tags.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");

/**
 * WordPress dependencies
 */




const Tags = () => {
  // Get the name from the state.
  const tags = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getTags());

  // Update the state.
  const {
    setTags,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);

  //change component
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tags', 'murmurations-node'),
    value: tags,
    onChange: value => setSetting('tags', value)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);

/***/ }),

/***/ "./src/components/urls.js":
/*!********************************!*\
  !*** ./src/components/urls.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _datastore_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datastore/constants */ "./src/datastore/constants.js");

/**
 * WordPress dependencies
 */




const Urls = () => {
  // Get the name from the state.
  //const urls = useSelect((select) => select(STORE_NAME).getUrls());

  //TEMP
  const urlSingleLabel = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getUrlSingleLabel());
  const urlSingleUrl = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getUrlSingleURL());

  // Update the state.
  const {
    setUrlSingleLabel,
    setUrlSingleURL,
    setToggleState,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);

  // urls.map( ( url, index ) => {
  // 	return <Fragment key={ index }>
  // 		<TextControl
  // 			label={__('Name', 'murmurations-node')}
  // 			value={ urls[ index ].name }
  // 			onChange={ ( address ) => {} }
  // 		/>
  // 		<TextControl
  // 			label={__('URL', 'murmurations-node')}
  // 			className="grf__location-address"
  // 			placeholder="350 Fifth Avenue New York NY"
  // 			value={ urls[ index ].url }
  // 			onChange={ ( address ) => {} }
  // 		/>
  // 		<IconButton
  // 			className="grf__remove-location-address"
  // 			icon="no-alt"
  // 			label="Delete location"
  // 			onClick={ () => {} }
  // 		/>
  // 	</Fragment>;
  // } );
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, "URLS"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Label', 'murmurations-node'),
    value: urlSingleLabel,
    onChange: value => setSetting('urlSingleLabel', value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Url', 'murmurations-node'),
    placeholder: 'https://example.com',
    value: urlSingleUrl,
    onChange: value => setSetting('urlSingleUrl', value)
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Urls);

/***/ }),

/***/ "./src/datastore/constants.js":
/*!************************************!*\
  !*** ./src/datastore/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_STATE": () => (/* binding */ DEFAULT_STATE),
/* harmony export */   "FETCH_SETTINGS": () => (/* binding */ FETCH_SETTINGS),
/* harmony export */   "SET_COUNTRY_NAME": () => (/* binding */ SET_COUNTRY_NAME),
/* harmony export */   "SET_DESCRIPTION": () => (/* binding */ SET_DESCRIPTION),
/* harmony export */   "SET_GEOLOCATION": () => (/* binding */ SET_GEOLOCATION),
/* harmony export */   "SET_GEOLOCATIONLAT": () => (/* binding */ SET_GEOLOCATIONLAT),
/* harmony export */   "SET_GEOLOCATIONLON": () => (/* binding */ SET_GEOLOCATIONLON),
/* harmony export */   "SET_IMAGE": () => (/* binding */ SET_IMAGE),
/* harmony export */   "SET_IMAGE_ID": () => (/* binding */ SET_IMAGE_ID),
/* harmony export */   "SET_LOCALITY": () => (/* binding */ SET_LOCALITY),
/* harmony export */   "SET_LOCATION": () => (/* binding */ SET_LOCATION),
/* harmony export */   "SET_MISSION": () => (/* binding */ SET_MISSION),
/* harmony export */   "SET_NAME": () => (/* binding */ SET_NAME),
/* harmony export */   "SET_PRIMARY_URL": () => (/* binding */ SET_PRIMARY_URL),
/* harmony export */   "SET_REGION": () => (/* binding */ SET_REGION),
/* harmony export */   "SET_RSS": () => (/* binding */ SET_RSS),
/* harmony export */   "SET_SETTING": () => (/* binding */ SET_SETTING),
/* harmony export */   "SET_TAGS": () => (/* binding */ SET_TAGS),
/* harmony export */   "SET_URLS": () => (/* binding */ SET_URLS),
/* harmony export */   "SET_URLSINGLE_LABEL": () => (/* binding */ SET_URLSINGLE_LABEL),
/* harmony export */   "SET_URLSINGLE_URL": () => (/* binding */ SET_URLSINGLE_URL),
/* harmony export */   "SET_USER_PREFERENCES": () => (/* binding */ SET_USER_PREFERENCES),
/* harmony export */   "STATE_FROM_DATABASE": () => (/* binding */ STATE_FROM_DATABASE),
/* harmony export */   "STORE_NAME": () => (/* binding */ STORE_NAME)
/* harmony export */ });
// Constants
const STORE_NAME = 'murmurations-node';
const DEFAULT_STATE = {};
//
const SET_NAME = 'SET_NAME';
const SET_PRIMARY_URL = 'SET_PRIMARY_URL';
const SET_URLS = 'SET_URLS';
const SET_URLSINGLE_URL = 'SET_URLSINGLE_URL';
const SET_URLSINGLE_LABEL = 'SET_URLSINGLE_LABEL';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const SET_MISSION = 'SET_MISSION';
const SET_LOCATION = 'SET_LOCATION';
const SET_LOCALITY = 'SET_LOCALITY';
const SET_REGION = 'SET_REGION';
const SET_COUNTRY_NAME = 'SET_COUNTRY_NAME';
const SET_GEOLOCATION = 'SET_GEOLOCATION';
const SET_GEOLOCATIONLAT = 'SET_GEOLOCATIONLAT';
const SET_GEOLOCATIONLON = 'SET_GEOLOCATIONLON';
const SET_IMAGE = 'SET_IMAGE';
const SET_IMAGE_ID = 'SET_IMAGE_ID';
const SET_TAGS = 'SET_TAGS';
const SET_RSS = 'SET_RSS';
//
const STATE_FROM_DATABASE = 'STATE_FROM_DATABASE';
const FETCH_SETTINGS = 'FETCH_SETTINGS';
const SET_SETTING = 'SET_SETTING';
const SET_USER_PREFERENCES = 'SET_USER_PREFERENCES';

/***/ }),

/***/ "./src/datastore/index.js":
/*!********************************!*\
  !*** ./src/datastore/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/datastore/constants.js");
/**
 * WordPress dependencies
 */




// Define our actions
const actions = {
  initSettings(settings) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.STATE_FROM_DATABASE,
      payload: {
        ...settings
      }
    };
  },
  fetchSettings() {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.FETCH_SETTINGS,
      payload: {}
    };
  },
  setName(name) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_NAME,
      payload: {
        name
      }
    };
  },
  setPrimaryUrl(primary_url) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_PRIMARY_URL,
      payload: {
        primary_url
      }
    };
  },
  setUrls(urls) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_URLS,
      payload: {
        urls
      }
    };
  },
  setUrlSingleLabel(name) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_URLSINGLE_LABEL,
      payload: {
        name
      }
    };
  },
  setUrlSingleURL(url) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_URLSINGLE_URL,
      payload: {
        url
      }
    };
  },
  setDescription(description) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_DESCRIPTION,
      payload: {
        description
      }
    };
  },
  setMission(mission) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_MISSION,
      payload: {
        mission
      }
    };
  },
  setLocation(location) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_LOCATION,
      payload: {
        location
      }
    };
  },
  setLocality(locality) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_LOCALITY,
      payload: {
        locality
      }
    };
  },
  setRegion(region) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_REGION,
      payload: {
        region
      }
    };
  },
  setCountryName(country_name) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_COUNTRY_NAME,
      payload: {
        country_name
      }
    };
  },
  setGeoLocation(lat, lon) {
    //how to set object
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_GEOLOCATION,
      payload: {
        geolocation: {
          lat,
          lon
        }
      }
    };
  },
  setGeoLocationLat(lat) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_GEOLOCATIONLAT,
      payload: {
        lat
      }
    };
  },
  setGeoLocationLon(lon) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_GEOLOCATIONLON,
      payload: {
        lon
      }
    };
  },
  setImage(image) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_IMAGE,
      payload: {
        image
      }
    };
  },
  setImageID(image_id) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_IMAGE,
      payload: {
        image_id
      }
    };
  },
  setTags(tags) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_TAGS,
      payload: {
        tags
      }
    };
  },
  setRSS(rss) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_RSS,
      payload: {
        rss
      }
    };
  },
  setUserPreferences(userPreferences) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_USER_PREFERENCES,
      payload: {
        userPreferences
      }
    };
  },
  setSetting(setting, value) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_SETTING,
      payload: {
        setting,
        value
      }
    };
  }
  // setToggleState(section) {
  // 	return function ({ select, dispatch }) {
  // 		const currentValues = select.getUserPreferences();
  // 		const sectionValue = currentValues[section];
  // 		dispatch.setUserPreferences({
  // 			...currentValues,
  // 			[section]: !sectionValue,
  // 		});
  // 	};
  // },
};

// Define the reducer
function reducer() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_STATE;
  let {
    type,
    payload
  } = arguments.length > 1 ? arguments[1] : undefined;
  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_2__.STATE_FROM_DATABASE:
      return {
        ...state,
        ...payload
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_SETTING:
      const {
        setting,
        value
      } = payload;
      return {
        ...state,
        [setting]: value
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_NAME:
      const {
        name
      } = payload;
      return {
        ...state,
        name
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_PRIMARY_URL:
      const {
        primary_url
      } = payload;
      return {
        ...state,
        primary_url
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_URLS:
      const {
        urls
      } = payload;
      return {
        ...state,
        urls
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_URLSINGLE_LABEL:
      const {
        urlSingleLabel
      } = payload;
      return {
        ...state,
        urlSingleLabel
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_URLSINGLE_URL:
      const {
        urlSingleURL
      } = payload;
      return {
        ...state,
        urlSingleURL
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_DESCRIPTION:
      const {
        description
      } = payload;
      return {
        ...state,
        description
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_MISSION:
      const {
        mission
      } = payload;
      return {
        ...state,
        mission
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_LOCATION:
      const {
        location
      } = payload;
      return {
        ...state,
        location
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_LOCALITY:
      const {
        locality
      } = payload;
      return {
        ...state,
        locality
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_REGION:
      const {
        region
      } = payload;
      return {
        ...state,
        region
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_COUNTRY_NAME:
      const {
        country_name
      } = payload;
      return {
        ...state,
        country_name
      };
    // case SET_GEOLOCATION:
    // 	const { lat, lon } = payload; // { geolocation }
    // 	return {
    // 		...state,
    // 		geolocation: {
    // 			lat,
    // 			lon
    // 		},
    // 	};
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_GEOLOCATIONLAT:
      const {
        lat
      } = payload;
      return {
        ...state,
        lat
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_GEOLOCATIONLON:
      const {
        lon
      } = payload;
      return {
        ...state,
        lon
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_IMAGE:
      const {
        image
      } = payload;
      return {
        ...state,
        image
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_IMAGE_ID:
      const {
        image_id
      } = payload;
      return {
        ...state,
        image_id
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_TAGS:
      const {
        tags
      } = payload;
      return {
        ...state,
        tags
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_RSS:
      const {
        rss
      } = payload;
      return {
        ...state,
        rss
      };
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_USER_PREFERENCES:
      const {
        userPreferences
      } = payload;
      if (userPreferences) {
        window.localStorage.setItem('murmurations-node-user-preferences', JSON.stringify(userPreferences));
      }
      return {
        ...state,
        userPreferences
      };
  }
  return state;
}

// Define some selectors
const selectors = {
  getName(state) {
    return state.name;
  },
  getPrimaryUrl(state) {
    return state.primary_url;
  },
  getUrls(state) {
    return state.urls;
  },
  getUrlSingleLabel(state) {
    return state.urlSingleLabel;
  },
  getUrlSingleURL(state) {
    return state.urlSingleUrl;
  },
  getDescription(state) {
    return state.description;
  },
  getMission(state) {
    return state.mission;
  },
  getLocation(state) {
    return state.location;
  },
  getLocality(state) {
    return state.locality;
  },
  getRegion(state) {
    return state.region;
  },
  getCountryName(state) {
    return state.country_name;
  },
  getGeoLocation(state) {
    return state.geolocation;
  },
  getGeoLocationLat(state) {
    return state.lat;
  },
  getGeoLocationLon(state) {
    return state.lon;
  },
  getImage(state) {
    return state.image;
  },
  getImageID(state) {
    return state.image_id;
  },
  getTags(state) {
    return state.tags;
  },
  getRSS(state) {
    return state.rss;
  },
  getSettings(state) {
    const {
      ...settings
    } = state;
    return settings;
  },
  getUserPreferences(state) {
    return state.userPreferences;
  }
};
const resolvers = {
  getSettings() {
    return async _ref => {
      let {
        dispatch
      } = _ref;
      const settings = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: '/wp/v2/settings'
      });
      dispatch.initSettings(settings['murmurations-node_data']);
    };
  },
  getUserPreferences() {
    return _ref2 => {
      let {
        dispatch
      } = _ref2;
      const userPreferences = window.localStorage.getItem('murmurations-node-user-preferences') || _constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_STATE.userPreferences;
      dispatch.setUserPreferences(JSON.parse(userPreferences));
    };
  }
};

// Define and register the store.
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME, {
  reducer,
  actions,
  selectors,
  resolvers
  // __experimentalUseThunks: true,
});

(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.register)(store);

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/media-utils":
/*!************************************!*\
  !*** external ["wp","mediaUtils"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["mediaUtils"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["notices"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_settings_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/settings-screen */ "./src/components/settings-screen.js");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


// Render the app to the screen.
(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_settings_screen__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById('murmurations-node'));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map