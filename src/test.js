// Original array of objects
const originalArray = [
    { FORM_FIELD_ORDER: '5', FORM_FIELD_NAME: 'Data Element', FORM_FIELD_TYPE: 'TextBox', DBCODE: 'DATA_ELEMENT_NAME' },
    { FORM_FIELD_ORDER: '10', FORM_FIELD_NAME: 'Is Unique Key', FORM_FIELD_TYPE: 'SelectOption', DBCODE: 'IS_UNIQUE_KEY' },
    { FORM_FIELD_ORDER: '15', FORM_FIELD_NAME: 'Is Value Always Required', FORM_FIELD_TYPE: 'SelectOption', DBCODE: 'IS_VALUE_ALWAYS_REQUIRED' },
    { FORM_FIELD_ORDER: '20', FORM_FIELD_NAME: 'Is Only Pre-Defined Value Allowed', FORM_FIELD_TYPE: 'SelectOption', DBCODE: 'PRE_DEFINED_DATA' },
    { FORM_FIELD_ORDER: '22', FORM_FIELD_NAME: 'MASTER_DATA_SET_UUID', FORM_FIELD_TYPE: 'SelectOption', DBCODE: 'MASTER_DATA_SET_UUID' },
    { FORM_FIELD_ORDER: '22', FORM_FIELD_NAME: 'MASTER_DATA_SET_UUID', FORM_FIELD_TYPE: 'SelectOption', DBCODE: 'MASTER_DATA_SET_UUID' },
    { FORM_FIELD_ORDER: '22', FORM_FIELD_NAME: 'MASTER_DATA_SET_UUID', FORM_FIELD_TYPE: 'SelectOption', DBCODE: '' },
    { FORM_FIELD_ORDER: '25', FORM_FIELD_NAME: 'Data Type', FORM_FIELD_TYPE: 'SelectOption', DBCODE: 'DATA_TYPE' },
    { FORM_FIELD_ORDER: '27', FORM_FIELD_NAME: 'Pre Defined DataType', FORM_FIELD_TYPE: 'SelectOption', DBCODE: 'DATA_TYPE' },
    { FORM_FIELD_ORDER: '27', FORM_FIELD_NAME: 'Pre-Defined Values TextBox', FORM_FIELD_TYPE: 'TextArea', DBCODE: 'PRE_DEFINED_VALUES' },
    { FORM_FIELD_ORDER: '28', FORM_FIELD_NAME: 'Pre-Defined Values SelectOption', FORM_FIELD_TYPE: 'MultiSelect', DBCODE: 'PRE_DEFINED_VALUES' },
    { FORM_FIELD_ORDER: '28', FORM_FIELD_NAME: 'Pre-Defined Values SelectOption', FORM_FIELD_TYPE: 'MultiSelect', DBCODE: '' },
    { FORM_FIELD_ORDER: '30', FORM_FIELD_NAME: 'UI Component', FORM_FIELD_TYPE: 'SelectOption', DBCODE: 'UI_VIEW_TYPE' },
    { FORM_FIELD_ORDER: '30', FORM_FIELD_NAME: 'UI Component for Type Boolean', FORM_FIELD_TYPE: 'SelectOption', DBCODE: 'UI_VIEW_TYPE' },
    { FORM_FIELD_ORDER: '36', FORM_FIELD_NAME: 'Length (Number only)', FORM_FIELD_TYPE: 'SelectOption', DBCODE: 'LENGTH' },
    { FORM_FIELD_ORDER: '36', FORM_FIELD_NAME: 'Max Length for Text', FORM_FIELD_TYPE: 'SelectOption', DBCODE: 'LENGTH' },
    { FORM_FIELD_ORDER: '37', FORM_FIELD_NAME: 'Length (Number with Decimal)', FORM_FIELD_TYPE: 'SelectOption', DBCODE: 'LENGTH' },
    { FORM_FIELD_ORDER: '38', FORM_FIELD_NAME: 'Length (Number with Decimal After)', FORM_FIELD_TYPE: 'SelectOption', DBCODE: 'LENGTH_AFTER_DECIMAL' },
    { FORM_FIELD_ORDER: '42', FORM_FIELD_NAME: 'Max Length field for Text Area', FORM_FIELD_TYPE: 'TextBox', DBCODE: 'LENGTH' },
    { FORM_FIELD_ORDER: '45', FORM_FIELD_NAME: 'Data Key', FORM_FIELD_TYPE: 'SelectOption', DBCODE: 'DATA_KEY' },
    { FORM_FIELD_ORDER: '45', FORM_FIELD_NAME: 'Physical Column Name Input Text', FORM_FIELD_TYPE: 'TextBox', DBCODE: 'PHYSICAL_TABLE_COLUMN_NAME' }
  ];
  
  // Transforming the original array to the desired format
  const transformedArray = originalArray.map(obj => ({
    NAME: obj.FORM_FIELD_NAME,
    IS_LIST: obj.FORM_FIELD_TYPE === 'SelectOption' ? true : false,
    MASTER_DATA: '',
    IS_MULTIVALUED: obj.FORM_FIELD_TYPE === 'MultiSelect' ? true : false,
    IS_DATA_MASKED: '',
    MASTER_DATA_LABEL: '',
    MASTER_DATA_VALUE: ''
  }));
  
  // Output the transformed array
  console.log(transformedArray);
  