//Imagine we want to create a "Navigation Widget" for aws.amazon.com, given the below JSON data, 
//create the corresponding markup to render the navigation in a page.
import React from 'react';

import { IData } from "../../types";


const displayElement = (data: IData) => {
      Object.entries(data).forEach(([key, value]) => {
         console.log(key);
         console.log(value);
      });
}


const NavigationWidget = (data: IData) => {
   displayElement(data);
    return  (
    <ul>
       <li>
          products
          <ul>
             <li>
                analytics
                <ul>
                   <li>amazon cloud search</li>
                </ul>
             </li>
             <li>blockchain</li>
          </ul>
       </li>
       <li>
          solutions
          <ul>
             <li>by use case</li>
             <li>by industry</li>
          </ul>
       </li>
       <li>pricing</li>
       <li>documentation</li>
    </ul>
    )
}

export default NavigationWidget;


