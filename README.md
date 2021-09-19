# tableau-custom-writeback
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
Writeback creates a table for every dataset and the Dataset User most likely requires a seperate schema with full permissions. It is possible to align the dataset tables to the same database as the warehouse.
The data synchronisation between the Data Mart and Dataset Schema could be done using ETL tools as well as Database Triggers.
The Main reasons why I decided to write my own component was to simplify the architecture in my case as it avoids setting up a seperate server with writeback thereby saving on infrastructure cost. This extension comes with a License fee and hence it would have increased the cost of the overall implementation and provided few benefits.
Additionally it would have taken longer to on-board the product within the organisation.

* M2 Tableau Writeback - This is another powerful extension that has been built by the Tableau Extension Community and provides loads of features that help in Writing Back the data from Tableau Dashboard. This doesn't need much of Programming expertise and needs to be hosted onsite. This provides a rich user interface. The forms can be created using a web based interface and these can then be directly downloaded from a Form Builder as a Tableau Extension in TREX Format an d can be easily integrated into the Dashboard.
This also involved Licensing cost as well as seperate installation of the tool.

We decided to simplify it futher by using Tableau JavaScript API and building an Angular Container that can embed the Dashboard. The JS API provides access to Tableau constructs and its elements which can then be manipulated via TypeScript and writeback can be done using a simple Spring Boot REST Service that can writeback the data to the same database and in the same table. This allows the refreshes to happen instantaneously.

It works quite well as the implementation with Angular and Typescript using iFrame made it simpler and seamless. Importantly, we were able to deploy the Write-back service as a docker image on Cloud and access it to persists the commentary using predefined keys and also render the commentary history.
Housekeeping of the data and controls associated with it in terms of archival and replication were key.







 
