import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Toast from './Toast';

const ToastButton = () => {
  const { theme } = useContext(ThemeContext);
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowToast(true)}
        style={{
          backgroundColor: theme.colors.primary,
          color: theme.colors.text,
          padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
          border: 'none',
          borderRadius: 6,
          fontSize: theme.fontSizes.md,
          fontWeight: theme.fontWeights.semiBold,
          fontFamily: theme.fontFamilies.inter,
          cursor: 'pointer',
        }}
      >
        Show Toast
      </button>

      {showToast && (
        <Toast
          message="This is a themed toast message!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default ToastButton;
