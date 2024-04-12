//Create a "Navigation Widget" using JSON data, 
//create the corresponding markup to render the navigation in a page.
import React from 'react';

import { IData } from "../../types";

const renderNavItems = (items) => {
   return Object.entries(items).map(([key, subItems]) => {
      const hasSubItems = Object.keys(subItems).length > 0;
      return (
         <li key={key}>
            <span>{key}</span>
            {hasSubItems && (
               <ul>
                  {renderNavItems(subItems)}
               </ul>
            )}
         </li>
      );
   });
};

const NavigationWidget = (data: IData) => {
   return (
      <div>
         <h2>Navigation Widget</h2>
         <ul>
            {renderNavItems(data)}
         </ul>
      </div>
   );
}

export default NavigationWidget;
