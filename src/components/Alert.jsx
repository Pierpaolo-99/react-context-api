import { useAlertContext } from '../contexts/AlertContext';

const Alert = () => {
    const { alertData, setAlertData } = useAlertContext();
    const { type, message } = alertData;

    const closeAlert = () => {
        setAlertData({ type: '', message: '' });
    };

    if (!message) return null;

    const alertClass = {
        success: 'alert-success',
        error: 'alert-danger',
        warning: 'alert-warning',
        info: 'alert-info',
    }[type] || 'alert-danger';

    return (
        <div className="alert-container" style={{
            position: 'fixed', top: '20px', left: '50%',
            transform: 'translateX(-50%)', zIndex: 1050
        }}>
            <div className={`alert ${alertClass} d-flex justify-content-between align-items-center`} role="alert">
                <span>{message}</span>
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={closeAlert}
                ></button>
            </div>
        </div>
    );
};

export default Alert;