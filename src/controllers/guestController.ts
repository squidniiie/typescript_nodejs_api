const getGuests = (req: Request, res: any) => {
    res.status(200).json({message: 'Get Guests'})}

module.exports = {getGuests}