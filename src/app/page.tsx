import { LoginForm, RedirectAuthenticated, CreateAccount } from '../components';

import styles from '../styles/page.module.scss';
const Home = () => {
  return (
    <main>
      <RedirectAuthenticated>
        <div className={styles.PageLogin}>
          <LoginForm />
          <CreateAccount />
        </div>
      </RedirectAuthenticated>
    </main>
  );
};

export default Home;
