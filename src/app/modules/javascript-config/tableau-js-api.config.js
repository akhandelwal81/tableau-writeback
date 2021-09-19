/*
This is the actual configuration of Tableau JavaScript API that is used to access the events and elements on the dashboard when the Dashboard has been embedded in an Angular Iframe
*/


interface JSAPI
{
  name:string;
  src: string;
}

export const JSAPIStore: JSAPI[] = [
  {name: 'JSAPI', src: 'https://tableau-your-server/javascripts/api/tableau-2.min.js'}
  ];
