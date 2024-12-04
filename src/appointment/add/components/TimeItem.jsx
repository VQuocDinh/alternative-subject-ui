
const TimeItem = ({ isActive, value }) => {
    return (
      <div
        style={{
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: isActive ? "#4caf50" : "#f0f0f0",
          color: isActive ? "#fff" : "#000",
        }}
      >
        {value}
      </div>
    );
  };

export default TimeItem
