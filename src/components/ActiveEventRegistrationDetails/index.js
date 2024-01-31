// Write your code hereimport React from 'react' // Import React
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATION_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveEventsView = () => (
    <p className="no-active-event-description">
      Click on an event to view its registration details
    </p>
  )

  const renderRegistrationClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registration closed"
        className="registration-closed-image"
      />
      <h1 className="registration-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-description">
        Stay tuned; we will reopen the registration soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="registered-img"
        alt="registered"
      />
      <h1 className="registered-heading">
        You have already registered for this event
      </h1>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="view-container">
      <img
        className="yet-to-register"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="registration-details">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegister()
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationClosed:
        return renderRegistrationClosedView()
      default:
        return renderNoActiveEventsView()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
