import React, { useState } from "react";
import FileInput from "./FileInput";
import ReadExcel from "./ReadExcel";

const DisplayExcel = () => {
  const [excelData, setExcelData] = useState([]);

  const handleFileSelect = async (file) => {
    try {
      const data = await ReadExcel(file);
      setExcelData(data);
    } catch (error) {
      console.log('Error reading file', error);
    }
  };

  return (
    <div>
      <br/>
    <form>
      <h1>Read excel data</h1>
      <FileInput onFileSelect={handleFileSelect} />
    </form>
    <div>
      <table>
        <tbody>
          {excelData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DisplayExcel;