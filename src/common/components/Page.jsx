const Page = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        justifyContent: 'center',
        padding: '16px',
        alignItems: 'center',
        background: '#FFF',
        boxShadow: '0 4 4 #00000040',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

export default Page;
