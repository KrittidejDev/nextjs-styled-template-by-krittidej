export const RENDER_PROMOTION_TYPE = (type) => {
  let result;
  switch (type) {
    case "1":
      result = "Monthly Promotion";
      break;
    case "2":
      result = "Special Promotion";
      break;
    default:
      break;
  }
  return result;
};

export const OPTIONS_PROMOTION_TYPE = [
  {
    value: "1",
    label: "Monthly Promotion",
  },
  {
    value: "2",
    label: "Special Promotion",
  },
];
