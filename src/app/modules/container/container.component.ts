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
