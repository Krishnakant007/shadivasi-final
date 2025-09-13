// // app/services/otpService.js
// import axios from 'axios';

// const API_KEY = 'YOUR_2FACTOR_API_KEY'; // Replace with your key

// export const sendOtp = async (mobileNumber) => {
//   try {
//     const response = await axios.get(
//       `https://2factor.in/API/V1/${API_KEY}/SMS/+91${mobileNumber}/AUTOGEN`
//     );
//     return response.data;
//   } catch (error) {
//     console.error("OTP Send Error:", error);
//     throw error;
//   }
// };

// export const verifyOtp = async (mobileNumber, otp) => {
//   try {
//     const response = await axios.get(
//       `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${mobileNumber}/${otp}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error("OTP Verify Error:", error);
//     throw error;
//   }
// };











// app/services/otpService.js
// import axios from 'axios';

// const API_KEY = 'efbeb1f4-7613-11f0-a562-0200cd936042'; // Replace with your actual API key

// /**
//  * Send OTP to a mobile number
//  * @param {string} mobileNumber - 10-digit mobile number
//  * @returns {string} sessionId - returned by 2Factor API
//  */
// export const sendOtp = async (mobileNumber) => {
//   try {
//     const response = await axios.get(
//       `https://2factor.in/API/V1/${API_KEY}/SMS/+91${mobileNumber}/AUTOGEN`
//     );

//     if (response.data.Status === 'Success') {
//       console.log('OTP sent successfully:', response.data);
//       return response.data.Details; // This is the session ID
//     } else {
//       throw new Error('Failed to send OTP: ' + response.data.Details);
//     }
//   } catch (error) {
//     console.error('OTP Send Error:', error.response?.data || error.message);
//     throw error;
//   }
// };

// /**
//  * Verify OTP using session ID
//  * @param {string} sessionId - session ID returned by sendOtp
//  * @param {string} otp - OTP entered by user
//  * @returns {object} verification result
//  */
// export const verifyOtp = async (sessionId, otp) => {
//   try {
//     const response = await axios.get(
//       `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${sessionId}/${otp}`
//     );

//     if (response.data.Status === 'Success') {
//       console.log('OTP verified successfully:', response.data);
//       return response.data;
//     } else {
//       throw new Error('OTP verification failed: ' + response.data.Details);
//     }
//   } catch (error) {
//     console.error('OTP Verify Error:', error.response?.data || error.message);
//     throw error;
//   }
// };











// // app/services/otpService.js
// import axios from 'axios';

// const API_KEY = 'efbeb1f4-2-020036042'; // Replace with your actual 2Factor API key

// // Send OTP
// export const sendOtp = async (mobileNumber) => {
//   try {
//     const response = await axios.get(
//       `https://2factor.in/API/V1/${API_KEY}/SMS/+91${mobileNumber}/AUTOGEN`
//     );

//     if (response.data.Status === 'Success') {
//       return response.data.Details; // Session ID
//     } else {
//       throw new Error('Failed to send OTP: ' + response.data.Details);
//     }
//   } catch (error) {
//     throw new Error(error.response?.data || error.message);
//   }
// };

// // Verify OTP
// export const verifyOtp = async (sessionId, otp) => {
//   try {
//     const response = await axios.get(
//       `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${sessionId}/${otp}`
//     );

//     if (response.data.Status === 'Success') {
//       return response.data;
//     } else {
//       throw new Error('OTP verification failed: ' + response.data.Details);
//     }
//   } catch (error) {
//     throw new Error(error.response?.data || error.message);
//   }
// };






//17/08/2025



// import axios from "axios";

// const API_KEY = "efbeb1f4-7613-11f0-a562-0200cd936042"; // your actual 2Factor API key

// // Send OTP
// export const sendOtp = async (mobileNumber) => {
//   try {
//     const response = await axios.get(
//       `https://2factor.in/API/V1/${API_KEY}/SMS/+91${mobileNumber}/AUTOGEN`
//     );

//     return response.data; // returns { Status, Details }
//   } catch (error) {
//     throw new Error(error.response?.data || error.message);
//   }
// };

// // Verify OTP
// export const verifyOtp = async (sessionId, otp) => {
//   try {
//     const response = await axios.get(
//       `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${sessionId}/${otp}`
//     );

//     return response.data; // returns { Status, Details }
//   } catch (error) {
//     throw new Error(error.response?.data || error.message);
//   }
// };
 





//21/08/2025

// app/services/otpService.js
const API_KEY = 'efbeb1f4-7613-11f0-a562-0200cd936042'; // Replace with your 2factor.in API key
const SENDER_ID = 'SLVECH';
const TEMPLATE_NAME = 'OTP1';

export const sendOtp = async (phoneNumber) => {
  try {
    const response = await fetch(
      `https://2factor.in/API/V1/${API_KEY}/SMS/${phoneNumber}/AUTOGEN2/${TEMPLATE_NAME}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    
    if (data.Status === 'Success') {
      return {
        success: true,
        sessionId: data.Details,
        message: 'OTP sent successfully'
      };
    } else {
      return {
        success: false,
        message: data.Details || 'Failed to send OTP'
      };
    }
  } catch (error) {
    console.error('Error sending OTP:', error);
    return {
      success: false,
      message: 'Network error. Please try again.'
    };
  }
};

export const verifyOtp = async (sessionId, otp) => {
  try {
    const response = await fetch(
      `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${sessionId}/${otp}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    
    if (data.Status === 'Success') {
      return {
        success: true,
        message: 'OTP verified successfully'
      };
    } else {
      return {
        success: false,
        message: data.Details || 'Invalid OTP'
      };
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return {
      success: false,
      message: 'Network error. Please try again.'
    };
  };
};

export const resendOtp = async (sessionId) => {
  try {
    const response = await fetch(
      `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${sessionId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    
    if (data.Status === 'Success') {
      return {
        success: true,
        message: 'OTP resent successfully'
      };
    } else {
      return {
        success: false,
        message: data.Details || 'Failed to resend OTP'
      };
    }
  } catch (error) {
    console.error('Error resending OTP:', error);
    return {
      success: false,
      message: 'Network error. Please try again.'
    };
  }
};