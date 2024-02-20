interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-fit md:w-full xl:max-w-[1200px] xl:mx-auto overflow-hidden">
      {children}
    </div>
  );
};

export default Layout;
