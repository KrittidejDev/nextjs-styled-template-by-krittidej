export const OBJECT_ARRAY_UNIQUE_OPTIONS = (arr, fieldLabel, fieldValue) => {
  if (!arr) {
    return [];
  } else {
    return arr.reduce((result, data) => {
      if (!result.some((e) => String(e.value) === String(data[fieldValue]))) {
        result.push({
          label: String(data[fieldLabel]),
          value: String(data[fieldValue]),
        });
      }
      return result;
    }, []);
  }
};
