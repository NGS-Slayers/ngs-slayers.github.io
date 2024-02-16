function genTable(divId, ...args) {
  // Check if the input is provided
  if (args.length === 0) {
    console.error('Invalid input. Please provide at least one object.');
    return '';
  }

  // Determine if multiple objects are passed
  const isMultipleObjects = args.length > 1;

  // Extract properties from all objects
  const allProperties = isMultipleObjects
    ? args.reduce((properties, arg, index) => (index % 2 === 0 ? properties.concat(Object.keys(arg)) : properties), [])
    : Object.keys(args[0]);

  // Remove duplicates
  const uniqueProperties = Array.from(new Set(allProperties));

  // Define the properties you want to include in the table and their display names
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
    Variation: 'Variation', // Added Variation property
  };

  // Create a container div with the specified class
  let containerDiv = document.createElement('div');
  containerDiv.className = 'table-wrapper docutils container';

  // Create the table element with the specified class
  let table = document.createElement('table');
  table.className = 'table table-center';

  // Create the table header
  let thead = document.createElement('thead');
  let headerRow = thead.insertRow();
  headerRow.className = 'row-odd';

  // Create the table body
  let tbody = document.createElement('tbody');
  table.appendChild(tbody);
  let rowIndex = 0; // Initialize row index variable

  // If multiple objects are passed, add "Variation" as the first column in the header
  if (isMultipleObjects) {
    let variationHeaderCell = document.createElement('th');
    variationHeaderCell.className = 'head';
    let variationHeaderParagraph = document.createElement('p');
    variationHeaderParagraph.innerText = propertyMappings.Variation;
    variationHeaderCell.appendChild(variationHeaderParagraph);
    headerRow.appendChild(variationHeaderCell);
  }

  for (const property of uniqueProperties) {
    if (propertyMappings.hasOwnProperty(property) && property !== 'Variation') {
      // Check if any object has this property and its value is 0
      const anyValueNonZero = args.some(obj => obj.hasOwnProperty(property) && obj[property] !== 0);

      // Skip creating header cell if any value is non-zero
      if (anyValueNonZero) {
        let headerCell = document.createElement('th');
        headerCell.className = 'head';
        let headerParagraph = document.createElement('p');
        headerParagraph.innerText = propertyMappings[property];
        headerCell.appendChild(headerParagraph);
        headerRow.appendChild(headerCell);
      }
    }
  }

  table.appendChild(thead);
  if (!isMultipleObjects) {
    table.appendChild(tbody);
  }

  // If variation strings are provided, create new rows with the Variation header
  if (isMultipleObjects) {
    for (let i = 0; i < args.length; i += 2) {
      let dataRow = tbody.insertRow();
      dataRow.className = rowIndex % 2 === 0 ? 'row-even' : 'row-odd'; // Apply row class based on rowIndex
      rowIndex++;
      let variationCell = dataRow.insertCell();
      let variationParagraph = document.createElement('p');
      variationParagraph.innerText = args[i + 1] || '';
      variationCell.appendChild(variationParagraph);

      for (const property of uniqueProperties) {
        const value = args[i][property];

        // Check if the value is not 0 and is not the "Variation" property
        if (value !== 0 && propertyMappings.hasOwnProperty(property) && property !== 'Variation') {
          let dataCell = dataRow.insertCell();
          let dataParagraph = document.createElement('p');
          // Check if the value is a number and has more than two decimal places
          const formattedValue = typeof value === 'number'
            ? (value % 1 !== 0 && value.toString().split('.')[1].length > 2 ? value.toFixed(2) : value)
            : value;

          dataParagraph.innerHTML = formattedValue || '';
          dataCell.appendChild(dataParagraph);
        }
      }
    }
  } else {
    // Create the table row with data for a single object
    let dataRow = tbody.insertRow();
    dataRow.className = rowIndex % 2 === 0 ? 'row-even' : 'row-odd'; // Apply row class based on rowIndex
    rowIndex++;
    for (const property of uniqueProperties) {
      const value = args[0][property];

      // Check if the value is not 0 and is not the "Variation" property
      if (value !== 0 && propertyMappings.hasOwnProperty(property) && property !== 'Variation') {
        let dataCell = dataRow.insertCell();
        let dataParagraph = document.createElement('p');
        // Check if the value is a number and has more than two decimal places
        const formattedValue = typeof value === 'number'
          ? (value % 1 !== 0 && value.toString().split('.')[1].length > 2 ? value.toFixed(2) : value)
          : value;

        dataParagraph.innerHTML = formattedValue || '';
        dataCell.appendChild(dataParagraph);
      }
    }
  }

  // Append the table to the container
  containerDiv.appendChild(table);

  // Get a reference to the specified div element by ID
  const targetDiv = document.getElementById(divId);

  // Append the container div to the specified div element
  if (targetDiv) {
    targetDiv.appendChild(containerDiv);
  } else {
    console.error('Invalid div ID. Please provide a valid ID.');
  }
}