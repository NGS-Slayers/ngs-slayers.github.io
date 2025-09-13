import * as moveset from '/src/data/moveset';
import TooltipText from '/src/components/TooltipText';
import styles from './styles.module.css';

const MovesetTable = ({ tableId, args }) => {
    const processedArgs = args(moveset);

    const isMultipleObjects = processedArgs.length > 1;

    const allProperties = isMultipleObjects
        ? processedArgs.reduce((properties, arg, index) => (index % 2 === 0 && typeof arg === 'object' ? properties.concat(Object.keys(arg)) : properties), [])
        : Object.keys(processedArgs[0]);

    const uniqueProperties = Array.from(new Set(allProperties));

    const propertyMappings = {
        Pot: 'Potency',
        Time: 'Time (s)',
        PP: 'PP Cost',
        Focus: 'Focus',
        Rage: 'Rage',
        F0: 'F0 DPS',
        F5: 'F5 DPS',
        OD: 'OD DPS',
        FPS: 'Focus/s',
        RPS: 'Rage/s',
        Variation: 'Variation',
    };

    const renderHeader = () => {
        let headers = [];
        if (isMultipleObjects) {
            headers.push(<th key="variation">{propertyMappings.Variation}</th>);
        }

        uniqueProperties.forEach(property => {
            if (propertyMappings.hasOwnProperty(property) && property !== 'Variation') {
                const anyValueNonZero = processedArgs.some(obj => typeof obj === 'object' && obj.hasOwnProperty(property) && obj[property] !== 0);
                if (anyValueNonZero) {
                    headers.push(<th key={property}>{propertyMappings[property]}</th>);
                }
            }
        });

        return <tr>{headers}</tr>;
    };

    const renderBody = () => {
        if (isMultipleObjects) {
            let rows = [];
            for (let i = 0; i < processedArgs.length; i += 2) {
                let cells = [];
                const variationString = processedArgs[i + 1] || '';
                cells.push(<td key={`variation-${i}`}><TooltipText text={variationString} /></td>);
                uniqueProperties.forEach(property => {
                     if (propertyMappings.hasOwnProperty(property) && property !== 'Variation') {
                        const anyValueNonZero = processedArgs.some(obj => typeof obj === 'object' && obj.hasOwnProperty(property) && obj[property] !== 0);
                        if (anyValueNonZero) {
                            const value = processedArgs[i][property];
                            const formattedValue = typeof value === 'number'
                                ? (value % 1 !== 0 && value.toString().split('.')[1].length > 2 ? value.toFixed(2) : value)
                                : value;
                            cells.push(<td key={`${property}-${i}`}><TooltipText text={String(formattedValue)} /></td>);
                        }
                    }
                });
                rows.push(<tr key={i}>{cells}</tr>);
            }
            return rows;
        } else {
            let cells = [];
            uniqueProperties.forEach(property => {
                if (propertyMappings.hasOwnProperty(property) && property !== 'Variation') {
                     const anyValueNonZero = processedArgs.some(obj => typeof obj === 'object' && obj.hasOwnProperty(property) && obj[property] !== 0);
                    if (anyValueNonZero) {
                        const value = processedArgs[0][property];
                        const formattedValue = typeof value === 'number'
                            ? (value % 1 !== 0 && value.toString().split('.')[1].length > 2 ? value.toFixed(2) : value)
                            : value;
                        cells.push(<td key={property}><TooltipText text={String(formattedValue)} /></td>);
                    }
                }
            });
            return <tr>{cells}</tr>;
        }
    };

    return (
        <table id={tableId} className={styles.movesetTable}>
            <thead>{renderHeader()}</thead>
            <tbody>{renderBody()}</tbody>
        </table>
    );
};

export default MovesetTable;