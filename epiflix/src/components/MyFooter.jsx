import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <div className="container-fluid mt-5 justify-content-center align-items-center bg-black">
      <div className="w-50 d-flex justify-content-center flex-column align-items-start m-auto p-3">
        <div className="row">
          <div id="icon" className="col mb-3">
            <Facebook className="text-white-50 me-2" />
            <Instagram className="text-white-50 me-2" />
            <Twitter className="text-white-50 me-2" />
            <Youtube className="text-white-50 me-2" />
          </div>
        </div>
        <div className="row d-flex flex-row">
          <div className="col col-xs-5">
            <ul className="list-unstyled">
              <li className="text-white-50">Audio e Subtitle</li>
              <li className="text-white-50">Media Center</li>
              <li className="text-white-50">Privacy</li>
              <li className="text-white-50">Contact Us</li>
            </ul>
          </div>
          <div className="col col-xs-5">
            <ul className="list-unstyled">
              <li className="text-white-50">Audio Description</li>
              <li className="text-white-50">Investor Relations</li>
              <li className="text-white-50">Legal Notices</li>
            </ul>
          </div>
          <div className="col col-xs-5">
            <ul className="list-unstyled">
              <li className="text-white-50">Help Center</li>
              <li className="text-white-50">Jobs</li>
              <li className="text-white-50">Cookie Preferences</li>
            </ul>
          </div>
          <div className="col col-xs-5">
            <ul className="list-unstyled">
              <li className="text-white-50">Gift Cards</li>
              <li className="text-white-50">Terms of Use</li>
              <li className="text-white-50">Corporate Information</li>
            </ul>
          </div>
        </div>
        <div className="row d-flex flex-column">
          <div className="col">
            <button type="button" className="btn btn-outline-secondary text-white-50 mb-3">
              Service Code
            </button>
          </div>
          <div className="col">
            <p className="text-white-50">&copy;1997-2023 Netflix, Inc. i-0d00fcda2fdf9c0de</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
