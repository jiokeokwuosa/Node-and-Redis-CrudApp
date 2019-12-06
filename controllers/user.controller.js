import User from '../db/';
class UserController {
    /* eslint camelcase: 0 */
    static async getAllUsers(req, res) {     
      try {
        await User.find((err, createdUser) => {
          if (err) console.log(err);               
          
          return res.status(200).json({
              status: 'success',
              data: createdUser
          });
            
        });
      } catch (err) {
        return res.status(500).json({
          status: '500 Internal server error',
          error: 'Error getting new User'
        });
      }
    }  
    static async createUser(req, res) {         
        try {
             const {username} =req.body; 
             await User.create({username:username}, (err, createdUser) => {
                if (err) console.log(err);               
                
                return res.status(201).json({
                    status: 'success',
                    data: createdUser
                });
                 
             });
        } catch (err) {
          return res.status(500).json({
            status: '500 Internal server error',
            error: 'Error Creating new User'
          });
        }
    }  
   
  }
  export default UserController;