class StorageForm extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "storage-form", StorageForm);
    }
  }

  connectedCallback() {
    this.forms.forEach((form) => {
      const eventType = this.getSubmitter(form) ? "submit" : "change";
      form.addEventListener(eventType, (event) => {
        event.preventDefault();
        this.updateStorage(new FormData(event.target.closest("form")));
        window.dispatchEvent(new StorageEvent("storage"));
      });
    });
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
