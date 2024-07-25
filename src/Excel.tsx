import { Workbook } from "exceljs";
import { HEADERS, DOCUMENT_DATA, generateCombinations } from "./data";

export const Excel = () => {
  const MASTER_DATA: any[][] = [];
  // @ts-ignore
  const fillExcelSheet = (workSheet, headerData, documentData) => {
    // @ts-ignore
    const headerNames = [];
    let charCode = 65;
    // @ts-ignore
    headerData.forEach((headerObj, index) => {
      headerNames.push({
        header: headerObj.NAME,
        key: headerObj.NAME,
      });
    });
    // @ts-ignore

    workSheet.columns = headerNames;
    // workSheet.addRow(["Data Element", "Data Elecsjkvnjf", "Is Unique Key", 'Yes', "Is Value Always Required", "No"]);
    workSheet.addRows(documentData);

    // @ts-ignore

    headerData.forEach((headerObj, index) => {
      // headerNames.push(headerObj.NAME);

      if (
        headerObj.IS_LIST === true &&
        headerObj.MASTER_DATA_LABELS &&
        headerObj.MASTER_DATA_LABELS.length > 0
      ) {
        if (headerObj.IS_MULTIVALUED === true) {
          MASTER_DATA.push(generateCombinations(headerObj.MASTER_DATA_LABELS));
          if (
            headerObj.MASTER_DATA_VALUES &&
            headerObj.MASTER_DATA_VALUES.length
          ) {
            MASTER_DATA.push(
              generateCombinations(headerObj.MASTER_DATA_VALUES)
            );
          } else {
            MASTER_DATA.push(
              generateCombinations(headerObj.MASTER_DATA_LABELS)
            );
          }
        } else {
          MASTER_DATA.push(headerObj.MASTER_DATA_LABELS);

          if (
            headerObj.MASTER_DATA_VALUES &&
            headerObj.MASTER_DATA_VALUES.length
          ) {
            MASTER_DATA.push(headerObj.MASTER_DATA_VALUES);
          } else {
            MASTER_DATA.push(headerObj.MASTER_DATA_LABELS);
          }
        }
        for (let i = 2; i <= 100; i++) {
          workSheet.getCell(
            `${String.fromCharCode(charCode)}${i}`
          ).dataValidation = {
            type: "list",
            allowBlank: true,
            formulae: [
              `'MASTERDATA(DO_NOT_EDIT)'!$${MASTER_DATA.length - 1}:$${
                MASTER_DATA.length - 1
              }`,
            ],
          };

          workSheet.getCell(
            `${String.fromCharCode(charCode + 1)}${i}`
          ).dataValidation = {
            type: "list",
            allowBlank: true,
            formulae: [
              `'MASTERDATA(DO_NOT_EDIT)'!$${MASTER_DATA.length}:$${MASTER_DATA.length}`,
            ],
          };
        }
        charCode++;
        workSheet.getColumn(charCode - 64).hidden = true;
      }
    });
  };

  // @ts-ignore
  // const AdjustColumnWidth = (worksheet) => {
  //   worksheet.columns.forEach((column) => {
  //     const lengths = column.values.map((v) => v.toString().length);
  //     const maxLength = Math.max(
  //       ...lengths.filter((v) => typeof v === "number")
  //     );
  //     column.width = maxLength;
  //   });
  // };

  // @ts-ignore
  const configAppExcel = (headerData, documentData, documentName) => {
    let workbook = new Workbook();

    for (const sheetName in documentData) {
      if (
        headerData.hasOwnProperty(sheetName) &&
        documentData.hasOwnProperty(sheetName)
      ) {
        let workSheet = workbook.addWorksheet(sheetName, {
          properties: { defaultColWidth: 30, tabColor: { argb: "FFC0000" } },
          headerFooter: {
            firstHeader: "Hello Exceljs",
            firstFooter: "Hello World",
          },
        });
        fillExcelSheet(
          workSheet,
          headerData[sheetName],
          documentData[sheetName]
        );

        // AdjustColumnWidth(workSheet);

        // const sheetData : any[][] = documentData[sheetName];

        // console.log("sheet data ", sheetData);
        // // if(sheetData && sheetData.length){
        //   // for(const data of sheetData){
        //     workSheet.addRows(sheetData)
        //     // console.log("data => ",data)
        //   // }
        // // }
      }
    }

    let MASTER_DATA_SHEET = workbook.addWorksheet("MASTERDATA(DO_NOT_EDIT)");
    MASTER_DATA_SHEET.state = "hidden";
    MASTER_DATA_SHEET.addRows(MASTER_DATA);

    workbook.xlsx.writeBuffer().then((data) => {
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
        onClick={() => configAppExcel(HEADERS, DOCUMENT_DATA, "Template")}
      >
        Download Real Excel
      </button>
    </div>
  );
};
