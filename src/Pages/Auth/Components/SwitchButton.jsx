const SwitchToggleButton = ({ button, setButton }) => {
  return (
    <div className="switch-container">
      Kayıt Ol
      <span
        className="switch-button"
        onClick={(e) => {
          e.target.children[0].classList.toggle("active");
          setButton(!button);
        }}
      >
        <span
          className="switch-circle"
          onClick={(e) => e.stopPropagation()}
        ></span>
      </span>
      Giriş yap
    </div>
  );
};

export default SwitchToggleButton;
