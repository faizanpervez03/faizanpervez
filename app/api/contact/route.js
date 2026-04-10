import nodemailer from 'nodemailer';
import { contactFormSchema } from '@/app/utils/validation';

/**
 * POST /api/contact
 * Handles contact form submissions and sends email to Faizan
 * Validates data with Zod schema before processing
 */
export async function POST(request) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = contactFormSchema.parse(body);

    // Check if email credentials are configured
    const hasEmailConfig = process.env.EMAIL_USER && process.env.EMAIL_PASSWORD && 
                          process.env.EMAIL_PASSWORD !== 'YOUR_APP_PASSWORD_HERE';

    if (hasEmailConfig) {
      try {
        // Create Nodemailer transporter using Gmail
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        // Email to Faizan
        const mailToPerson = {
          from: process.env.EMAIL_USER,
          to: 'faizanpervez005@gmail.com',
          subject: `New Contact Form Submission from ${validatedData.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #00d9ff;">New Contact Form Submission</h2>
              <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${validatedData.name}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #00d9ff;">
                  ${validatedData.message}
                </p>
              </div>
              <p style="color: #666; font-size: 12px; margin-top: 30px;">
                You can reply directly to ${validatedData.email}
              </p>
            </div>
          `,
        };

        // Confirmation email to sender
        const mailToSender = {
          from: process.env.EMAIL_USER,
          to: validatedData.email,
          subject: 'I received your message - Faizan Pervez',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #00d9ff;">Thanks for reaching out!</h2>
              <p>Hi ${validatedData.name},</p>
              <p>I've received your message and will get back to you as soon as possible. Thanks for your interest!</p>
              <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00d9ff;">
                <p><strong>Your Message:</strong></p>
                <p style="white-space: pre-wrap;">
                  ${validatedData.message}
                </p>
              </div>
              <p>Best regards,<br><strong>Faizan Pervez</strong></p>
              <p style="color: #666; font-size: 12px; margin-top: 30px;">
                📧 faizanpervez005@gmail.com<br>
                🔗 Portfolio: <a href="https://faizanpervez.com" style="color: #00d9ff;">faizanpervez.com</a>
              </p>
            </div>
          `,
        };

        // Send both emails
        await transporter.sendMail(mailToPerson);
        await transporter.sendMail(mailToSender);

        console.log('✅ Contact form submission processed and emails sent:', {
          name: validatedData.name,
          email: validatedData.email,
          timestamp: new Date().toISOString(),
        });
      } catch (emailError) {
        // Log email error but still accept the form submission
        console.error('⚠️ Email sending failed:', {
          message: emailError.message,
          code: emailError.code,
          hint: 'Check .env.local for valid EMAIL_USER and EMAIL_PASSWORD',
        });
        
        // Still log the form data
        console.log('📝 Contact form data received (email not sent):', {
          name: validatedData.name,
          email: validatedData.email,
          message: validatedData.message,
          timestamp: new Date().toISOString(),
        });
      }
    } else {
      // Email not configured - still log the submission
      console.log('📝 Contact form submission received (email not configured):', {
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
        timestamp: new Date().toISOString(),
        hint: 'Configure .env.local with EMAIL_USER and EMAIL_PASSWORD to enable email sending',
      });
    }

    // Always return success
    return Response.json(
      {
        success: true,
        message: 'Message received! I\'ll get back to you as soon as possible.',
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle validation errors
    if (error.name === 'ZodError') {
      console.error('❌ Validation error:', error.errors);
      return Response.json(
        {
          success: false,
          error: 'Please fill in all required fields correctly.',
          details: error.errors,
        },
        { status: 400 }
      );
    }

    // Handle unexpected errors
    console.error('❌ Unexpected error:', {
      message: error.message,
      stack: error.stack,
    });

    return Response.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Optional: Handle other HTTP methods
export async function OPTIONS() {
  return Response.json({}, { status: 200 });
}
