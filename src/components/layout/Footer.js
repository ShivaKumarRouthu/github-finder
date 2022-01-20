function Footer() {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div className="">Copyright &copy; {fullYear} All rights reserved</div>
    </footer>
  );
}

export default Footer;
