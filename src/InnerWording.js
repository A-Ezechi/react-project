const InnerWording = ({colourChoice}) => {
    console.log('Colour Choice: ', colourChoice)
    const defaultBackground = { backgroundColor: 'none' }

    return (
        <main className="colourBackground">
            <p
            className="userFeedback"
            style={colourChoice || defaultBackground }

            >Empty Value</p>
        </main>
    )
}

export default InnerWording