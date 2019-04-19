import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {
      this.formGroup = formBuilder.group({
        nome: ['Richel', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['richelsensineli@gmail.com', [Validators.required, Validators.email]],
        tipo: ['1', [Validators.required]],
        cpfOuCnpj: ['12312312311', [Validators.required]],
        senha: ['123', [Validators.required]],
        logradouro: ['Avenida SJ', [Validators.required]],
        numero: ['2', [Validators.required]],
        complemento: ['', []],
        bairro: ['Centro', []],
        cep: ['12955000', [Validators.required]],
        telefone1: ['912341234', [Validators.required]],
        telefone2: ['', []],
        telefone3: ['', []],
        estadoId: [null, [Validators.required]],
        cidadeId: [null, [Validators.required]]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signupUser(){

  }
}
