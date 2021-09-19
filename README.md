# tableau-writeback
This explains a simple approach to implement a writeback functionality in Tableau 2020.1.
There have been numerous use cases that involes requirements where the users would like to interact with the Active Dashboards and perform drill downs.
Also, there are requirements to add comments and publish them to the user community.
These comments or commentary needs to be persisted along with the data elements displayed on the Dashboard.

Tableau by its Design is a read-only tool and provides a rich user experience when it comes to Interactive Dashboards, Data Discovery and Visualisations need.

When I was asked for a functionality that required user to be able to access the Dashboard, select a row on a specific workbook and add commentary, I explored a number of options including the extensions that have been written as part of Tableau Extension Community.

## Evaluations for different options
* WRITEBACK - This is one of the extensions that has been built by Writeback to serve this purpose for the Tableau Community.This tool is quite neat and supports a number of features including commenting, forecasting, replacing values etc.
 Writeback can be deployed in an Enterprise environment using below topology;
 ![alt text for screen readers](./Writeback.png)
 
 This implies that the Writeback needs to be installed on a seperate server with specific configurations. Tableau Server needs to be configured to be able to access Writeback Server. This is usally done by adding a trex file. One file will be on the Tableau Server while all the Creators working on the Implementation needs to have a trex file on their desktops as well.
 
 The Writeback Server would need its own backend Database to be configured where the data can be stored. This data then can be pushed to the Main Mart which is the source of Tableau Data.
 Most of the Tableau extensions are web based and users can interact with the server either using the Tableau Desktop or via Tableau Server.
 
