const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format'
    });
  }

  try {
    // Create transporter with your email service
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to you (notification)
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e8f4fd; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              This message was sent from your portfolio contact form on ${new Date().toLocaleString()}.
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply email to the sender
    const autoReplyOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            Thank You for Your Message!
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Hi ${name},
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Thank you for reaching out to me through my portfolio website. I've received your message about 
            "<strong>${subject}</strong>" and I appreciate you taking the time to contact me.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">What happens next?</h3>
            <ul style="color: #555; line-height: 1.6;">
              <li>I'll review your message carefully</li>
              <li>You can expect a response within 24-48 hours</li>
              <li>For urgent matters, feel free to call me directly</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            In the meantime, feel free to explore my other projects on 
            <a href="https://github.com/lasindu-themiya" style="color: #667eea; text-decoration: none;">GitHub</a> 
            or connect with me on 
            <a href="https://linkedin.com/in/lasindu-themiya-39474b276" style="color: #667eea; text-decoration: none;">LinkedIn</a>.
          </p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #667eea; color: white; border-radius: 8px; text-align: center;">
            <h3 style="margin-top: 0; color: white;">Lasindu Themiya</h3>
            <p style="margin: 5px 0; color: #e8f4fd;">Software Engineering Student & Co-Founder</p>
            <p style="margin: 5px 0; color: #e8f4fd;">📧 lasinduthemiya96@gmail.com</p>
            <p style="margin: 5px 0; color: #e8f4fd;">📱 +94 701804683</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f4fd; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 14px; text-align: center;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    // More specific error messages
    let errorMessage = 'Failed to send message. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your email credentials.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Failed to connect to email server. Please check your internet connection.';
    } else if (error.code === 'EMESSAGE') {
      errorMessage = 'Invalid email format or content.';
    }
    
    return res.status(500).json({
      success: false,
      message: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
