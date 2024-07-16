export default ({ app }, inject) => {
    const dir = () =>{
      const dir = app.i18n.locales.find((x) => x.code === app.i18n.locale)?.dir;
      document.body.classList.remove("rtl")
      document.body.classList.remove("ltr")
      document.body.classList.add(dir)
      return dir
      }
      inject('dir', dir);
    };