import { ProtectedRoute } from '../../components';

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div
        style={{
          textAlign: 'center',
          padding: '5rem 2rem',
          fontSize: '3.5rem',
        }}
      >
        Bienvenidx
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
