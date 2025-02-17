const objectToFormData = (
  obj: Record<string, any>,
  form?: FormData,
  parentKey?: string
): FormData => {
  const formData = form || new FormData();

  for (const key in obj) {
    if (
      !obj.hasOwnProperty(key) ||
      obj[key] === undefined ||
      obj[key] === null
    ) {
      continue;
    }

    const value = obj[key];
    const formKey = parentKey ? `${parentKey}[${key}]` : key;

    if (value instanceof Date) {
      formData.append(formKey, value.toISOString());
    } else if (value instanceof File) {
      formData.append(formKey, value);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const arrayKey = `${formKey}[${index}]`;
        if (typeof item === "object") {
          objectToFormData(item, formData, arrayKey);
        } else {
          formData.append(arrayKey, item.toString());
        }
      });
    } else if (typeof value === "object") {
      objectToFormData(value, formData, formKey);
    } else {
      formData.append(formKey, value.toString());
    }
  }

  return formData;
};

export { objectToFormData };
