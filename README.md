# `storage-form`

A Web Component that allows you to submit data to local storage.

**[Demo](https://daviddarnes.github.io/storage-form/demo.html)**

## Examples

```html
<script type="module" src="storage-form.js"></script>

<storage-form>
  <form>
    <label>
      Example
      <input type="text" name="example" value="value">
    </label>
    <button>Submit</button>
  </form>
</storage-form>
```

## Features

This Web Component allows you to:

- Use regular form elements to maniptulate data in local storage
- Invoke a `storage` event on the page to hook into elsewhere on the page
- Optionally submit the form on the forms `change` event by ommiting the forms submit button/input element

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@daviddarnes/storage-form): `npm install @daviddarnes/storage-form`
1. [Download the source manually from GitHub](https://github.com/daviddarnes/storage-form/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="storage-form.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script type="module" src="https://www.unpkg.com/@daviddarnes/storage-form@1.0.0/storage-form.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script type="module" src="https://esm.sh/@daviddarnes/storage-form@1.0.0"></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
