=== Murmurations Node ===
Contributors: geoffturk, twang443
Donate link: https://opencollective.com/murmurations
Tags: murmurations, network, regenerative economy, map
Requires at least: 5.0
Tested up to: 6.2.2
Stable tag: 6.2.2
Requires PHP: 5.6
License: GPLv3 or later
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Generate a profile for your organization and share it in the Murmurations network

== Description ==

Murmurations is a distributed data sharing network built to help connect regenerative economy projects and organizations and make them visible to the world and each other.

The network is comprised of:

- [Nodes](https://docs.murmurations.network/about/common-terms.html#node) and other data hosts that share data in the network
- An [Index](https://docs.murmurations.network/about/common-terms.html#index) that keeps track of what data is available in the network, and where it is located
- [Aggregators](https://docs.murmurations.network/about/common-terms.html#aggregator) that collect data from the network and display it in various ways
- A [Library](https://docs.murmurations.network/about/common-terms.html#library) of schemas that describe the data in the network

To enable these entities to work together, Murmurations provides:

- A protocol for defining and exchanging data about and amongst organizations, based on existing standards such as [JSON Schema](https://json-schema.org/understanding-json-schema/) and [REST APIs](https://www.redhat.com/en/topics/api/what-is-a-rest-api).
- An [Index](https://index.murmurations.network/v2/nodes), a [Library](https://library.murmurations.network/v2/schemas) and a user-friendly data host (our [Profile Generator](https://tools.murmurations.network/profile-generator))) which enables organizations to quickly add themselves to the network.
- [Open source plug-ins and other code](https://github.com/MurmurationsNetwork) to make it as easy as possible to use, share and contribute data to the network in a decentralized way.

The initial use case for Murmurations was to facilitate decentralized mapping of purpose-driven and solidarity economy organizations and projects.

Further historical background is in the 2019 [Murmurations Whitepaper](https://murmurations.network/wp-content/uploads/2019/09/murmurations-white-paper-v0.1.0.pdf).

== Installation ==

This section describes how to install the plugin and get it working.

1. Upload the plugin files to the `/wp-content/plugins` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Select the Murmurations option in the Admin menu and then start submitting profiles to the Murmurations Network.

== Frequently Asked Questions ==

= How does it work? =

The Murmurations Protocol enables individuals and organizations (Nodes) to create Profiles about themselves in order to easily share information with Aggregators, who create Schemas to define the data they need to create maps, directories and content aggregators.

= Can you explain the terms you use? =

See the [common terms](https://docs.murmurations.network/about/common-terms.html) we use when working with Murmurations and our blog posts Murmurations explained, and using Murmurations.

== Screenshots ==

1. Initial admin view

2. Selecting a profile type

3. Filling out a profile

4. Submitting a profile

5. Confirmation of creation of a profile and registration with the Murmurations Index

== Changelog ==

= 1.0.0 =

* Version 1.0.0 of the Murmuration node plugin is a major update which makes the plugin compatible with the current version of the Index.

== Upgrade Notice ==

This is a major upgrade to work with the updated Index v2.0.0. Please deactivate and delete the old plugin before installing this new release.
