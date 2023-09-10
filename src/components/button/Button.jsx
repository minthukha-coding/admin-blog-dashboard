function Button(props) {
  return (
    <div type={props.type} onClick={props.onClick} className={props.className}>
      {props.childern}
    </div>
  );
}

export default Button;
