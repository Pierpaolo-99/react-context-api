import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">404 - Page Not Found</h1>
                    <p className="col-md-8 fs-4">
                        Sorry, the page you are looking for does not exist. You can always go back to the homepage.
                    </p>
                    <Link to="/" className="btn btn-primary btn-lg">
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </>
    );
}