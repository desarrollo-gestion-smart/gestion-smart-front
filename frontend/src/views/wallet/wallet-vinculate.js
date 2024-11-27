import React, { useState } from 'react';

const WalletLinkedMessage = () => {
  const [isWalletLinked, setIsWalletLinked] = useState(false);

  const handleLinkWallet = () => {
    // Simula el proceso de vinculación
    setIsWalletLinked(true);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#333' }}>Estado de la Billetera</h2>
      {isWalletLinked ? (
        <div style={{ color: 'green', fontSize: '18px', margin: '10px 0' }}>
          ✅ Billetera vinculada exitosamente.
        </div>
      ) : (
        <div style={{ color: 'red', fontSize: '18px', margin: '10px 0' }}>
          ❌ Ninguna billetera vinculada.
        </div>
      )}
      <button
        onClick={handleLinkWallet}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: isWalletLinked ? '#aaa' : '#007BFF',
          border: 'none',
          borderRadius: '5px',
          cursor: isWalletLinked ? 'not-allowed' : 'pointer',
        }}
        disabled={isWalletLinked}
      >
        {isWalletLinked ? 'Billetera vinculada' : 'Vincular Billetera'}
      </button>
    </div>
  );
};

export default WalletLinkedMessage;
