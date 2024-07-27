import { Button } from '../';
import style from './CreateAccount.module.scss';

const CreateAccount = () => {
  return (
    <div className={style.CreateAccount}>
      <p>¿No tienes cuenta?</p>
      <p>Regístrate y haz tus compras más rápido.</p>

      <Button>Crear cuenta</Button>
    </div>
  );
};

export default CreateAccount;
