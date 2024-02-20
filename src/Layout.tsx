interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-[100%] md:w-full xl:max-w-[1200px] xl:mx-auto">
      {children}
    </div>
  );
};

export default Layout;
