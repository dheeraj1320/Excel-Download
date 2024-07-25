import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Workbook } from "exceljs";
import { Excel } from "./Excel";
import {
  DATA_ELEMENT,
  DATA_ELEMENT_REALVALS,
  MASTER_DATA_LABELS,
  MASTER_DATA_VALUES,
  generateCombinations,
} from "./data";

function App() {
  const generateExcel = (list, header) => {
    let data: any = [];
    for (let i = 0; i < list.length; i++) {
      let arr = [
        list[i].requisitionId,
        list[i].applicationId,
        list[i].candidateId,
        list[i].unitCode,
      ];
      data.push(arr);
    }
    console.log(data);
    //Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet("Candidate Report", {
      properties: { defaultColWidth: 15 },
    });
    let MSTER_DATA = workbook.addWorksheet("MASTERDATA(DO_NOT_EDIT)", {
      properties: { defaultColWidth: 20 },
    });
    //Add Header Row
    let headerRow = worksheet.addRow(header);

    // Cell Style : Fill and Border
    // headerRow.eachCell((cell, number) => {
    //   cell.fill = {
    //     type: "pattern",
    //     pattern: "solid",
    //     fgColor: { argb: "FFFFFF00" },
    //     bgColor: { argb: "FF0000FF" },
    //   };
    //   cell.border = {
    //     top: { style: "thin" },
    //     left: { style: "thin" },
    //     bottom: { style: "thin" },
    //     right: { style: "thin" },
    //   };
    // });
    // worksheet.getColumn(3).width = 30;
    data.forEach((d) => {
      let row = worksheet.addRow(d);
    });
    list.forEach((element, index) => {
      worksheet.getCell("E" + (+index + 2)).dataValidation = {
        type: "list",
        allowBlank: true,
        formulae: ['"Selected,Rejected,On-hold"'],
      };
    });

    worksheet.getColumn(2).hidden = true;
    worksheet.getColumn(13).hidden = true;
    worksheet.getColumn(16).hidden = true;
    worksheet.getCell("K1").value = 5;
    // worksheet.getCell('K2').value = {
    //   formula: 'K1 + 1',
    //   result: 10,
    //   shareType: 'shared',
    //   ref: 'K2:K25'
    // };
    worksheet.fillFormula("K2:K25", "K1+1");

    // @ts-ignore
    // const masterData = [];
    // MASTER_DATA_VALUES.forEach((val, i) => {
    //   const arr = [MASTER_DATA_LABELS[i], MASTER_DATA_VALUES[i]];
    //   masterData.push(arr);
    // });
    // MSTER_DATA.addRow([]);

    // masterData.forEach((data, i) => {
    //   const row = MSTER_DATA.addRow(data);
    //   // console.log("::::  ", row);

    //   // worksheet.getCell(`P${i + 1}`).value = data[0];
    //   // worksheet.getCell(`Q${i + 1}`).value = data[1];
    // });

    const DATA_EL_COMB = generateCombinations(DATA_ELEMENT);
    const DATA_EL_VAL_COMB = generateCombinations(DATA_ELEMENT_REALVALS);

    MSTER_DATA.addRows([
      MASTER_DATA_LABELS,
      MASTER_DATA_VALUES,
      DATA_EL_COMB,
      DATA_EL_VAL_COMB,
    ]);

    let switchFormula = `SWITCH(L2,`;
    MASTER_DATA_VALUES.forEach((val, i) => {
      switchFormula += `"${MASTER_DATA_LABELS[i]}","${MASTER_DATA_VALUES[i]}",`;
    });
    switchFormula += '"")';

    let switchFormula2 = `SWITCH(O2,`;
    DATA_EL_COMB.forEach((val, i) => {
      switchFormula2 += `"${DATA_EL_COMB[i]}","${DATA_EL_VAL_COMB[i]}",`;
    });
    switchFormula2 += '"")';

    for (let i = 2; i <= 25; i++) {
      worksheet.getCell(`L${i}`).dataValidation = {
        type: "list",
        allowBlank: true,
        formulae: ["'MASTERDATA(DO_NOT_EDIT)'!$A$1:$Z$1"],
      };

      worksheet.getCell(`O${i}`).dataValidation = {
        type: "list",
        allowBlank: true,
        formulae: ["'MASTERDATA(DO_NOT_EDIT)'!$A$3:$Z$3"],
      };

      // worksheet.getCell(`N${i}`).dataValidation = {
      //   type: "list",
      //   allowBlank: true,
      //   formulae: ["'MASTERDATA(DO_NOT_EDIT)'!$A$2:$A$11"],
      // };
      // worksheet.getCell(`M${i}`).value = {
      //   formula:
      //     'SWITCH(L2,"Apple","Apple Juice","Banana","Banana Juice","Orange","Orange Juice","Strawberry","Strawberry Juice","Grape","Grape Juice","Lemon","Lemon Juice","Watermelon","Watermelon Juice","Papaya","Papaya Juice","Guava","Guava Juice","Muskmelon","Muskmelon Juice","")',
      //   result: "Apple Juice",
      // };

      // worksheet.getCell(`M${i}`).value = {
      //   formula:
      //     'IFS(L2="Apple","Apple Juice",L2="Banana","Banana Juice",L2="Orange","Orange Juice",L2="Strawberry","Strawberry Juice",L2="Grape","Grape Juice",L2="Lemon","Lemon Juice",L2="Watermelon","Watermelon Juice",L2="Papaya","Papaya Juice",L2="Guava","Guava Juice",L2="Muskmelon","Muskmelon Juice")',
      //   // result: "Apple Juice",
      // };
    }

    // for (let i = 2; i <= 25; i++) {
    //   worksheet.getCell(`L${i}`).dataValidation = {
    //     type: "list",
    //     allowBlank: true,
    //     formulae: ["START:STARTO"],
    //   };
    // }

    worksheet.fillFormula("M2:M25", switchFormula);
    worksheet.fillFormula("P2:P25", switchFormula2);

    for (let charCode = 65; charCode <= 90; charCode++) {
      // ASCII codes for 'A' to 'Z' are 65 to 90
      let letter = String.fromCharCode(charCode); // Convert ASCII code to character

      for (let number = 1; number <= 100; number++) {
        console.log(letter + number); // Output each combination, like 'A1', 'A2', ..., 'Z99', 'Z100'
        MSTER_DATA.getCell(letter + number).protection = {
          locked: true,
        };
      }
    }
    

    // worksheet.fillFormula("M2:M25", "=SWITCH(L2,'Apple','Apple Juice','Banana','Banana Juice','Orange','Orange Juice','Strawberry','Strawberry Juice','Grape','Grape Juice','Lemon','Lemon Juice','Watermelon','Watermelon Juice','Papaya','Papaya Juice','Guava','Guava Juice','Muskmelon','Muskmelon Juice','')");

    // worksheet.fillFormula("M2:M11", `START`);

    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      console.log(data);
      let blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "switch" + ".xlsx";
      // Append the link to the document and click it
      document.body.appendChild(link);
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    });
  };

  const downloadExcel = () => {
    const list = [
      {
        requisitionId: "REQ001",
        applicationId: "APP001",
        candidateId: "CAND001",
        unitCode: "UC001",
      },
      {
        requisitionId: "REQ002",
        applicationId: "APP002",
        candidateId: "CAND002",
        unitCode: "UC002",
      },
      {
        requisitionId: "REQ003",
        applicationId: "APP003",
        candidateId: "CAND003",
        unitCode: "UC003",
      },
      {
        requisitionId: "REQ004",
        applicationId: "APP004",
        candidateId: "CAND004",
        unitCode: "UC004",
      },
      {
        requisitionId: "REQ005",
        applicationId: "APP005",
        candidateId: "CAND005",
        unitCode: "UC005",
      },
    ];

    const header = [
      "requisitionId",
      "applicationId",
      "candidateId",
      "unitCode",
    ];

    generateExcel(list, header);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={downloadExcel}>Download Excel</button>
      </div>

      <Excel />
    </>
  );
}

export default App;
