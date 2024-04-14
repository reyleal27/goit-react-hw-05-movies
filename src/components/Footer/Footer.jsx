import './FooterStyle.css';

export const Footer = () => {
  return (
    <div className="Footer">
      <footer className="FooterContainer">
        <p className="FooterText">&copy; {new Date().getFullYear()} Movies</p>
      </footer>
    </div>
  );
};
