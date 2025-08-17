import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>
            Developer:{" "}
            <a href="" target="_blank">
              Yehor Bychuk
            </a>{" "}
          </p>
          <p>
            Contact us: <a href="">in development</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
