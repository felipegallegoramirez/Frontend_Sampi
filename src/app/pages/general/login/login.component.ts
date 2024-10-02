import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  skills: string[] = []

  constructor(
    //private noti: MatSnackBar,
    //private userService: UserService,
    //private loginService: LoginService
  ){}

  ngOnInit(): void {
      this.loginButtons();
  }

  loginButtons() {
    const container = document.querySelector(".container");
    const btnSignIn = document.getElementById("btn-sign-in");
    const btnSignUp = document.getElementById("btn-sign-up");

    btnSignIn!.addEventListener("click",()=>{
      container!.classList.remove("toggle");
    });
    btnSignUp!.addEventListener("click",()=>{
      container!.classList.add("toggle");
    });
  }

  formRegister = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
      Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).+$')
    ]),
    id_num: new FormControl('', [Validators.required]),
  })


  splitArray(index:number){
    console.log(index)
    this.skills.splice(index, 1)
    console.log(this.skills)
  }

  preventSubmit(event: KeyboardEvent) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
  }

  sendRegister(){
    /*
    let formValues = this.formRegister.value 

    if(this.skills.length <= 3){
      this.noti.open('Debe de tener minimo 3 skills', 'Cerrar', {
        panelClass: ["custom-snackbar1"],
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 5000
      });
      return
    }

    let user = new User(
      formValues.name || "",
      formValues.email || "",
      formValues.password || "",
      "User",
      formValues.id_num || "",
      "",
      formValues.description || "",
      formValues.description || "",
      this.skills
    );

   this.userService.postUser(user).subscribe(res => {
    this.noti.open('Se creo el usuario correctamente', 'Cerrar', {
      panelClass: ["custom-snackbar1"],
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000
    });
    this.formRegister.reset()
   }, err => {
    this.noti.open(err.error.error, 'Cerrar', {
      panelClass: ["custom-snackbar1"],
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000
    });
   })
    */  
   }

  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  sendLogin(){
    /*
    let formValues = this.formLogin.value;
    
    let login: LoginUser = {
      email: formValues.email || "",
      password: formValues.password || "",
    }


    this.loginService.auth(login).subscribe(res => {
      this.noti.open('Iniciando sesión', 'Cerrar', {
        panelClass: ["custom-snackbar1"],
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 5000
      });
      this.formLogin.reset()
      let userTemporal = res;
      if (userTemporal) {
        localStorage.setItem('User', JSON.stringify(userTemporal));
        window.location.replace('/home')
      }
    }, err => {
      this.noti.open(err.error.error, 'Cerrar', {
        panelClass: ["custom-snackbar1"],
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 5000
      });
    })
    */
  }
}
