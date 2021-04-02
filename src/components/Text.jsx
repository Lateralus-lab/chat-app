const Text = () => {
  return (
    <div className="text">
      <div className="text__item">
        <input
          className="input__textarea"
          name="textarea"
          type="textarea"
          placeholder="Write a message..."
        />
      </div>
      <button className="btn btn-small">Send</button>
    </div>
  );
};

export default Text;
