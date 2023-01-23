import React, { useState } from 'react';
import "../App.css";

function PascalTriangle() {
    const [rows, setRows] = useState(5);

    const generateTriangle = (numRows) => {
        let triangle = [[1]];
        for (let i = 1; i < numRows; i++) {
            let currentRow = [1];
            for (let j = 1; j < i; j++) {
                currentRow.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
            currentRow.push(1);
            triangle.push(currentRow);
        }
        return triangle;
    }

    const triangle = generateTriangle(rows);

    return (
        <div className="triangle-container">
            <input type="number" value={rows} onChange={e => setRows(e.target.value)} />
            <br />
            {triangle.map((row, i) => (
                <div key={i} className="triangle-row">
                    {row.map((num, j) => (
                        <span key={j} className="triangle-cell">{num}</span>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default PascalTriangle;