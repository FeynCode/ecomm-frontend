const Button = ({ children, isActive, ...rest }) => {
  return <button className={`border flex items-center gap-2 px-5 py-2 uppercase rounded shadow-sm border-black bg-[${isActive ? '#fff' : '#fcfcfc'}] hover:border-b-2 hover:bg-white`} {...rest}>{children}</button>;
}

export default Button;
