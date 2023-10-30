const Complaint = require('../Models/complaintModel');
const geocode = require('../util/geocode');

// Controller function to register a new complaint
exports.registerComplaint = async (req, res) => {
  try {
    const { complaintText, date } = req.body;
    const userId = req.user._id;
    const photo = req.file.path

    // Extract location information from the image using your geocode module
    const location = await geocode.extractLocationFromImage(photo);

    // console.log(userId, description, location, date, photo);

    await Complaint.create({
      user: userId,
      complaintText,
      location, // Include location if it's available
      date, // Automatically set the current date
      attachment: photo
    });

    //await newComplaint.save();
    res.status(201).json({ message: 'Complaint registered successfully', success: true });
  } catch (error) {
    console.error('Error registering complaint:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller function to get all complaints for the dashboard
exports.getAllComplaints = async (req, res) => {
  try {
    // Assuming you want to retrieve complaints for the user who is currently logged in
    const userId = req.user.id; // Access the user's ID from authentication

    const complaints = await Complaint.find({ user: userId });
    res.status(200).json(complaints);
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller function to delete a complaint by its ID
exports.deleteComplaint = async (req, res) => {
  try {
    const complaintId = req.params.id; // Get the complaint ID from the request parameters

    // Find the complaint by ID and remove it
    const deletedComplaint = await Complaint.findByIdAndRemove(complaintId);

    if (!deletedComplaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    res.status(200).json({ success: true, message: 'Complaint deleted successfully' });
  } catch (error) {
    console.error('Error deleting complaint:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller function to log out the user
exports.logout = (req, res) => {
  // You can handle user logout here (e.g., clearing authentication tokens, sessions, or cookies).
  // Redirect the user to the login page after logout.
  res.status(200).json({ message: 'User logged out successfully' });
};
