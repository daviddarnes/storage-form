# `storage-form`

A Web Component that allows you to submit data to local storage.

**[Demo](https://daviddarnes.github.io/storage-form/demo.html)**

## Examples

General usage example:

```html
<script type="module" src="storage-form.js"></script>

<storage-form>
  <form>
    <label>
      Example
      <input type="text" name="example" value="value" />
    </label>
    <button>Submit</button>
  </form>
</storage-form>
```

Example of submitting with `change` event instead of a submit button. Use case for light/dark mode:

```html
<script type="module" src="storage-form.js"></script>

<storage-form>
  <form>
    <label>
      <input type="radio" name="theme" value="dark" />
      <span>Dark mode</span>
    </label>
    <label>
      <input type="radio" name="theme" value="light" />
      <span>Light mode</span>
    </label>
    <label>
      <input type="radio" name="theme" value="" checked />
      <span>Default mode</span>
    </label>
    <br />
    <label>
      <input type="hidden" name="contrast" value />
      <input type="checkbox" name="contrast" value="true" />
      <span>High contrast</span>
    </label>
  </form>
</storage-form>
```

Example of hooking into `storage` event:

```html
<script type="module" src="storage-form.js"></script>

<storage-form>
  <form>
    <label>
      Update the
      <code>output</code>
      by checking the box
      <input type="hidden" name="output" value />
      <input type="checkbox" name="output" value="updated" />
    </label>
  </form>
</storage-form>

<output></output>
<script>
  const updatePage = () => {
    document.querySelector("output").innerHTML = JSON.stringify(
      window.localStorage
    );
  };
  window.addEventListener("storage", updatePage);
  updatePage();
</script>
```

## Features

This Web Component allows you to:

- Use regular form elements to manipulate data in local storage
- Invoke a `storage` event on the page to hook into elsewhere on the page
- Maintain the forms state, using local storage, when the page is refreshed or reloaded
- Optionally submit the form on the forms `change` event by omitting the forms submit button/input element

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
<script
  type="module"
  src="https://www.unpkg.com/@daviddarnes/storage-form@2.0.0/storage-form.js"
></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://esm.sh/@daviddarnes/storage-form@2.0.0"
></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
- [Nathan Knowler](https://knowler.dev) for proposing a solution to the `updateForm()` method
