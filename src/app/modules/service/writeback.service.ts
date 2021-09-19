import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IMrkKeyPair,MrkKeyPair} from '../view-model/mrkkeypair.model';
import { HttpClient,HttpParams} from '@angular/common/http';

Injectable({providedIn: 'root'})

export class WriteBackService {
  private writebackKey:BehaviorSubject<IMrkKeyPair> = new  BehaviorSubject<IMrkKeyPair>(new MrkKeyPair());
    

