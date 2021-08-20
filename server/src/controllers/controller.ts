export const sendMessage = async (req, res) => {
    try {
        res.status(200).json({
            message: "Hello",
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
