import { Component, OnInit, ViewChild, ElementRef, AfterContentInit,AfterViewInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {MrkKeyPair,IMrkKeyPair } from 'src/app/modules/view-models/mrkkeypair.model';
/*  import {WritebackService} from '../services/writeback.service';
*/

import {ComplierMetadataResolver, debugOutputAstAsTypeScript } from '@angular/compiler';

/*
import {TableauService} from 'src/app/tableau/tableau.service';

*/

import { Router} from '@angular/router';
import {HttpParams,HttpClient } from '@angular/common/http';

import  {Iuser} from 'src/app/service/auth/user';

/*
import { ConfigService } from 'src/app/service/config/config.service;

*/

declare var tableau: any;

@Component ({
selector:'container',
templateUrl: './container.component.html',
styleUrls: ['container.component.scss']
})


export class ContainerComponent implements OnInit,AfterViewInit {
  url: SafeResourceUrl;
  @ViewChild{"tabContainer"} tabContainerDiv: ElementRef;


  tableauViz: any;
  workbook: any;
  activeSheet: any;
  dashboard:string = undefined;
  key: KeyPair;
  showConfirmSub: Subject<any> = new Subject();

}

initTableau(){
  
  const vizUrl = this.config.getConfig().TD_TAB_URL;
  const options ={
    
    hidetabs: true,
    width: "100%",
    height: "100vh",
    device: "desktop",
    
    
    onFirstInteractive: () => {
        console.log("onFirstInteractive");
        this.workbook = this.tableauViz.getWorkbook();
        this.activeSheet = this.workbook.getActiveSheet ();
    },
    
    onFirstVizSizeKnown: () => {
      console.log("onFirstVizSizeKnown");
    }
  };
  
  
  this.tableauViz = new tableau,Viz(this.tabContainerDiv.nativeElement, vizUrl, options);
  this.tableauViz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, this.tableau.onMarksSelection.bin(this.teableau));
