import { fluentDataGrid, provideFluentDesignSystem } from "@fluentui/web-components";
//fluentDataGrid = require("@fluentui/web-components");
//provideFluentDesignSystem  =require ("@fluentui/web-components");

provideFluentDesignSystem().register(fluentDataGrid);

// populate the data-grid
let defaultGridElement  = null;
defaultGridElement = document.getElementById('defaultGrid');

defaultGridElement.rowsData = newDataSet(10);

function newDataSet(rowCount) {
	const newRows = [];
	for (let i = 0; i <= rowCount; i++) {
		newRows.push(newDataRow(`${i + 1}`));
	}
	return newRows;
	};

function newDataRow(id) {
	return {
		rowId: `rowid-${id}`,
		item1: `value 1-${id}`,
		item2: `value 2-${id}`,
		item3: `value 3-${id}`,
		item4: `value 4-${id}`,
	};
	};


