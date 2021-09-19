/*
Based on the Dashboard, you may want to access a table on Tableau that has a set of attributes.
These attributes need to be identified and used as a key to be able to use them to get the text information entered by user via UI
This is then passed to the writeback service that is written in Spring Boot to commit the data in the database.
In this example we have used Oracle but it could well be SQL Server, Cassandra, Couchbase , HBase or Snowflake

*/


import { isBuffer} from 'util';
import {IUser} from 'src/app/service/auth/user';

export interface KeyPairProperties {

readonly keyid: string;
readonly keyName: string;
readonly valueType: string;

}

export interface KeyPair {

  keyIdVal: number;
  keyNameVal: string;
  user: IUser;
  text: string;
  textDate: Date;
  dashboardName: string;

export class KeyPairAttr implements KeyPair, KeyPairProperties {
    constructor(keyIdVal?: number);
    constructor(keyIdVal?: number, keyNameVal?: string) 
{
    this.keyIdVal = keyIdVal;
    this.keyNameVal = keyNameVal;

}

