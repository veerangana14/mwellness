import React from "react"
import styles from "./CustomTable.module.css"

const CustomTable = ({ selectedValues, setSelectedValues, columns, rows, onSelectionChange }) => {

    const handleSelection = (rowIndex, value) => {
        let updatedSelection = selectedValues.map((values, index) => values.questionIndex === rowIndex ? {
            questionIndex: rowIndex,
            question: values.question,
            answer: columns[value],
            answerIndex: value
        } : values)
        setSelectedValues(updatedSelection);
        onSelectionChange(updatedSelection);
    };

    return (
        <div id={styles.TableWrapper}>
            <table id={styles.TableContainer}>
                <thead id={styles.TableHeaderContainer}>
                    <tr>
                        <th className={styles.TableHeader}></th>
                        {columns.map((col, index) => (
                            <th key={index} className={styles.TableHeader}>
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((_, rowIndex) => (
                        <tr key={rowIndex} className={styles.TableRowContainer}>
                            <td className={styles.TableRowHeader}>
                                {_}
                            </td>
                            {Array(4)
                                .fill(0)
                                .map((_, btnIndex) => (
                                    <td
                                        key={btnIndex}
                                        className={styles.TableRowData}
                                    >
                                        <input
                                            type="radio"
                                            name={`row-${rowIndex}`}
                                            value={btnIndex}
                                            // checked={selectedValues.find((value, ind) => value.questionIndex === rowIndex).answer === btnIndex}
                                            checked={selectedValues.find((value, ind) => value.questionIndex === rowIndex)?.answerIndex === btnIndex}
                                            onChange={() => handleSelection(rowIndex, btnIndex)}
                                        />
                                        {btnIndex}
                                    </td>
                                ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;
