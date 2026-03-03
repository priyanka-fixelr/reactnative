import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Toast = ({ message, type = 'success', onClose }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const backgroundColors = {
    success: theme.colors.primary,
    error: '#E53935',
    info: '#2196F3',
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: theme.spacing.lg,
        right: theme.spacing.lg,
        backgroundColor: backgroundColors[type],
        color: theme.colors.text,
        padding: theme.spacing.sm,
        borderRadius: 8,
        fontSize: theme.fontSizes.md,
        fontWeight: theme.fontWeights.medium,
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: 1000,
        minWidth: 200,
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
