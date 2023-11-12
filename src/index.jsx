import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import { TableContextProvider } from './Context/TableContext';

import './styles/_base.css';
import './styles/_nav.css';
import './styles/_table.css';
import './styles/_footer.css';
import './styles/_legend.css';
import './styles/_intro.css';
import './styles/_theme.css';
import './styles/_theme_cell.css';

createRoot(document.getElementById('root')).render(
	<TableContextProvider>
		<App />
	</TableContextProvider>,
);

// ReactDOM.render(
// 	<TableContextProvider>
// 		<App />
// 	</TableContextProvider>,

// 	document.getElementById('root'),
// );
