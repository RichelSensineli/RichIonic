import { STORAGE_KEYS } from './../config/storage_keys.config';
import { LocalUser } from './../models/localUser';
import { Injectable } from "@angular/core";

@Injectable()
export class StorageService{

    getLocalUser() : LocalUser {
        let user = localStorage.getItem(STORAGE_KEYS.localuser);
        if(user == null){
            return null;
        } else {
            return JSON.parse(user);
        }
    }

    setLocalUser(obj: LocalUser) {
        if(obj == null){
            localStorage.removeItem(STORAGE_KEYS.localuser);
        } else {
            localStorage.setItem(STORAGE_KEYS.localuser, JSON.stringify(obj));
        }
    }
}