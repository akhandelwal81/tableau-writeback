import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {KeyPair,KeyPair} from '../view-model/keypair.model';
import { HttpClient,HttpParams} from '@angular/common/http';

Injectable({providedIn: 'root'})

export class WriteBackService {
  private writebackKey:BehaviorSubject<KeyPair> = new  BehaviorSubject<KeyPair>(new KeyPair());
    

