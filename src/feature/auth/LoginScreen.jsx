import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Toast from '../components/Toast';
import AppHeader from '../../components/common/AppHeader';
const LoginScreen = () => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleLogin = e => {
    e.preventDefault();

    if (!email || !password) {
      setToastMessage('Please fill in all fields');
      setShowToast(true);
      return;
    }

    // Simulate login success
    setToastMessage('Login Successful 🎉');
    setShowToast(true);

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: theme.colors.background,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: theme.spacing.lg,
          fontFamily: theme.fontFamilies.inter,
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            backgroundColor: theme.colors.background,
            padding: theme.spacing.xl,
            borderRadius: 12,
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            width: '100%',
            maxWidth: 400,
          }}
        >
          <h2
            style={{
              fontSize: theme.fontSizes.xxl,
              fontWeight: theme.fontWeights.bold,
              color: theme.colors.text,
              marginBottom: theme.spacing.lg,
              textAlign: 'center',
            }}
          >
            Welcome Back
          </h2>

          {/* Email */}
          <div style={{ marginBottom: theme.spacing.md }}>
            <label
              style={{
                display: 'block',
                marginBottom: theme.spacing.xs,
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: theme.spacing.sm,
                borderRadius: 6,
                border: `1px solid ${theme.colors.textSecondary}`,
                fontSize: theme.fontSizes.md,
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: theme.spacing.lg }}>
            <label
              style={{
                display: 'block',
                marginBottom: theme.spacing.xs,
                fontSize: theme.fontSizes.sm,
                color: theme.colors.textSecondary,
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: theme.spacing.sm,
                borderRadius: 6,
                border: `1px solid ${theme.colors.textSecondary}`,
                fontSize: theme.fontSizes.md,
              }}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: theme.spacing.sm,
              backgroundColor: theme.colors.primary,
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              fontSize: theme.fontSizes.md,
              fontWeight: theme.fontWeights.semiBold,
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>
      </div>

      {/* Toast */}
      {showToast && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default LoginScreen;
