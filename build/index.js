/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    value: description !== null && description !== void 0 ? description : '',
    onChange: value => setSetting('description', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('A description of the item, entity, organization, project, etc.', 'murmurations-node')
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Description);

/***/ }),

/***/ "./src/components/env.js":
/*!*******************************!*\
  !*** ./src/components/env.js ***!
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




const Env = () => {
  var _useSelect;
  // Get the env from the state.
  const env = (_useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getEnv())) !== null && _useSelect !== void 0 ? _useSelect : false;

  // Update the state.
  const {
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    checked: env,
    className: "test-api",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use Test API', 'murmurations-node'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Please only publish genuine profiles to the Live API. For testing use the Test API.", 'murmurations-node'),
    onChange: value => setSetting('env', value)
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Env);

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





const ALLOWED_MEDIA_TYPES = ['image'];
function Image() {
  var _useSelect;
  const media = (_useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME).getImage())) !== null && _useSelect !== void 0 ? _useSelect : '';
  const {
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME);
  const handleMedia = function () {
    let newMedia = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (newMedia === null) {
      setSetting('image', '');
    } else {
      setSetting('image', newMedia.url);
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "label-fieldset"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image', 'murmurations-node')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, !media ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: newMedia => handleMedia(newMedia),
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: media !== null && media !== void 0 ? media : '',
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "primary",
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Open Media Library'));
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('An image that is generally used to refer to the entity, organization, project, etc.', 'murmurations-node')
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: media,
    height: "250px",
    width: "auto",
    className: "image-preview"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "image-remove",
    icon: "no-alt",
    label: "Remove image",
    isDestructive: true,
    onClick: () => handleMedia(null)
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

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

/**
 * WordPress dependencies
 */






const Location = () => {
  var _useSelect, _geolocation$lat, _geolocation$lon;
  // Get data from the db.
  const location = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getLocation());
  const locality = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getLocality());
  const region = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getRegion());
  const country_name = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getCountryName());
  const geolocation = (_useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getGeoLocation())) !== null && _useSelect !== void 0 ? _useSelect : {};
  const [isSearching, setIsSearching] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const locationInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  const localityInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  const regionInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  const countryInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  const latInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  const lonInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)('');

  // Search OpenMaps API
  const handleSearch = () => {
    setIsSearching(true);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: 'murmurations/v2/find/location',
      method: 'POST',
      data: {
        location
      }
    }).then(response => JSON.parse(response.body)).then(body => {
      setIsSearching(false);
      // TODO add some kind of select list
      // Use first result
      if (!body.length > 0) {
        console.log('no results found');
      }
      let first = body[0];
      let locationArr = first.display_name.split(', ');

      // Populate fields
      locationInputRef.current = first.display_name;
      countryInputRef.current = locationArr.pop();
      regionInputRef.current = locationArr.pop();
      localityInputRef.current = locationArr.join(', ').toString();
      latInputRef.current = first.lat;
      lonInputRef.current = first.lon;
      setSetting('location', locationInputRef.current);
      setSetting('locality', localityInputRef.current);
      setSetting('region', regionInputRef.current);
      setSetting('country_name', countryInputRef.current);
      handleChange('lat', latInputRef.current);
      handleChange('lon', lonInputRef.current);
      locationInputRef.current.focus();
    });
  };

  // Update the state.
  const {
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  const handleChange = (key, value) => {
    const newGeolocation = geolocation;
    newGeolocation[key] = value;
    setSetting('geolocation', newGeolocation);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    className: 'p-0'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "justify-inherit mt-10"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SearchControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Location', 'murmurations-node'),
    hideLabelFromVision: false,
    ref: locationInputRef,
    value: location,
    onChange: value => setSetting('location', value),
    onKeyPress: event => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lookup your location to fill in the values below.', 'murmurations-node'),
    className: 'murmurations-search-field'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    icon: 'search',
    onClick: handleSearch,
    className: 'location-search',
    disabled: isSearching
  }, isSearching ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Searching...', 'murmurations-node'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Search', 'murmurations-node'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "align-start gap-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Locality', 'murmurations-node'),
    ref: localityInputRef,
    value: locality !== null && locality !== void 0 ? locality : '',
    onChange: value => setSetting('locality', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The locality (city, town, village, etc.) where the entity is located', 'murmurations-node')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Region', 'murmurations-node'),
    ref: regionInputRef,
    value: region !== null && region !== void 0 ? region : '',
    onChange: value => setSetting('region', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The region (state, county, province, etc.) where the entity is located', 'murmurations-node')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Country', 'murmurations-node'),
    ref: countryInputRef,
    value: country_name !== null && country_name !== void 0 ? country_name : '',
    onChange: value => setSetting('country_name', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The name of country where the entity is based', 'murmurations-node')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    ref: latInputRef,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Latitude', 'murmurations-node'),
    value: (_geolocation$lat = geolocation.lat) !== null && _geolocation$lat !== void 0 ? _geolocation$lat : '',
    onChange: value => handleChange('lat', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The geo-coordinates (latitude)', 'murmurations-node')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    ref: lonInputRef,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Longitude', 'murmurations-node'),
    value: (_geolocation$lon = geolocation.lon) !== null && _geolocation$lon !== void 0 ? _geolocation$lon : '',
    onChange: value => handleChange('lon', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The geo-coordinates (longitude)', 'murmurations-node')
  })));
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
    value: mission !== null && mission !== void 0 ? mission : '',
    onChange: value => setSetting('mission', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('A short statement of why the entity exists and its goals.', 'murmurations-node')
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
    value: name !== null && name !== void 0 ? name : '',
    onChange: value => setSetting('name', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The name of the entity, organization, project, item, etc.', 'murmurations-node')
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
    value: primaryUrl !== null && primaryUrl !== void 0 ? primaryUrl : '',
    onChange: value => setSetting('primary_url', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The primary URL of the entity or item (i.e., its unique website address)', 'murmurations-node')
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrimaryUrl);

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
    value: rss !== null && rss !== void 0 ? rss : '',
    onChange: value => setSetting('rss', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("The URL for the entity's RSS feed", 'murmurations-node')
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
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./image */ "./src/components/image.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tags */ "./src/components/tags.js");
/* harmony import */ var _rss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rss */ "./src/components/rss.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./env */ "./src/components/env.js");
/* harmony import */ var _notifications__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./notifications */ "./src/components/notifications.js");

/**
 * WordPress dependencies
 */





 // do I need this?


/**
 * Internal dependencies
 */












const SettingsScreen = () => {
  const {
    saveEntityRecord,
    getLastEntitySaveError,
    hasFinishedResolution,
    isSavingEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)('core');
  const [isRequesting, setIsRequesting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isPublishing, setIsPublishing] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isValidating, setIsValidating] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isWorking, setIsWorking] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isGettingStatus, setIsGettingStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store);
  const env = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_7__.STORE_NAME).getEnv());

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
      createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("The settings were saved!", 'murmurations-node'), {
        type: 'snackbar'
      });
      setIsRequesting(false);
    } else {
      const lastError = getLastEntitySaveError('root', 'site', {
        'murmurations-node_data': settingsFromState
      });
      const refresh = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please refresh the page and try again.', 'murmurations-node');
      const genericError = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('There was an error. ', 'murmurations-node');
      const message = (lastError?.message || genericError) + refresh;
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
    setIsPublishing(true);
    const status = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: '/murmurations/v2/index/nodes_sync'
    }).then(posts => {
      console.log(posts);
      return posts;
    });
    if (!status.errors) {
      if (env) {
        let responseMessage = `
					status: ${status.data.status} \n
					node_id: ${status.data.node_id} \n
					profile_url: ${status.data.profile_url} \n
					last_updated: ${status.data.last_updated}
					`;
      } else {
        let responseMessage = `${status.data.status}`;
      }
      createSuccessNotice(responseMessage, {
        type: 'snackbar'
      });
      setIsPublishing(false);
    } else {
      if (env) {
        console.log(status.errors);
      }
      status.errors.forEach(error => {
        let prefix = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Server response: ', 'mumurations-node');
        let errorMessage = `${prefix} ${error.detail}`;
        createErrorNotice(errorMessage, {
          type: 'snackbar'
        });
      });
      setIsPublishing(false);
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
      console.log(status);
      let responseMessage = `
				status: ${status.data.status} \n
				node_id: ${status.data.node_id} \n
				profile_url: ${status.data.profile_url} \n
				last_updated: ${status.data.last_updated}`;
      createSuccessNotice(responseMessage, {
        type: 'snackbar'
      });
    } else {
      createErrorNotice(status, {
        type: 'snackbar'
      });
    }
    setIsGettingStatus(false);
  };
  const handleSaveAndPublish = async () => {
    setIsWorking(true);
    handleSave();
    handleValidate();
    handlePublish();
    if (env) {
      handleStatus();
    }
    setIsWorking(false);
  };
  if (!hasResolved) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null);
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
    header: "Murmurations settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_name__WEBPACK_IMPORTED_MODULE_9__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_primary_url__WEBPACK_IMPORTED_MODULE_10__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_urls__WEBPACK_IMPORTED_MODULE_11__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_description__WEBPACK_IMPORTED_MODULE_12__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_mission__WEBPACK_IMPORTED_MODULE_13__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_15__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tags__WEBPACK_IMPORTED_MODULE_16__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_rss__WEBPACK_IMPORTED_MODULE_17__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_location__WEBPACK_IMPORTED_MODULE_14__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_env__WEBPACK_IMPORTED_MODULE_18__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    onClick: handleSaveAndPublish,
    disabled: isWorking
  }, isWorking ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Saving & Publishing...', 'murmurations-node'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null)) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Save & Publish', 'murmurations-node')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_notifications__WEBPACK_IMPORTED_MODULE_19__["default"], null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsScreen);

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
    value: tags !== null && tags !== void 0 ? tags : '',
    onChange: value => setSetting('tags', value),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Keywords relevant to this entity and its activities or attributes.', 'murmurations-node')
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
  var _useSelect;
  // Get the name from the state.
  const urls = (_useSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME).getUrls())) !== null && _useSelect !== void 0 ? _useSelect : [];
  const {
    setUrl,
    setToggleState,
    setSetting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_datastore_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME);
  const handleAddRow = function (index) {
    let row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      name: '',
      url: ''
    };
    const newUrls = [...urls];
    newUrls.push(row);
    setSetting('urls', newUrls);
  };
  const handleRemoveRow = index => {
    const newUrls = [...urls];
    newUrls.splice(index, 1);
    setSetting('urls', newUrls);
  };
  const handleChange = (key, value, index) => {
    const newUrls = [...urls];
    newUrls[index][key] = value;
    setSetting('urls', newUrls);
  };
  const RepeaterRow = urls.map((url, index) => {
    var _url$name, _url$url;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      key: index,
      className: "gap-5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Name', 'murmurations-node'),
      value: (_url$name = url.name) !== null && _url$name !== void 0 ? _url$name : '',
      onChange: value => handleChange('name', value, index),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The name of what this URL is for (e.g., the name of the social media provider, website, etc.)', 'murmurations-node')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('URL', 'murmurations-node'),
      value: (_url$url = url.url) !== null && _url$url !== void 0 ? _url$url : '',
      onChange: value => handleChange('url', value, index),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('The URL (starting with http:// or https://) that links to the entity or further describes the item', 'murmurations-node')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: "url-remove mt-20 self-start",
      icon: "no-alt",
      label: "Remove url",
      isDestructive: true,
      onClick: () => handleRemoveRow(index)
    }));
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("legend", null, "URLS"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, RepeaterRow, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "url-add",
    icon: "plus-alt2",
    label: "Add url",
    variant: "primary",
    onClick: () => handleAddRow(urls.length)
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
/* harmony export */   "SET_ENV": () => (/* binding */ SET_ENV),
/* harmony export */   "SET_GEOLOCATION": () => (/* binding */ SET_GEOLOCATION),
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
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const SET_MISSION = 'SET_MISSION';
const SET_LOCATION = 'SET_LOCATION';
const SET_LOCALITY = 'SET_LOCALITY';
const SET_REGION = 'SET_REGION';
const SET_COUNTRY_NAME = 'SET_COUNTRY_NAME';
const SET_GEOLOCATION = 'SET_GEOLOCATION';
const SET_IMAGE = 'SET_IMAGE';
const SET_IMAGE_ID = 'SET_IMAGE_ID';
const SET_TAGS = 'SET_TAGS';
const SET_RSS = 'SET_RSS';
const SET_ENV = 'SET_ENV';
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
  setGeoLocation(geolocation) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_GEOLOCATION,
      payload: {
        geolocation
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
  setEnv(env) {
    return {
      type: _constants__WEBPACK_IMPORTED_MODULE_2__.SET_ENV,
      payload: {
        env
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
        urls,
        index
      } = payload;
      return {
        ...state,
        urls: [{
          name: urls[index].name,
          url: urls[index].url
        }]
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
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_GEOLOCATION:
      const {
        geolocation
      } = payload;
      return {
        ...state,
        geolocation: {
          lat: geolocation.latitude,
          lon: geolocation.longitude
        }
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
    case _constants__WEBPACK_IMPORTED_MODULE_2__.SET_ENV:
      const {
        env
      } = payload;
      return {
        ...state,
        env
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
  getEnv(state) {
    return state.env;
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

/***/ "./src/admin.scss":
/*!************************!*\
  !*** ./src/admin.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.scss */ "./src/admin.scss");

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