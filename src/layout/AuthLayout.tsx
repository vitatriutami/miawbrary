export const AuthLayout = (props: any) => {
  const { children } = props;

  return (
    <div>
      {/* <h1>{title}</h1> */}
      <p>Welcome, please enter your detail</p>
      {children}
    </div>
  );
};
