export const MASTER_DATA_VALUES = [
  "Apple Juice",
  "Banana Juice",
  "Orange Juice",
  "Strawberry Juice",
  "Grape Juice",
  "Lemon Juice",
  "Watermelon Juice",
  "Papaya Juice",
  "Guava Juice",
  "Muskmelon Juice",
];

export const MASTER_DATA_LABELS = [
  "Apple",
  "Banana",
  "Orange",
  "Strawberry",
  "Grape",
  "Lemon",
  "Watermelon",
  "Papaya",
  "Guava",
  "Muskmelon",
];

export const HEADERS = {
  "Data Upload Template": [
    {
      NAME: "Data Element",
      IS_LIST: false,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
    {
      NAME: "Is Unique Key",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: ["Yes", "No"],
      MASTER_DATA_VALUES: ["Ha", "Nahi"],
    },
    {
      NAME: "Is Value Always Required",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: ["Yes", "No"],
      MASTER_DATA_VALUES: ["Ha", "Nahi"],
    },
    {
      NAME: "Is Only Pre-Defined Value Allowed",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: ["Yes", "No"],
      MASTER_DATA_VALUES: ["Ha", "Nahi"],
    },
    {
      NAME: "MASTER_DATA_SET_UUID",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
    {
      NAME: "MASTER_DATA_SET_UUID",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
    {
      NAME: "MASTER_DATA_SET_UUID",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
  ],
  "Second Template": [
    {
      NAME: "Data Type",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: ["integer", "bool", "string", "char"],
      MASTER_DATA_VALUES: ["INT", "BOOLEAN", "STRING", "CHARACTER"],
    },
    {
      NAME: "Mix Fruits",
      IS_LIST: true,
      IS_MULTIVALUED: true,
      MASTER_DATA_LABELS: MASTER_DATA_LABELS,
      MASTER_DATA_VALUES: MASTER_DATA_VALUES,
    },
    {
      NAME: "Fruits",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: MASTER_DATA_LABELS,
      MASTER_DATA_VALUES: MASTER_DATA_VALUES,
    },
    {
      NAME: "Pre-Defined Values SelectOption",
      IS_LIST: false,
      IS_MULTIVALUED: true,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
    {
      NAME: "Pre-Defined Values SelectOption",
      IS_LIST: false,
      IS_MULTIVALUED: true,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
    {
      NAME: "UI Component",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
    {
      NAME: "UI Component for Type Boolean",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
    {
      NAME: "Length (Number only)",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
    {
      NAME: "Max Length for Text",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
    {
      NAME: "Length (Number with Decimal)",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
    {
      NAME: "Length (Number with Decimal After)",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
    {
      NAME: "Max Length field for Text Area",
      IS_LIST: false,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
    {
      NAME: "Data Key",
      IS_LIST: true,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
    {
      NAME: "Physical Column Name Input Text",
      IS_LIST: false,
      IS_MULTIVALUED: false,
      MASTER_DATA_LABELS: "",
      MASTER_DATA_VALUES: "",
    },
  ],
};

export const DOCUMENT_DATA = {
  "Data Upload Template": [
    [
      "Form Field",
      "Data Element",
      "Is Unique Key",
      "Is Value Always Required",
      "Is Only Pre-Defined Value Allowed",
      "MASTER_DATA_SET_UUID",
      "MASTER_DATA_SET_UUID",
      "MASTER_DATA_SET_UUID",
      "Data Type",
      "Pre Defined DataType",
      "Pre-Defined Values TextBox",
      "Pre-Defined Values SelectOption",
      "Pre-Defined Values SelectOption",
      "UI Component",
      "UI Component for Type Boolean",
      "Length (Number only)",
      "Max Length for Text",
      "Length (Number with Decimal)",
      "Length (Number with Decimal After)",
      "Max Length field for Text Area",
      "Data Key",
      "Physical Column Name Input Text",
    ],
    [
      "DBCODE",
      "DATA_ELEMENT_NAME",
      "IS_UNIQUE_KEY",
      "IS_VALUE_ALWAYS_REQUIRED",
      "PRE_DEFINED_DATA",
      "MASTER_DATA_SET_UUID",
      "MASTER_DATA_SET_UUID",
      "",
      "DATA_TYPE",
      "DATA_TYPE",
      "PRE_DEFINED_VALUES",
      "PRE_DEFINED_VALUES",
      "",
      "UI_VIEW_TYPE",
      "UI_VIEW_TYPE",
      "LENGTH",
      "LENGTH",
      "LENGTH",
      "LENGTH_AFTER_DECIMAL",
      "LENGTH",
      "DATA_KEY",
      "PHYSICAL_TABLE_COLUMN_NAME",
    ],
  ],
  "Second Template": [
    ["Carrot", "Broccoli", "Spinach", "Tomato", "Cucumber"],
    ["Apple", "Banana", "Orange", "Grapes", "Strawberry"],
  ],
};



export const DATA_ELEMENT = ["Input", "Output", "User Action"];
export const DATA_ELEMENT_REALVALS = [
  "Input - R",
  "Output - R",
  "User Action - R",
];

// @ts-ignore
export function generateCombinations(elements) : string[] {
  // @ts-ignore

  let combinations = [];
  // @ts-ignore

  function generate(current, start) {
    for (let i = start; i < elements.length; i++) {
      current.push(elements[i]); // add current element to the combination

      // add current combination to the result array
      combinations.push(current.join(","));

      // generate combinations starting from the next element
      generate(current, i + 1);

      // backtrack: remove the last added element and continue looping
      current.pop();
    }
  }

  generate([], 0); // start with an empty combination at index 0
  // @ts-ignore

  return combinations.sort((a, b) => a.length - b.length);
}
