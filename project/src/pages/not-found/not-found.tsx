import Footer from '../../components/footer/footer';
function NotFound() {
  return (
    <div className="user-page">
      <div className="sign-in user-page__content">
        <h1 className="not-found-error" style={{textAlign: 'center', fontSize: 45}}>404 Page Not Found</h1>
      </div>
      <Footer />
    </div>

  );
}

export default NotFound;
