interface pageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <header>
        <h1>SaaS Dashboard</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default PageLayout;
