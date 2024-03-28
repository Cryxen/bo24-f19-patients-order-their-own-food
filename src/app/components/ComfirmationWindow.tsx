import '@/app/styles/confirmationWindow.scss'

const ConfirmationWindow = (props: {message: string, confirmButton: string, declineButton: string, handleConfirmButtonPress: () => void, handleDeclineButtonPress: () => void}) => {

    const {message, confirmButton, declineButton, handleConfirmButtonPress, handleDeclineButtonPress} = props


    return (
        <div className="confirmationWindow">
            <div className='confirmationWindowContainter'>
            <p>{message}</p>
            <button onClick={handleConfirmButtonPress}>{confirmButton}</button>
            <button onClick={handleDeclineButtonPress}>{declineButton}</button>
            </div>
        </div>
    )
}
export default ConfirmationWindow