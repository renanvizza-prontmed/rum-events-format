# rum-events-format

JSON schema of RUM events send by SDKs

# Guidelines

The format must stay backward compatible in order to be able to validate old events, so:

- New fields must not be set as required
- Fields definition must not be updated, new fields must be created instead

Breaking changes to the format must be reflected by a major version update in `_dd.format_version` property.

After editing any schema, you must re-generate the JS + TS definitions ([see below](#build-js-sources--ts-definitions)).

## Consuming this repository

Consuming projects are encouraged to use a _yarn github_ reference as dependency, e.g:

    yarn add rum-events-format@DataDog/rum-events-format

Updating to the latest change is possible with _yarn up_, e.g:

    yarn up rum-events-format@DataDog/rum-events-format

It is also possible to specify the exact commit hash to use, e.g:

    yarn up rum-events-format@DataDog/rum-events-format#commit-hash

# Tools

## Generate schema from sample

https://jsonschema.net/

## Validate samples

Prerequisite:

    pip install jsonschema

Run a validation:

    ./validate.sh

### Build JS sources + TS definitions

Prerequisite:

    yarn install

Build:

    yarn build

### Generate TS definitions out of the schemas

Prerequisite:

    yarn build:deps

Generate:

    yarn generate

### Prettify TS & JSON files

Prerequisite:

    yarn install

Format:

    yarn format -w
