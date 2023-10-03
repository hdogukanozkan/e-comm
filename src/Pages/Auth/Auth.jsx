import { useState } from "react";
import FastLogin from "./Components/Fast-Login/FastLogin";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import SwitchToggleButton from "./Components/SwitchButton.jsx";

function SignUp() {
  /* Kayıt ol veya Giriş yap kısmının gelmesi için bir state */
  const [button, setButton] = useState(false);

  return (
    <div className="auth">
      {/* Login or Register Toggle */}
      <div className="flex justify-center">
        <SwitchToggleButton setButton={setButton} button={button} />
      </div>
      {/* Logo */}
      <div className="img-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/N11_logo.svg/2560px-N11_logo.svg.png"
          alt="icon"
        />
      </div>
      {/* Register or Login Components */}
      <RegisterPage button={button} />
      <LoginPage button={button} />

      {/* Google & Facebook connect */}
      <FastLogin />
    </div>
  );
}

export default SignUp;

/*
NOTLAR
- DOĞUM TARİHİNİ DÜZENLE,
- FONT BOYUTLANDIRMASINI RESPONSİVE OLARAK ÇÖZ.! 
- BİR KAÇ ANİMASYON EKLEYEBİLİR MİSİN ARAŞTIR.
- Facebook ve google için İCON EKLE
- Parola hatasını araştır pattern.
*/
