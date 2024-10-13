import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './CsvTable.scss';
const CsvTable = ({ filePath }) => {
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);

  const loadCsvFile = () => {
    fetch(filePath)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true, // Automatically pick up the headers
          skipEmptyLines: true,
          complete: (result) => {
            const csvData = result.data;
            if (csvData.length > 0) {
              setHeaders(Object.keys(csvData[0])); // Use the first object to extract headers
              setRows(csvData); // Set all rows
            }
          },
        });
      })
      .catch((error) => {
        console.error('Error fetching the CSV file:', error);
      });
  };

  useEffect(() => {
    loadCsvFile();
  }, [filePath]);

  return (
    <div className="container mt-5">
      {rows.length > 0 && (
        <div className="table-responsive  table-height">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((header, cellIndex) => (
                    <td key={cellIndex}>{row[header]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CsvTable;
