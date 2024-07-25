import { Workbook } from "exceljs";
import { HEADERS, DOCUMENT_DATA, generateCombinations } from "./data";

export const Excel = () => {
  const MASTER_DATA = [];
  const HIDDEN_COLUMNS = [];
  // @ts-ignore
  const processHeaders = (workSheet, headerData, MASTER_DATA_SHEET_NAME) => {
    // @ts-ignore
    const headerNames = [];
    let charCode = 65;
    // @ts-ignore
    headerData.forEach((headerObj, index) => {
      headerNames.push({
        header: headerObj.NAME,
        key: headerObj.NAME,
        width: 15,
      });

      if (headerObj.IS_LIST === true) {
        if (
          headerObj.MASTER_DATA_LABELS &&
          headerObj.MASTER_DATA_LABELS.length > 0 &&
          headerObj.MASTER_DATA_VALUES &&
          headerObj.MASTER_DATA_VALUES.length > 0
        ) {
          if (headerObj.IS_MULTIVALUED === true) {
            MASTER_DATA.push(
              generateCombinations(headerObj.MASTER_DATA_LABELS)
            );
            MASTER_DATA.push(
              generateCombinations(headerObj.MASTER_DATA_VALUES)
            );
          } else {
            MASTER_DATA.push(headerObj.MASTER_DATA_LABELS);
            MASTER_DATA.push(headerObj.MASTER_DATA_VALUES);
          }
          for (let i = 2; i <= 50; i++) {
            workSheet.getCell(
              `${String.fromCharCode(charCode)}${i}`
            ).dataValidation = {
              type: "list",
              allowBlank: true,
              formulae: [`'MASTERDATA(DO_NOT_EDIT)'!$A$${MASTER_DATA.length - 1}:$Z$${MASTER_DATA.length - 1}`],
            };
          }

          charCode++;

          let switchFormula = `SWITCH(${String.fromCharCode(charCode)}2,`;
          DATA_EL_COMB.forEach((val, i) => {
            switchFormula += `"${DATA_EL_COMB[i]}","${DATA_EL_VAL_COMB[i]}",`;
          });
          switchFormula += '"")';
        }
      }

      charCode++;
    });

    // @ts-ignore
    workSheet.columns = headerNames;
  };

  // @ts-ignore
  const AdjustColumnWidth = (worksheet) => {
    worksheet.columns.forEach((column) => {
      const lengths = column.values.map((v) => v.toString().length);
      const maxLength = Math.max(
        ...lengths.filter((v) => typeof v === "number")
      );
      column.width = maxLength;
    });
  };

  // @ts-ignore
  const configAppExcel = (headerData, documentData, documentName) => {
    let workbook = new Workbook();

    for (const sheetName in documentData) {
      if (
        headerData.hasOwnProperty(sheetName) &&
        documentData.hasOwnProperty(sheetName)
      ) {
        let workSheet = workbook.addWorksheet(sheetName);
        processHeaders(
          workSheet,
          headerData[sheetName],
          "MASTERDATA(DO_NOT_EDIT)"
        );

        AdjustColumnWidth(workSheet);

        const sheetData = documentData[sheetName];
      }
    }

    let workSheet = workbook.addWorksheet("MASTERDATA(DO_NOT_EDIT)");

    workbook.xlsx.writeBuffer().then((data) => {
      console.log(data);
      let blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = documentName + ".xlsx";
      // Append the link to the document and click it
      document.body.appendChild(link);
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    });
  };
  return (
    <div className="card">
      <button
        onClick={() => configAppExcel(HEADERS, DOCUMENT_DATA, "cdnscskcf")}
      >
        Download Real Excel
      </button>
    </div>
  );
};
