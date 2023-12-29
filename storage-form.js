class StorageForm extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "storage-form", StorageForm);
    }
  }

  connectedCallback() {
    this.forms.forEach((form) => {
      this.updateForm(form);
      const eventType = this.getSubmitter(form) ? "submit" : "change";
      form.addEventListener(eventType, (event) => {
        event.preventDefault();
        this.updateStorage(new FormData(event.target.closest("form")));
        window.dispatchEvent(new StorageEvent("storage"));
      });
    });
  }

  updateForm(form) {
    for (const input of form.elements) {
      const storedValue = window.localStorage[input.name];
      if (!storedValue) return;
      switch (input.type) {
        case "hidden":
          break;
        case "checkbox":
        case "radio":
          input.checked = input.value == storedValue;
          break;
        default:
          input.value = storedValue;
      }
    }
  }

  updateStorage(data) {
    for (const item of data.entries()) {
      if (!item[1]) {
        window.localStorage.removeItem(item[0]);
      } else {
        window.localStorage.setItem(item[0], item[1]);
      }
    }
  }

  get forms() {
    return this.querySelectorAll("form");
  }

  getSubmitter(form) {
    return form.querySelector("[type='submit'], button:not([type])");
  }
}

StorageForm.register();
